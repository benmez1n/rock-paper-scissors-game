import { useState } from "react";

const Rules = () => {
    const [isRules,setIsRules] = useState(false)
    const rulesOpenHandler = () => {
        setIsRules(true);
    }
    const rulesCloseHandler = () => {
        setIsRules(false)
    }
    return (
        <> 
            <div className={isRules ? "rules rulesOpen" : "rules"}>
                <div className="rulesContent">
                    <div className="rulesHeader">
                        <h1>Rules</h1>
                        <img src="images/icon-close.svg" alt="close" onClick={rulesCloseHandler}/>
                    </div>
                    <img src="images/image-rules.svg" alt="rules" />
                </div>
            </div>
            <button id="rulesButton" onClick={rulesOpenHandler}>Rules</button>
        </>
     );
}
 
export default Rules;