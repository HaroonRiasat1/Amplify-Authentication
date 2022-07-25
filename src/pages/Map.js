import React from "react";

function Map(props) {
    const data = props.data;
    const listItems = data.map((element) =>
    <>
    
       <tr className="content">
     <td> {element.title} </td>
     <td> {element.description} </td>
     <td> {element.status} </td>
     </tr>
      
      </>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  export default Map;