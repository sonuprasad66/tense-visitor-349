import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";




const firebaseConfig={
    apiKey: "AIzaSyBIzCZUgtofQ_PupwSaS4XBJTXUMtO2Cak",
  authDomain: "fir-urban-company.firebaseapp.com",
  projectId: "fir-urban-company",
  storageBucket: "fir-urban-company.appspot.com",
  messagingSenderId: "538418223786",
  appId: "1:538418223786:web:a30994f6e534e147410ed3"
}

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);