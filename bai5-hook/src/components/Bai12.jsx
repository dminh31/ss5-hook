import React, {useState, useEffect} from 'react'

 function Bai12() {

     const [seconds, setSeconds] = useState(0);
     const [minutes, setMinutes] = useState(0);
     const [hours, setHours] = useState(0);

     useEffect(() => {
         const timer = setInterval(() => {
             setSeconds((prevSeconds) => prevSeconds + 1);
         }, 1000);

         return () => {
             clearInterval(timer);
         };
     }, []);

     useEffect(() => {
         if (seconds === 60) {
             setSeconds(0);
             setMinutes((prevMinutes) => prevMinutes + 1);
         }
     }, [seconds]);

     useEffect(() => {
         if (minutes === 60) {
             setMinutes(0);
             setHours((prevHours) => prevHours + 1);
         }
     }, [minutes]);

     return (
         <div>
             <h1>Timer</h1>
             <div>
                 <span>{hours < 10 ? `0${hours}` : hours}</span>:
                 <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
                 <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
             </div>
         </div>
     );
}
export default Bai12