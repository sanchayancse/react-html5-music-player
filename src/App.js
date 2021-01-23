import logo from "./logo.svg";
import React, { useState, useRef ,useEffect } from "react";
import mymusic from './audio/Genda-Phool_(webmusic.in).mp3'
import mymusic2 from './audio/Woh-Mere-Bin_(webmusic.in).mp3'
import mymusic3 from './audio/Muqabla_(webmusic.in).mp3'
import $ from 'jquery'; 

import "./App.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import BootstrapTable from "react-bootstrap-table-next";

function App() {
  const [getId, setId] = useState();

  function imageFormatter(cell, row) {
    return <img style={{ width: 100 }} src={cell} />;
  }
  const columns = [
    {
      dataField: "img",
      text: "Image",
      formatter: imageFormatter,
    },
    {
      dataField: "name",
      text: "Product Name",
      sort: true,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
    },
  ];

  let products = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      price: 10,
      body:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
    },
    {
      postId: 1,
      id: 2,

      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      price: 30,
      body:
        "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et",
    },
    {
      postId: 1,
      id: 3,
      name: "odio adipisci rerum aut animi",
      email: "Nikita@garfield.biz",
      price: 20,
      img:
        "https://www.hdnicewallpapers.com/Walls/Normal/Cat/Beautiful_Cat_Imge_Download.jpg",
      body:
        "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione",
    },
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
     
    },
  };
  console.log(getId);

  const audioRef = useRef()
const my = []

my.push(mymusic,mymusic2,mymusic3)
 
console.log(my);
var m  = []



  return (
    <>
    
    <div className="App">
      <h1>hello</h1>
      {my.map((mx,i)=>{
        console.log(i);
        function pauseOthers(ele) {
          $("audio").not(ele).each(function (index, audio) {
            console.log(i);
            if(index != i)
              audio.pause();
          });
        }
        

        return(
          <audio key={i} class="audio" controls ref={audioRef} onPlay={()=>pauseOthers(this)} >
          <source src={mx}  type='audio/mpeg' ></source>
        </audio>
        )


      })}
        
           
    
        

      

    </div>
    </>
  );
}

export default App;
