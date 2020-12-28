import { IMeta } from "base/Model/IMeta";
import { makeAutoObservable } from "mobx";
import { IModelStore } from "./IModelStore";
import { IFieldStore } from "./FieldStore";


export class ModelFieldStore implements IFieldStore, IModelStore {
  defaultValue?: any;
  value?: any;
  error?: string;
  meta: IMeta;
  loading?: boolean;
  subFields: Map<string,IFieldStore>;
  constructor(meta: IMeta) {
    this.meta = meta;
    this.subFields = new Map<string,IFieldStore>();
    makeAutoObservable(this);
  }

  setFieldStore(fieldName: string, fieldStore: IFieldStore) {
    this.subFields.set(fieldName, fieldStore);
  }

  getFieldStore(fieldName:string){
    return this.subFields.get(fieldName)
  }

  setValue(value: any) {
  }

  setModel(model: any) {
    const fieldName = this.meta.props?.field;
    const fieldValue = model && fieldName ? model[fieldName] : undefined;
    this.defaultValue = fieldValue;
    this.subFields.forEach(fieldStore=>{
      fieldStore.setModel(fieldValue);
    })
  }

  toFieldsGQL() {
    let subGql = '';
    this.subFields.forEach(fieldStore=>{
      subGql = subGql + ` ${fieldStore.toFieldsGQL()} `
    })

    return subGql ? ` ${this.meta.props?.field} {id ${subGql}}` :  ` ${this.meta.props?.field} `;
  }

}
