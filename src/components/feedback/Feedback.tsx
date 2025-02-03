import { useState } from "react";
import MyButton from "../myButton/MyButton";
import styles from "./Feedback.module.css"


const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Функция для увеличения количества лайков
  const handleLike = () => {
    setLikes(likes + 1);
  };
  // Функция для увеличения количества дизлайков
  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  // Функция для сброса лайков и дизлайков
  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    
 <div>  
    <img src={"https://www.twice.com/wp-content/uploads/2019/11/thumbs-up.png "}alt="" className={styles.feedbackImage} />
    <div className={styles.feedbackContainer}>
    
      <span className="count">{likes}</span>

      <MyButton type="button" text="👍Like" func={handleLike} />
      <MyButton type="button" text="Dislike👎" func={handleDislike} />
      <span className="count">{dislikes}</span>
      <div>
      <MyButton type="button" text="Reset 👌 Results" func={handleReset} />
    </div> </div>
    </div>
  );
};
export default Feedback;
