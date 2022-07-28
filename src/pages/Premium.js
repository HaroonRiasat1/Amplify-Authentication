import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import {useState} from "react";
import {DataStore} from "@aws-amplify/datastore";
import {Task} from "../models";
import Map from "./Map";
const Premium = () => {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [status, setstatus] = useState("");
    const [data, setData] = useState("");
    const [check, setCheck] = useState(0);
  
     const handleSubmit  = async (event) => {
      event.preventDefault();
        await DataStore.save(new Task({title,description,status}) )
    }
    const ReadData = async () => {
    
        try {
            const task = await DataStore.query(Task);
            console.log("Posts retrieved successfully!", JSON.stringify(task, null, 2));
            setData(task);
            setCheck(1);
          } catch (error) {
            console.log("Error retrieving posts", error);
          }
    
    
    }

    return <Authenticator>
        {({signOut})=>(
            <div>
                <form onSubmit={handleSubmit}>
        <label>Enter your title:
          <input 
            type="text" 
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
           </label>
           <label ><br/>Enter your description:
          <input 
          type="description"
          value={description}
          onChange={(e)=>setdescription(e.target.value)}
          
          />
          </label>
          <label><br/>Enter your status 
          <input 
          type="status"
          value={status}
          onChange={(e)=>setstatus(e.target.value)}
          />
          </label>
       
        <input type="submit" />
      </form>
        <button onClick={ReadData}>Read Data</button>
                <button onClick={signOut}>signOut</button>


                {check && <table >
                    <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    </tr>
                    <Map data={data} />
                    </table>}

        

            </div>
            
        )}
    </Authenticator>
}
export default Premium;