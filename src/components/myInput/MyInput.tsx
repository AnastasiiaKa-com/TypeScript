import styles from './MyInput.module.css'

interface IMyInputProps {
  name: string
  placeholder: string
  label: string
  type: 'password' | 'email' | 'text' | 'number'
}

export default function MyInput({name, type, placeholder, label}:IMyInputProps):JSX.Element {
  return (
    <>
      <label>{label}</label>
      <input className={styles.myInput} placeholder={placeholder} name={name} type={type} />
    </>
  );
}
