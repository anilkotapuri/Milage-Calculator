import { ReactDOM } from 'react'
import './App'
export function Result(){
    const car=document.getElementById("car").value;
    const mod=document.getElementById("mod").value;
    const km= document.getElementById("km").value;
    var re='';
    if(car==1)
    {
        if(mod==1)
        {
            re= km/14.3;
            document.getElementById("result").value=Math.ceil(re)+" Liters";
            alert("Have a Safe Ride");
        }
        if(mod==2)
        {
            re= km/12;
            document.getElementById("result").value=Math.ceil(re)+" Liters";
            alert("Have a Safe Ride");
        }
        if(mod==3)
        {
            re= km/16.5;
            document.getElementById("result").value=Math.ceil(re)+" Liters";
            alert("Have a Safe Ride");
        }
    }
    if(car==2)
    {
        if(mod==1)
        {
            re= km/18;
            document.getElementById("result").value=Math.ceil(re)+" Liters";
            alert("Have a Safe Ride");
        }
        if(mod==2)
        {
            re= km/9;
            document.getElementById("result").value=Math.ceil(re)+" Liters";
            alert("Have a Safe Ride");
        }
        if(mod==3)
        {
            re= km/15.3;
            document.getElementById("result").value=Math.ceil(re)+" Liters";
            alert("Have a Safe Ride");
        }
    }
}
