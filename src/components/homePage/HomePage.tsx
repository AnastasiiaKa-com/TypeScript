import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.lessonContainer}>
      <h2></h2>
      <div className={styles.gridContainer}>
        
        <Link to='lesson-1'><div>Lesson 1</div></Link>
        <Link to='lesson-2'><div>Lesson 2: React JSX components </div></Link>
        <Link to='lesson-3'><div>Lesson 3: React Props</div></Link>
        <Link to='lesson-4'><div>Lesson 4: React UseState hook </div></Link>
        <Link to='lesson-5'><div>Lesson 5: React Map components</div></Link>
        <Link to='lesson-6'><div>Lesson 6: TS</div></Link>
        <Link to='lesson-7'><div>Lesson 7: TS_useEffect</div></Link>
        <Link to='lesson-8'><div>Lesson 8: UseEffect_hook</div></Link>
        <Link to='lesson-9'><div>Lesson 9: UseEffect_practice</div></Link>
        <Link to='lesson-10'><div>Lesson 10: UseEffect_practice </div></Link>
        <Link to='lesson-11'><div>Lesson 11: React_Router_Dom</div></Link>
      </div>
    </div>
  )
}
