// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


  
  const SELECT_KEY = 'select';

  const selectedList = JSON.parse(sessionStorage.getItem(SELECT_KEY) || '{}');

  export function addedToList(id){
    SELECT_KEY[id] = true;
    JSON.stringify(sessionStorage.setItem(SELECT_KEY,selectedList))
  }