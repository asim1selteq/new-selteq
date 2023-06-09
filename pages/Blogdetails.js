import React from 'react'
import Newheader from '@/Components/Newheader/Newheader'
import Head from 'next/head'
import styles from "../styles/index.module.css";
import Newfooter from '@/Components/Newfooter/Newfooter'
import Blogdetaill from '@/Components/Blogdetails/Blogdetaill'
import { useRouter } from 'next/router'

const Blog = () => {
  const router = useRouter();
  const data = (router.query === null) ?  0 : router.query.data;
  return (
    <>
      {/* <Header/> */}
      <Head>
        <title>SELTEQ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon icon  */}
        <link rel="icon" href="/favicon.ico" />
        {/* bootstrap v4.0.0 cdn  */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        {/* fontasome V5 cdn  */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Head>
      <main className={styles.main_height}>
      <Newheader />
      <Blogdetaill data={data}  />
      <Newfooter/>
      </main>
    </>
  )
}

export default Blog
