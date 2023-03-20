function Pagination({total,postsPerPage,currentPage}){
    const pageNum = Math.ceil(total/postsPerPage);
    const pages = [];
    
  // li 클릭하면 currentPage()을 해당 page값으로 바꿈
    for(let i = 1; i <= pageNum; i++){
      pages.push(i);
    }

  return(
    <ul className="page">
      {
        pages.map(pageNumber => 
        <li 
        key={pageNumber}
        onClick={()=>currentPage(pageNumber)}>
          {pageNumber}
        </li>)
      }
    </ul>
  )
}
export default Pagination;
