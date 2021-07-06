import React from 'react';
 import FormTabs from './FormTabs';
 import PopUpForm from './PopUpForm';
// import PopUpButton from './PopupButton';
 import { Button } from '@material-ui/core';
 import { useState } from 'react';


 {/* form tab contrain tabs and panel # 0 which is the main form (client info) */}
 {/** in the tab panel # 1...i called 'configuration tab */}
 {/**in the third panel, there is pop up form */}
export default function SimpleTabs() {
const [openPopup,setOpenPopup]=useState(false);
console.log(openPopup);   
return (
     <div>
         <FormTabs/>
     </div>

);
}