import Favorite from "@/components/Favorite"
import Layout from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
//const~ 말고 import해야 하는 점 유의하기!
const Content = ({blogContent}) => {

  const [select,setSelect] = useState('');
  // useEffect(()=>{
  //   const SELECT_KEY = 'select';
  //   const selectedList = JSON.parse(LocalStorage.getItem(SELECT_KEY) || '{}');
    
  //   function addedToList(id){
  //     SELECT_KEY[id] = true;
  //     JSON.stringify(LocalStorage.setItem(SELECT_KEY,selectedList))
  //   }
  // },[])

  // console.log(select) 
  // home으로 돌아가면 리셋됨..
    
    return(
    <Layout>
      <main className="contentMain">
        <h1>{blogContent.name}</h1>
        <figure>
          <Image 
          src={`/images/${blogContent.img}`} 
          alt={blogContent.name} 
          width = {500}
          height = {300}
          />
          <figcaption>
            <dl>
              <dt>설명</dt>
              <dd>{blogContent.text}</dd>
              <dt>성격</dt>
              <dd>{blogContent.character}</dd>
            </dl>
          </figcaption>
        </figure>
        <p><Link href="/">Home으로 돌아가기</Link></p>
        <p onClick={()=>setSelect(blogContent.id)}>좋아요</p>
        <Favorite select={select}/> 

        {/* home으로 돌아가면 reset이 되길래 favorite에서 배열 형식으로 받으려고 했는데 그것도 오류..*/}
      </main>
    </Layout>
  )
}

// serversideprops는 서버에 뭔가 요청해서 그걸 받아 -> context(매게변수)
// 그리고 받아서 받은 애의 id값이랑 내가 원래 갖고있던 id값이랑 비교해서 랜더링한거지,,


export const getServerSideProps = async(context) => {
  const res = await fetch('https://lee-react-sample.s3.ap-northeast-2.amazonaws.com/data.json');
  const data = await res.json();

  const blogContent = data.filter(item => item.id == context.params.id);


  return{
    props:{
      blogContent:blogContent[0]
    }
  }
}

export default Content;