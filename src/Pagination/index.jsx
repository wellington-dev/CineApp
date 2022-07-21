import React, {useState} from 'react'
import {PageContainer, PaginationItem} from './styles'

function Pagination({pages, items, current}) {
  
    const [maxPageNumberLimit,setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit,setMinPageNumberLimit] = useState(0);

    const itemsPages = 20;

    const numberPages = Math.ceil(items.total_results / itemsPages);

    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };

    const handleClick = (item)=>{
      pages(item) 
      scrollToTop()
    }

  return (
    <PageContainer>
    
        {Array.from({length: numberPages}, (_, index)=>{
             if(index < maxPageNumberLimit + 1  && index > minPageNumberLimit){
                return(
                
                   <PaginationItem isSelect={index === current}
                    key={index} onClick={()=>handleClick(index)}>
                     {index}
                    </PaginationItem>
                
                   )
              }else{
                return null;
              }
          
        })}

    </PageContainer>
  )
}

export default Pagination