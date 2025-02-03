import ProfileCard from "../../components/profileCard/ProfileCard";

import style from '../../components/profileCard/ProfileCard.module.css'

function Homework02 () {
    // Данные для пользователей
    const rash = 
      {
        
        avatar :'https://sun9-38.userapi.com/impg/TCOCth0Xf6KmvWJIZMTrV_CjWSheAZp0W1ydHg/wpgDa-o7gH0.jpg?size=604x604&quality=95&sign=84dd619494f2273b8185ef3af3a3390f&c_uniq_tag=aNjVWVlsINJ5mtkJmwvinJhH8hng-lKwpo-yJGdQjbU&type=album' ,
        name: "Rash🐸",
        occupation: "Protagonist of Battletoads.",
        hobby: "karate"
      };
      const  pimple  =
       {
      
        
        avatar:'https://sun9-55.userapi.com/impg/I9aSum4rYEqVqDzxNxz8PhTzPKuqtFNuIW0Hww/XKKnVrrvSLQ.jpg?size=1280x1279&quality=95&sign=36699ed905faf9915a9a9261acfad766&c_uniq_tag=wEqGxKsdLqeJywTDObp0oSh3eRognXTi_voAZ2lgZeI&type=album' ,
        name: "Pimple🐸",
        occupation: "Protagonist of Battletoads.",
        hobby: "fight"
      };
      const zitz =
      {
        avatar:'https://sun9-42.userapi.com/impg/n5cMw8aEItckTu6LqQPoi7EevtQ7hpQ1XSWLpA/fGoiqonwq9A.jpg?size=604x604&quality=96&sign=6e2eca998eb55bd860514c0045b3e870&c_uniq_tag=s9WMZ2Pfmur3MMGQD9oPvuS4PFLba8jQNmfXMJ_KHRo&type=album' ,
        name: "Zitz🐸",
        occupation: "Protagonist of Battletoads.",
        hobby: "game tester"
      }
      

      
     

      return (
        <div className= {style.container}>
           
                <ProfileCard {  ... rash} />
                <ProfileCard {  ... pimple} />
                <ProfileCard {  ... zitz} />
            
          
          </div>
  
  );
}

    
     
  export default Homework02;