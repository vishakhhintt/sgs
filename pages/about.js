import React, { useState, useEffect } from "react";
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Link from 'next/link';
import axios from "axios";
import Image from 'next/image'
function About(slData) {
  const [sl, setAllValues] = useState(slData.slData);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        About <a>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
        <Link href="/"><a  className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </Link>
        {
                  sl.status ? 
                  sl.slData.map(function(x, index) {
                    return (
                      <div key={`div${index}`}className="col-6 d-flex align-items-end justify-content-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="1300">
                                         <h2>{x.hs_title}
                                            </h2>
                                            <p className="mt-3">{x.hs_subtitle}</p>
                                        
                                            <figure className="position-relative">                           
                                                <Image src={`https://sgs.hintt.com/assets/front/img/slider/${x.hs_pimg}`} className="img-fluid" alt="" width={`100%`} height={`100%`}/>
                                                {x.hs_offer ?<span className="badge bg-danger badge-dot">${x.hs_offer}% <br/>Off</span>:null }
                                            </figure>
                                        
                                            </div>
                                        
                    )
                   
                    
                  
                 })
                 :null
              }
               
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

async function  getHomeSlider() 
  {

   var qs = require('querystring');
   const url = `https://sgsdemo.hintt.com/home/slider`;
   const requestBody = { 'userId': null};
   const config = {
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       }
     }
     
     const slData = await axios.post(url, qs.stringify(requestBody), config)
       .then((result) => {
         console.log(result.data);
         return result.data;
       })
       .catch((err) => {
           console.log(err.response);
       })
       return slData;
 }
 About.getInitialProps = async (context) => 
{
    const slData  = await getHomeSlider();
  
    return { slData} ;
}
 export default  About;