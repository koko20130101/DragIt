import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { AxiosRequestConfig } from 'axios';
import { useBaseItems } from 'base/Hooks/useBaseItems';

const Combobox = React.forwardRef((
  props:{
    value?:string|[],
    multiple?:boolean,
    onChange?:any,
    itemKey?:string,
    itemName?:string,
    fullWidth?:boolean,
    dataApi?:AxiosRequestConfig;
    items?:Array<any>;
    label?:string, 
    variant?:any, 
    size?:any,
    groupBy?:string,
  },
  ref:any
)=>{
  const{value, 
    multiple, 
    onChange, 
    itemName = 'name',
    fullWidth,
    dataApi,
    items,
    ...rest
  } = props;


  let name = dataApi ? itemName : 'label';
  //const mountedRef = useRef(true);
  const empertyValue = multiple ? []:'';
  const [request] = React.useState<AxiosRequestConfig|undefined>(dataApi);
  const [menuItems, loading] = useBaseItems(request);

  const itemsData = (dataApi? menuItems : items) as any;
  
  const [inputValue, setInputValue] = React.useState<any>(value||empertyValue);

  let options = itemsData?.map((item:any)=>item[name]);

  const handleChange = (newValue:any)=>{
    setInputValue( newValue );

    let value = newValue && newValue.length === 0 ? '' : newValue;
    onChange && onChange({
      target:{
        value:value,
      }
    });
  }

  return (
    <Autocomplete
      multiple = {multiple}
      options = {options||[]}
      loading = {!!loading }
      ref = {ref}
      value = {inputValue}
      freeSolo
      fullWidth = {fullWidth}
      //defaultValue = {value||empertyValue}
      renderInput={(params) => (
        <TextField
          {...params}
          {...rest}        
      />
      )}

      onChange={(event, newValue) => {
        handleChange(newValue);
      }}

    />

  )
})

export default Combobox;
