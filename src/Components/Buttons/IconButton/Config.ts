import { MetaConfig } from "../../../Base/RXNode/MetaConfig";
import { IMeta } from "../../../Base/RXNode/IMeta";
import { IPropConfig } from "../../../Base/RXNode/IPropConfig";
import OptionSelect from "Design/PageEditor/AttrebuteBox/PropsInputs/OptionSelect";
import marginConfigs from "Base/RXNode/Configs/marginConfigs";
import BooleanInput from "Design/PageEditor/AttrebuteBox/PropsInputs/BooleanInput";

export class IconButtonConfig extends MetaConfig{
  editPaddingY = '';
  editPaddingX = '';
  empertyPadding = '';
  hasAction = true;

  accept(child:IMeta){
    return false;
  }

  resolveLabel(meta:IMeta):string|undefined{
    return meta.name
  }

  getPropConfigs(): Array<IPropConfig>{
    return [
      ...marginConfigs,
      {
        name:'color',
        label:'color',
        input:OptionSelect,
        props:{
          items:[
            {
              value:'default',
              label:'Default'
            },
            {
              value:'inherit',
              label:'Inherit'
            },
            {
              value:'primary',
              label:'Primary'
            },
            {
              value:'secondary',
              label:'Secondary'
            },
          ]
        },
      },
      {
        name:'size',
        label:'size',
        input:OptionSelect,
        props:{
          items:[
            {
              value:'medium',
              label:'Medium'
            },
            {
              value:'small',
              label:'Small'
            },
          ]
        },
      },
      {
        name:'disabled',
        label:'disabled',
        input:BooleanInput,
      },
      {
        name:'disableElevation',
        label:'disableElevation',
        input:BooleanInput,
      },
      {
        name:'disableRipple',
        label:'disableRipple',
        input:BooleanInput,
      },
    ]
  }

}