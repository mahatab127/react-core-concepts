import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak','Jasim','Alomgir','Salman','Bappi','Shuvo']
  const products=[
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF Reader',price:'$6.99'},
    {name:'Premiere EI',price:'$246.99'}
  ]
  // const productnames = product.map(product => product.name)
  // const nayokNames = nayoks.map(nayok => nayok);

    return (
    <div className="App">
      <header className="App-header">
        <p>I am react Person</p>
        <Conunter></Conunter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
          {
            products.map(product=><Product product={product}></Product>)
          }
        </ul>
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
      </header>
    </div>
  );
}
function Users(){
  const[users,setUser]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>setUser(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>{

        users.map(user => <li>{user.name}</li>)
          }
        </ul>
    </div>
  )

}
function Conunter(){
  const[count,setCount] = useState(0);
  const handleIncrease=() => {
    const newCount = count+1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width:'200px',
    float:'left'

  }
  const {name, price}=props.product;
  return(
    <div style={productStyle}>
      <h2>{name} </h2>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return(
    <div style={{border:'2px solid gold',width:'400px', margin:'15px'}}>
      <h3>My Name:{props.name} </h3>
      <p>My Profession:{props.job} </p>
    </div>
  )
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={style}>My Heading: {person.name + " " + person.job} </h1>
        <h3 style={{backgroundColor:'cyan',color:'red'}}>Singer: {person2.name + " " + person2.job}</h3>
        <p>My first React Paragraph</p>
      
       // var person={
  //   name: "Dr. Mahfuz",
  //   job:"Singer"
  // }
  // var person2={
  //   name: "Eva Rahman",
  //   job:"Kokil Kondi"
  // }
  // var style={
  //   color:'red',
  //   backgroundColor:'yellow'
  // }*/}


  // const nayoks = ['Anwar','Jafor','Alomgir','Salman']
  // <Person name={nayoks} nayika="Moushumi"></Person>
  //       <Person name="Jasim" nayika="Shabana"></Person>
  //       <Person name="Bapparaz" nayika="Cheka"></Person>
  //       <Person name="Elias Kabir" nayika="Bobita"></Person>
  // function Person(props){
  //   const personStyle={
  //     border:'2px solid red',
  //     margin:'10px'
  //   }
  //   return (
  //   <div style={personStyle}>
  //    <h1>Nayok: {props.name}</h1>
  //    <h3>Hero of {props.nayika}</h3>
  //    </div>
  //   )
  // }