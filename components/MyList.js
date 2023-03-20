import Link from "next/link";
import { useState } from "react";
import Pagination from "./Pagination";


function MyList({blog}){

  const [toggle,setToggle] = useState(false);
  const [sortBy,setSortBy] = useState('id');


  const listBySort = blog.sort(function(a,b){
    if(sortBy === 'date'){
      return b[sortBy] - a[sortBy];      
    }else if(sortBy === 'name'){
      return a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0;
    }else{
     return a[sortBy] - b[sortBy]
    }
  });

  const [currentPage,setCurrentPage] = useState(1);

  const postsPerPage = 8;
  const indexOfLast = currentPage * 8;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPost = listBySort.slice(indexOfFirst,indexOfLast);
 
  function changeDate(date){
    const day = new Date(Number(date));
    return `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`  
    }


  return(
    <div className="list">
      <div>
        <p>총 {currentPost.length}개</p>
        <ul onClick={()=>setToggle(!toggle)}>
          <li>정렬
            <ul>
            {
              toggle !== false ?
              <>
              <li onClick={()=>setSortBy('id')}>번호순</li>
              <li onClick={()=>setSortBy('name')}>품종순</li>
              <li onClick={()=>setSortBy('date')}>등록일순</li>
              </>
              : null
            }
            </ul>
          </li>
        </ul>
      </div> 
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <td>품종</td>
            <td>작성일</td>
          </tr>
        </thead>
        <tbody>
          {currentPost.map(dog => {return(
            <tr key={dog.id}>
              <td>{dog.id}</td>
              <td>
                <Link href="/member/[id]" as={`/member/${dog.id}`}>{dog.name}
                </Link>
              </td>
              <td>{changeDate(dog.date)}</td>
            </tr>
          )})}
        </tbody>
      </table>
      <Pagination 
      currentPage = {setCurrentPage}
      postsPerPage = {postsPerPage}
      total = {blog.length}
      />
    </div>
  )
}

export default MyList;