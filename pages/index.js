import Layout from "@/components/Layout"
import MyList from "@/components/MyList"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
// import styles from "@/styles/index.modules.css";
export default function Home({blog}) {

  return (
    <>
    <Layout>
    <Head>
      <title>About Dog</title>
    </Head>
    <main>
      <h1>All About Dog</h1>
      <Link href="/favorite"><p>즐겨찾기</p></Link>
      <MyList 
      blog={blog}
      />
    </main>
    </Layout>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://lee-react-sample.s3.ap-northeast-2.amazonaws.com/data.json');
  const data = await res.json();
  return{
    props:{
      blog : data
    }
  }
}