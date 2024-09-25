import React, { useState } from "react";
import { data } from "../../assets/data.js";
export default function Quiz(){
    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [selectedAns, setselectedAns] = useState(null);
    let [score, setScore] = useState(0);
    const [result, setresult] = useState(false);
    const checkAns = (ans)=>{
        setselectedAns(ans);
        setIsCorrect(question.ans === ans);
        if(question.ans === ans){
            setScore(++score);
        }
    }
    const handleNextBtn = ()=>{
        if(selectedAns == 1 || selectedAns == 2 || selectedAns == 3 || selectedAns == 4){
            if(index == data.length-1){
                setresult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setIsCorrect(null);
            setselectedAns(null);
        }
    }
    const reset = () =>{
        setIndex(0);
        setQuestion(data[0]);
        setIsCorrect(null);
        setselectedAns(null);
        setScore(0);
        setresult(false);
    }
    return (
        <div className="bg-zinc-50 text-zinc-900 flex flex-col gap-3 w-[640px] px-8 py-6 rounded-md shadow-2xl font-['inter']">
            <h1 className="font-bold text-xl">Quiz App</h1>
            <hr className="h-[1px] border-none bg-zinc-400"/>
            {result? 
            <>
                {<>
                    <h2>
                        You Scored {score} out of {data.length}
                    </h2>
                    <button onClick={reset} className="bg-red-400 px-6 py-1 rounded-md m-auto text-zinc-50 font-medium text-lg">Reset</button>
                </>}
            </> : 
                <>
                    <h2 className="text-lg">{question.index}. {question.question}</h2>
                        <ul className="flex flex-col gap-2">
                            <li onClick={() => checkAns(1)} className={`border-[1px] rounded-md ${selectedAns == 1? (isCorrect ? 'bg-green-400 text-white' : 'bg-red-400 text-white'): 'bg-zinc-50'} p-1.5 cursor-pointer`}>{question.option1}</li>
                            <li onClick={() => checkAns(2)} className={`border-[1px] rounded-md ${selectedAns == 2? (isCorrect ? 'bg-green-400 text-white' : 'bg-red-400 text-white'): 'bg-zinc-50'} p-1.5 cursor-pointer`}>{question.option2}</li>
                            <li onClick={() => checkAns(3)} className={`border-[1px] rounded-md ${selectedAns == 3? (isCorrect ? 'bg-green-400 text-white' : 'bg-red-400 text-white'): 'bg-zinc-50'} p-1.5 cursor-pointer`}>{question.option3}</li>
                            <li onClick={() => checkAns(4)} className={`border-[1px] rounded-md ${selectedAns == 4? (isCorrect ? 'bg-green-400 text-white' : 'bg-red-400 text-white'): 'bg-zinc-50'} p-1.5 cursor-pointer`}>{question.option4}</li>
                        </ul>
                        <button onClick={handleNextBtn} className="px-6 py-1 bg-green-500 text-white rounded-md m-auto font-medium text-lg">{index == data.length - 1 ? "Submit" : "Next"}</button>
                        <div className="m-auto text-zinc-500 text-sm">{question.index} of {data.length} Questions</div>
                        {
                            isCorrect && <div className="text-green-500 m-auto">Correct</div>
                        }
                        {
                            isCorrect === false && <div className="text-red-500 m-auto">Wrong Answer</div>
                        }
                </>
            }
        </div>
    )
}