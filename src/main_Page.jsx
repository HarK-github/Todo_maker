import {useState} from "react";






function Main(){
    const [texts,setTexts]= useState("");
    const [tasks,setTasks]= useState([]);
    
    function AddButton(){
        return <>
            <button onClick={()=>{setTasks([...tasks,texts])}}>Add</button>
        </>
    }
    function TodoBox(props){
        const [edit,setEdit]=useState(false);
        const [txt,setTxt]= useState(props.value);
        const [visible,setvisible]= useState(true);
        if(!visible){
            return <></>
        }
        return <> { !edit ? < div key={props.value} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",border:"solid 7px #213547",width:"300px",height:"50%",padding:"2%",margin:"2%",borderRadius:"5px"}}>
                <div style={{textAlign:"center",borderRadius:"100%",border:"#213547 7px solid",width:"50px",height:"50px"}} onClick={()=>{setvisible(false)}}>X</div><p>{txt}</p>
                <button onClick={()=>{setEdit(!edit)}}>Edit</button>
            </div> : < div key={props.value} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",border:"solid 3px #213547",width:"300px",height:"50%",padding:"2%",margin:"2%",borderRadius:"5px"}}>
                <div style={{textAlign:"center",borderRadius:"100%",border:"#213547 1px solid",width:"50px",height:"50px"}}></div><input type="text" onChange={(e)=>{setTxt(e.target.value)}}></input>
                
                
                <button onClick={()=>{setEdit(!edit)}}>Save</button>
            </div>
            }
            </>
    }
    return <>
        
        <div>
        <div className="top">
        <div><h1>TODO MAKER</h1> by Harshit K</div>
        <div className="top">
            <div>Your list:</div>
            <div><input type="textbox" onChange={(e)=>setTexts(e.target.value)}></input></div>
            <AddButton />
        </div>
        </div>
        
        <hr/>
        <div className="middle" >
            {tasks.map((value)=>{ 
            return <> 
                <TodoBox value={value} />
            </>
            })}
        </div>
        <div className="mottom">
        </div>
        </div>
    </>
}
export default Main