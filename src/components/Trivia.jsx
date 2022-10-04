import React, { useEffect, useState } from 'react'
// import useSound from 'use-sound'
//import play from '../sounds/play.mp3'
//import correct from '../sounds/src_sounds_play.mp3'
//import wrong from '../sounds/src_sounds_wrong.mp3'
const Trivia = (props) => {



    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer")
    //  const [letsplay] = useState(play);
    // const [correctAnswer] = useState(correct);
    // const [wrongAnswer] = useState(wrong);

    // useEffect(() => {
    //     letsplay();
    // }, [letsplay]);


    useEffect(() => {

        setQuestion(props.data[(props.questionNumber) - 1]);

    }, [props.data, props.questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };
    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");

        delay(3000, () => {
            setClassName(a.correct ? "answer correct" : "answer wrong");
        });


        delay(6000, () => {
            if (a.correct) {
                props.setqQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null)
            }
            else {
                props.setStop(true);
            }
        });


    }



    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {
                    question?.answers.map((a) => (
                        <div
                            className={selectedAnswer === a ? className : "answer"}
                            onClick={() => handleClick(a)}
                        >{a.text}</div>
                    )
                    )
                }

            </div>

        </div>
    )
}

export default Trivia


// import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import play from "../sounds/play.mp3";
// import correct from "../sounds/correct.mp3";
// import wrong from "../sounds/wrong.mp3";

// export default function Trivia({
//   data,
//   questionNumber,
//   setQuestionNumber,
//   setTimeOut,
// }) {
//   const [question, setQuestion] = useState(null);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [className, setClassName] = useState("answer");
//   const [letsPlay] = useSound(play);
//   const [correctAnswer] = useSound(correct);
//   const [wrongAnswer] = useSound(wrong);

//   useEffect(() => {
//     letsPlay();
//   }, [letsPlay]);

//   useEffect(() => {
//     setQuestion(data[questionNumber - 1]);
//   }, [data, questionNumber]);

//   const delay = (duration, callback) => {
//     setTimeout(() => {
//       callback();
//     }, duration);
//   };

//   const handleClick = (a) => {
//     setSelectedAnswer(a);
//     setClassName("answer active");
//     delay(3000, () => {
//       setClassName(a.correct ? "answer correct" : "answer wrong");
//     });
//     // setTimeout(() => {
//     //   setClassName(a.correct ? "answer correct" : "answer wrong");
//     // }, 3000);

//     // setTimeout(() => {
//       delay(5000, () => {
//       if (a.correct) {
//         correctAnswer();
//         delay(1000, () => {
//           setQuestionNumber((prev) => prev + 1);
//           setSelectedAnswer(null);
//         });
//         // setTimeout(() => {
//         //   setQuestionNumber((prev) => prev + 1);
//         //   setSelectedAnswer(null);
//         // }, 1000);
//       } else {
//         wrongAnswer();
//         delay(1000, () => {
//           setTimeOut(true);
//         });
//         // setTimeout(() => {
//         //   setTimeOut(true);
//         // }, 1000);
//       }
//     // }, 5000);
//       })
//   };
//   return (
//     <div className="trivia">
//       <div className="question">{question?.question}</div>
//       <div className="answers">
//         {question?.answers.map((a) => (
//           <div
//             className={selectedAnswer === a ? className : "answer"}
//             onClick={() => !selectedAnswer && handleClick(a)}
//           >
//             {a.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



















