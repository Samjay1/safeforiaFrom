const Text = ({defaultValue,onValueChange,errorState,question,questionName,sector})=>{
    let Question = question.replace('SECTOR',sector)

    return(
        <>
             {/* <!-- QUESTION-TEXT-INPUT --> */}
            <div  key={1}  className="question-body p-4 mt-2 bg-white"  style={ errorState ? {border:"1px solid red"} : {border: "1px solid #d2d4d4"}} >
                <p>{Question} <span className="text-danger">*</span></p>
                <div className="answers">
                    <div className="answer-item">
                        <label>
                            <input name={questionName} onChange={(e)=>{onValueChange({name: e.target.name, value:e.target.value})} } value={defaultValue} type="text" className="form-control border-0 text-input rounded-0"  placeholder="Type your response"/>
                        </label>
                    </div>
                </div>
            </div>
            {errorState && <div className="border bg-white pl-4 border-danger rounded p-1 mt-1"> <span className="icon  mr-1">!</span>
           <span className="text-danger font-weight-bold">This is a required question</span>
       </div>}
            {/* <!-- QUESTION-TEXT-INPUT --> */}

        </>
    );
}

export default Text;