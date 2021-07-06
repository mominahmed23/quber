import React from 'react'
import { CheckBox } from '@material-ui/core'
function switchMap(item,key,handleChangeCheck) {
    return (
        <div key={item}>
            
            <FormControlLabel
                     control={
                     <Checkbox
                         checked={state.checkedB}
                         onChange={handleChangeCheck}
                         name="checkedB"
                         color="#021B97"
                     />
                     }
                 label={index}
                 />
        </div>
    )
}

export default switchMap
