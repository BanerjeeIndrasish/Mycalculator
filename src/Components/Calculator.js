import React, { useEffect, useState } from 'react';

export default function Calculator() {
    const buttons = [
        'AC', '<=', 
        '7', '/', '8', '9',
        '4', '+', '5', '6',
         '1', '-','2', '3', 
        '0', '*', '.', '='
    ];
    const [input, setInput] = useState('');
    const [showRes, setShowRes] = useState(false);
    let [result, setResult] = useState(0);

    function checkOpType(target){
        switch(target){                    
            case "+":
            case "-":
            case "*":
            case "/":
                return true;
            default:
                return false;
        }
    }
    const modifyInput = (cmd, text, add)=>{
        text = text.split('');
        switch(cmd){
            case "erasenumber":               
                if(text.length>0){
                    text.splice(text.length-1, 1);                    
                }
            case "changeop":
                if(text.length>0 && checkOpType(text[text.length-1])){
                    text.splice(text.length-1, 1, add);
                } 
            text = text.toString().replace(/,/g,'');
            setInput(text);
        }
                
    }
    const handleInput = (e) => {
        switch(e.target.value){  
            case "<=":
                modifyInput('erasenumber', input);
                break;          
            case "AC":
                setShowRes(false);
                setInput('');
                break;
            case "=":
                if(input.trim()!== '' && !checkOpType(input[input.length-1])){
                    setResult(eval(input));                                     
                    setInput('');
                    setShowRes(true);                    
                } 
                break;
            default:
                setShowRes(false);
                if(input.trim()==='' && checkOpType(e.target.value)){                    
                    setInput(`${result}${e.target.value}`)                           
                }  
                else{ 
                modifyInput('changeop', input, e.target.value);                                     
                setInput(input.concat(e.target.value));   
                } 
                break;           
        }        
    }
return (
    <React.Fragment>
        <section>
            <div className="bg-gray-900 w-96 h-screen mx-auto rounded-lg mt-0">
                <div className="header text-white text-center text-3xl px-2 py-2">My Calculator</div>

                <div className="mt-10 w-auto h-24 px-2">
                    <input className='w-full h-full text-3xl text-right' type="text" value={showRes?result:input} step={2} onChange={()=> console.log('User typing...')}/>
                </div>
                <div className='mt-8 px-3 w-auto h-80 flex flex-wrap -mb=4'>
                    {buttons.map(button => <button className={`w-20 h-20 m-1 text-center text-2xl rounded-md bg-green-200`} key={button} value={button} onClick={handleInput}>{button}</button>)}
                </div>
            </div>
        </section>
    </React.Fragment>
);
}
