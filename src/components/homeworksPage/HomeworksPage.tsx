import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomeworksPage.module.css'

export default function HomeworksPage() {
  return (
    <div className={styles.homeworksContainer}>
      <h2></h2>
      <div className={styles.gridContainer}>
        
        <Link to='/src/homeworks/homework01'><div>Homework 1</div></Link>
        <Link to='/src/homeworks/homework02'><div>Homework 2</div></Link>
        <Link to='/src/homeworks/homework03'><div>Homework 3</div></Link>
        <Link to='/src/homeworks/homework04'><div>Homework 4</div></Link>
        <Link to='/src/homeworks/homework05'><div>Homework 5</div></Link>
        <Link to='/src/homeworks/homework08'><div>Homework 8</div></Link>
        <Link to='/src/homeworks/homework10'><div>Homework 10</div></Link>
        <Link to='/src/homeworks/homework12'><div>Homework 12</div></Link>
     
      </div>
    </div>
  )
}
