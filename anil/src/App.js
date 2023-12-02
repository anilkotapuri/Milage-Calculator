import "./App.css"
import React, { useEffect, useState } from "react"
import logo from './46902.png'
import bu from './button.png'
import web from './web.png'
import "./logic"
import { Result } from "./logic.js";
function App()
{
    const com=[
        {id:"1",name:"BMW"},
        {id:"2",name:"AUDI"},
        {id:"3",name:"MERCEDEZ"},
        {id:"4",name:"MARUTHI-SUZUKI"},
        {id:"5",name:"VOLKS-WEGAN"},
        {id:"6",name:"TOYOTA"},
        {id:"7",name:"Honda"},
        {id:"8",name:"Hyundai"},
        {id:"9", name:"Chevrolet"},
        {id:"10", name:"Ford"},
        {id:"11", name:"KIA"},
        {id:"12",name:"TATA"},
        {id:"13",name:"Renault"},
        {id:"14",name:"Skoda"}
    ]
    const mod=[
        {id:"1",companyId:"1",name:"X7"},
        {id:"2",companyId:"1",name:"X5"},
        {id:"3",companyId:"1",name:"X3"},
        {id:"1",companyId:"2",name:"Q3"},
        {id:"2",companyId:"2",name:"Q8"},
        {id:"3",companyId:"2",name:"Q2"},
    ]
    const [company,setcompany]=useState([]);
    const [model,setmodel]=useState([]);
    useEffect(()=>{
        setcompany(com);
    },[])
    const handlecompany=(id)=>{
        const dt=mod.filter(x =>x.companyId === id);
        setmodel(dt);
    }
    var a= {Result};
    const [ab,setab]=useState([]);
    useEffect(()=>{
        setab(a);
    })
return(
        <div className='hi'>
            <h1>Milage Calculator</h1>
            <div className='inner'>
                <h1>Vehicle Info</h1>
                <select className="cars" id="car" onChange={(e) => handlecompany(e.target.value)}>
                    <option value="0">-- Select Company --</option>
                    {
                        company && 
                        company!= undefined?
                        company.map((ctr,index)=>{
                            return(
                                <option key="index"  value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        :"No Company"
                    }
                </select>
                <br>
                </br>
                <img src={web} className="img"/>
                <button onClick={Result} className="btn"> Get</button>
                <input className="re" type="text" id="result" onClick={Result}></input>
                <select className="models" id='mod'>
                    <option value="0">-- Select Model --</option>
                    {
                        model && 
                        model!= undefined?
                        model.map((ctr,index)=>{
                            return(
                                <option key="index" value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        :"No Model"
                    }
                </select>
                <h2 className="km">Enter Distance In KM</h2>
                <input type="number" id="km"></input>
            </div>
        </div>
)
}
export default App
