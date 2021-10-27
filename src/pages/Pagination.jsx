import React from 'react';
const Pagination =(props)=>{
    const totalpost =props.posts.length,
     PostsPerPage=props.PostsPerPage,
     PageNumbers=[]
    for (let i = 0; i < Math.ceil(totalpost/PostsPerPage); i++) {
        PageNumbers.push(i)
    }
return(
    <ul className="flex flex-row ml-56 space-x-4 mt-2 ">
        {
            
            PageNumbers.map(number=>{
                return <a href="#!" key={number} onClick={()=>props.paginate(number+1)} className="text-blue-400">{number+1}</a>
            })
        }
    </ul>
);
}
export default Pagination;