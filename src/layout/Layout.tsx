import React from "react";
import styles from "./layout.module.css";
import { NavLink, Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      
      <header className={styles.header}>
       
        <NavLink className={({isActive}) =>(isActive ? styles.linkActive : '')}  to={"/"}>◽ lessons ◽</NavLink>
        <NavLink className={({isActive}) =>(isActive ? styles.linkActive : '')}  to={"/homeworks"}>◽ homeworks ◽</NavLink>
       
        
       
       
      </header>
      <main className={styles.main}>
        
        <Outlet />
      </main>
      <footer className={styles.footer}> footer </footer>
    </>
  );
}
