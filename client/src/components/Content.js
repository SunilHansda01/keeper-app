import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useState } from "react";

const Content = (props) => {
  const [expand, setExpand] = useState(false);
  const content = props.content;
  const length = content.length;

  const toggleBtn = () => {
    setExpand( prevState => !prevState);
  }
 
  if(length > 100 ) 
  {
    return (
        <div>
           <p>{expand ? content : content.substr(0, 100) + "..."}</p>
           {expand ? <ExpandLessIcon onClick={toggleBtn}/> : (<ExpandMoreIcon onClick={toggleBtn}/>) }
        </div>
    )
  }
  else 
  {
    return (
        <div>
            <p>{content}</p>
        </div>
    )
  }
}

export default Content;