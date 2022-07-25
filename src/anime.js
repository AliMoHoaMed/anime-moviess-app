import React from 'react'

const Anime = () => {
    const anime =
    [
    {
        id:1,
        title:'Death note ' ,
        describtion: 'a horror anime with great story  '  ,
    image:'death.jpg'
    },
    {
        id:2,
        title:'Demon slayer' ,
        describtion: 'a Great story of a brother and sister who fight demons'  ,
    image:'demon.jpg'
    },
    {
        id:3,
        title:'Attack on titan ' ,
        describtion: 'A great bloody story with many plot twists  '  ,
    image:'attakc.jpg'
    },
    {
        id:4,
        title:'Tokyo Ghoul ' ,
        describtion: 'one of the best anime in the history  '  ,
    image:'tokyo.jpg'
    
    },
    {
        id:5,
        title:'SPY x Family ' ,
        describtion: 'a spy married to a killer with a doughter can read mind mmmm '  ,
    image:'spy.jpg'
    
    }
    ,
    {
        id:6,
        title:'Your Name ' ,
        describtion: 'Anime movie '  ,
    image:'name.jpg'
    
    }
    ,
    {
        id:7,
        title:'House moving castle ' ,
        describtion: ' a nime movie with great story    '  ,
    image:'castle.jpg'
    
    }
    ,
    {
        id:8,
        title:'Hunter X Hunter ' ,
        describtion: 'one of the best ratted animes   '  ,
    image:'xhunter.jpg'
    
    }
    ];
    
    
      return (
    
    <div className='anime'>
        <div className='c'><a className='fade-in-text'> Animes   </a> </div>
    
    
    
    
        <div className='ggrid-container '>
    {anime.map(({id,title,describtion,image})=>(
    <div  key={id} className=' '>
    <div  class="flip-card">
      <div class="flip-card-inner"> 
     <div className='flip-card-front'><img src={image} width="300" height="400" /> </div>
     <div className='flip-card-back'><h1>{title} </h1>   <a>{describtion}</a></div>
       
      
      </div>
          </div></div>
    
    ))}
    
    
    
        </div>
      </div>
  )
}

export default Anime