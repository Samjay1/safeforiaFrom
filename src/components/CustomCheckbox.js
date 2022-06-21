import { useState } from 'react';

const CustomCheckbox = ({onValueChange,errorState,question,answers, questionName})=>{
    

    let [showCss, setShowCss] = useState(false);
    let [custom_answers, setCustomAnswer] = useState([]);
    let [mylist, setList] = useState([]);
    let handleOnChanged = (e)=>{
        // console.log('answers :>> ', answers);
        if(e.target.checked){
            mylist.push({name: e.target.name, value: e.target.value})
            onValueChange({name:questionName, value:mylist})
            // console.log(e.target.value) 

        }else if(e.target.checked === false){ 
            let finalList = mylist.filter((item)=> item.value!==e.target.value) || mylist;
            setList(finalList)
            onValueChange({name:questionName, value:finalList}) 
            // console.log('222 remove from mylist',finalList)
        } 
    }

    const answerList = answers.map((answer,index)=> {
        let value = answer;

           return (
                <div key={index} className="answer-item">
                    <label>
                        <input 
                            name={questionName}
                            onChange={ handleOnChanged } 
                            value={value} 
                            type="checkbox" 
                            className="mr-2"/>
                        <span className="ml-2">{value}</span>
                    </label>
                </div>
           )
    })

    // console.log('custom_answers kdkd:>> ', custom_answers);
    const CustomAnswerList = custom_answers.length!==0 ? custom_answers.map((answer,index)=> {
        
           return (
                <div key={index} className="answer-item">
                    <label>
                        <input 
                            name={'customInput'}
                            onChange={ handleOnChanged } 
                            value={answer} 
                            type="checkbox" 
                            className="mr-2"/>

                        <span className="ml-2">{answer}</span>
                    </label>
                </div>
           )
    }) : null;



    // SHOWS CUSTOM INPUT
    const addinput = (e)=>{
        if(e.target.checked){
            console.log('addinput checked')
            setShowCss(true);
        }else{
            console.log('addinput Unchecked')
            setShowCss(false);
        }
    }

    // ADD CUSTOM CHECKBOX BY BUTTON
    const [textValue, setTextValue] = useState('');
    const addCheck = ()=>{
        if(textValue.length!==0){
            let currentAnswers = custom_answers;
            currentAnswers.push(textValue);
            setCustomAnswer(currentAnswers);
            setTextValue('');
        }

    }

    const textOnchange = (e)=>{
        setTextValue(e.target.value)
    }




    return(
        <>
              {/* <!-- QUESTION-CHECKBOX --> */}
             <div className="question-body p-4 mt-2"  style={ errorState ? {border:"1px solid red"} : {border: "1px solid #d2d4d4"}} >
                <p>{question} <span className="text-danger">*</span></p>
                <div className="answers">
                    {answerList}
                    
                    {/* Custom Checkbox */}
                    {CustomAnswerList}

                    {/* Add input */}
                    <div>
                            <div className="answer-item d-flex flex-wrap justify-content-start mr-2">
                                <label>
                                    <input 
                                        
                                        onChange={ addinput } 
                                        // value={value} 
                                        type="checkbox" 
                                        className="mr-2"/>

                                    <span className="ml-2">Others</span>
                                </label>
                                
                                {/* input section */}
                                <div className='showDesign' style={!showCss ? {display:'none'} : null}>
                                    <input onChange={textOnchange} type='text' className="form-control text-input mt-2 rounded-0  border-0" value={textValue} />
                                <button onClick={addCheck} className='btn ml-1 rounded-0 primary-btn text-white'> Add</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1 animate__animated animate__bounce"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-CHECKBOX --> */}
        </>
    )
}

export default CustomCheckbox;