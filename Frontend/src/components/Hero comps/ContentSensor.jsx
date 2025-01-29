import '../styles/ContentSensor.css'
import Text from './Text';
import Media from './Media';
import { useState } from "react";

function ContentSensor() {
  const [component,setComponent]= useState(null);
  const gotext =()=>{ setComponent('Text')}
  const goimage=()=>{ setComponent('Media')}
  return (
    <div className="sensor-main">
     <div className="sensor-head">
      <p onClick={gotext}>Text</p>
      <p onClick={goimage}>Media</p>
     </div>
     <div className="sensor-hero">
      {
        component=='Media' && <Media/>
      }
      {
        component=='Text' && <Text/>
      }
      {
        component==null && <div><p>Please select a option</p></div>
      }
     </div>
    </div>
  );
}
export default ContentSensor;
