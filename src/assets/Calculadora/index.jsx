import { useState } from "react";
import styles from "./Global.module.css";

function Calculadora() {

  const [altura, setAltura] = useState(1);
  const [peso, setPeso] =  useState (0);

  const calcularImc = () =>{
    const calcImc =  peso / (altura * altura);
    return calcImc.toFixed(2);
  }

  const classificarImc = () =>{
    const  resultado = calcularImc()
    
   if(resultado <= 18.5){
    return "Você está abaixo do peso"
   }
   else if(resultado > 18.5 && resultado <= 24.99){
    return "Você está com peso ideal"
   }
   else if(resultado > 24.99 && resultado <= 29.99){
    return "Você está sobre peso"
   }
   else{
    return "Você esta obeso"
   }
      
  }
  
    return(
      <div className={styles.container}>
     
      <div className={styles.pai}>
      <h1 className={styles.title}>Calcule seu IMC</h1>
      <input type="number" placeholder='Insira seu peso' required  className={styles.in} onChange={({target}) => setPeso(Number(target.value))}/>

      <input type="number" placeholder='Insira sua altura' required  className={styles.in} onChange={({target}) => setAltura(Number(target.value))} />

      <p className={styles.text}>Seu peso é: <b>{calcularImc()}</b></p>
      <p className={styles.text}>{classificarImc()}</p>
      </div>
      
      </div>
  
  
    )
  }

  export default Calculadora