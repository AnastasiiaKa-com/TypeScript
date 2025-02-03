import reactImg from '../../assets/3d-rendering-cute-cartoon-girl-blue-dress-street_1142-43545.avif'
import style from './Homework01.module.css'

function Homework01() {
  return (
    <div>
    <div className={style.card}>
        <img src={reactImg}  alt="react- img" />
        </div>
       <div className='text-container'>

      <h2>Name : Anastasiia Karpenko🦊</h2>
      
      <h4>Hobbies and interests : Reading, drawing, singing, cooking</h4>
      </div>
    </div>
  );
}
export default Homework01;
