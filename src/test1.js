import React, { useState } from 'react'
import games from './data';
import { useEffect } from 'react';
import axios from 'axios';


const Test1 = () => {
const [gameee,setgame] = useState();

const games =
[
{
    id:1,
    title:'Thor 4 ' ,
    describtion: 'a pride movie '  ,
image:'0044.jpg'
},
{
    id:2,
    title:'Avatar 2' ,
    describtion: 'waiting to see'  ,
image:'0033.jpg'
},
{
    id:3,
    title:'the god father 2' ,
    describtion: '5osh etfrg'  ,
image:'0022.jpg'
},
{
    id:4,
    title:'the scent of women' ,
    describtion: 'a blind man who is ready to see things fear from '  ,
image:'0011.jpg'

},
{
    id:5,
    title:'the god father' ,
    describtion: 'mafia movie  '  ,
image:'0055.jpg'

}
,
{
    id:6,
    title:'the batman ' ,
    describtion: 'DC movie  '  ,
image:'0066.jpg'

}
,
{
    id:7,
    title:'Doctor Srrange ' ,
    describtion: 'marvel movie   '  ,
image:'0077.jpg'

}
,
{
    id:8,
    title:'assassins creed ' ,
    describtion: 'game movie   '  ,
image:'2.jpg'

}
];


  return (

<div className='m'>
    <div className='c'><a className='fade-in-text'> Movies   </a> </div>




    <div className='grid-container '>
{games.map(({id,title,describtion,image})=>(
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

export default Test1