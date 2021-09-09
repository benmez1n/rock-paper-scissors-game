import { useEffect, useState } from "react";
import Rules from "./Rules";

const GameSection = ({scoreHandler}) => {
    const [ isStart,setIsStart ] = useState(false);
    const [ isEnd , setIsEnd ] = useState(false);
    const [ userChoice , setUserChoice ] = useState("");
    const [ houseChoice , setHouseChoice ] = useState('');
    const [result , setResult ] = useState('');
    const [isUserWin , setIsUserWin ] = useState (false);
    const [isUserLose , setIsUserLose ] = useState(false);
    const clickHandler = (choice) => {
        const arr = ['paper','scissors','rock'];
        setIsStart(true);
        setUserChoice(choice);
        setTimeout(() => {
            setHouseChoice(arr[Math.floor(Math.random()*arr.length)]);
        }, 2000);
        setTimeout(() => {
            setIsEnd(true)
        }, 3000);
    }
    const playAgainHandler = () => {
        setIsStart(false);
        setIsEnd(false);
        setResult('');
        setUserChoice('');
        setHouseChoice('');
        setIsUserLose(false);
        setIsUserWin(false);
    }
    const checkWinner = (user,house) => {
        if(user === house){
            setResult("draw");
            scoreHandler("draw");
        }
        else if((user === "paper" && house === "rock")
            || (user === "scissors" && house === "paper" )
            || (user === "rock" && house === "scissors" ) ){
                setResult("you win")
                scoreHandler("win")
                setTimeout(() => {
                    setIsUserWin(true) ;
                }, 1000);
            }
        else{
            setResult("you lose")
            scoreHandler("lose");
            setTimeout(() => {
                setIsUserLose(true); 
            }, 1000);
        }
    }
    useEffect(()=>{
        if(isEnd)checkWinner(userChoice,houseChoice);
    },[isEnd])
    return ( 
        <section>
            {!isStart  && <div className="gameContainerHome">
                <div>
                    <div className="paper" onClick={()=>clickHandler("paper")}>
                        <img src="images/icon-paper.svg" alt="paper" />
                    </div>
                    <div className="scissors" onClick={()=>clickHandler("scissors")}>
                        <img src="images/icon-scissors.svg" alt="scissors" />
                    </div>
                </div>
                <div className="rock" onClick={()=>clickHandler("rock")}>
                    <img src="images/icon-rock.svg" alt="rock" />
                </div>
            </div>}
            {isStart  && <div className="gameContainerStart" 
                        style={isEnd ? {width:"900px"}:{width:"600px"}}>
               <div>
                   <h1>you picked</h1>
                   <div className={userChoice}>
                        <img src={`images/icon-${userChoice}.svg`} alt="user choice" />
                        <div className={isUserWin && "winner"}></div>
                        <div className={isUserWin && "winner2"}></div>
                   </div>
               </div>
               {isEnd && <div className="result">
                        <h1>{result}</h1>
                        <button className="playAgain" onClick={playAgainHandler}>play again</button>
                    </div>
               }
               <div>
                   <h1>the house picked</h1>
                   <div className={houseChoice ? houseChoice : "choiceAnim"  }>
                        {houseChoice && <img src={`images/icon-${houseChoice}.svg`} alt="user choice" />}
                        <div className={isUserLose && "winner"}></div>
                        <div className={isUserLose && "winner2"}></div>
                   </div>
               </div>
            </div>}
            <Rules/>
        </section>
     );
}
 
export default GameSection;