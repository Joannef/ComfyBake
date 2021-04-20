import React, {useState, useEffect} from "react";
import database from '../firebase';
import firebase from '../firebase';
import './Cart.css';
import { addToCart } from './Cart'
import {account} from './Login'

const db = database.firestore();
const storage = database.storage();
const user = "user1";
const realtimeDB = firebase.database();


class Display extends React.Component{
    //state array
    state = {
        arr: null,
    }

    //---------------- this function brings all the data from firestore -------------------//
    componentDidMount(){
        db.collectionGroup('food')
            .get()
            .then( snapShot => {
                //array to store single item
                const arr = []
                //takes a data and pushes it into the array
                snapShot.forEach( doc => {
                    const data = doc.data()
                    arr.push(data)
                })
                //makes an array of all the item and saves it in the state, null array above
                this.setState({arr: arr})
                
            })
            .catch(error => console.log(error))
    }
    //-------------------------collecting data from firestore ----------------------------//
    

    handleClick =(arr) =>{
        
        const total = 999;
        this.props.addToCart(arr);
        const cartRef = realtimeDB.ref('user').child(user).child( 'Product' + arr.Foodname );
        //const CART = arr.Foodname
        cartRef.push([arr.Foodname]);
        
        const newRef =realtimeDB.ref('user/' + user + '/Total');

        const newPostRef = cartRef.push();

        // cartRef.transaction((current) => {
        //     return (current || 0) + 1;
        // });
        
        
        //referance for cart
        newPostRef.set({
            name: arr.Foodname,
            price: arr.Price,
            qty: arr.Quantity = 10,
            url: arr.ImageUrl,
            
        });
        // console.log(cartRef.transaction.length)
        //reference of total
        newRef.set({
            Total: total,
        })
        
    }
 

    render(){
    
        return(
            <div className='item'>
                {
                    //it data exists then print each data from the array
                    this.state.arr &&
                    this.state.arr.map( arr => {
                        return(
                            <div className="img-wrap">
                                <img src={arr.ImageUrl } alt={arr.Foodname}/>
                                <p>{arr.Foodname}</p>
                                
                                <p>${arr.Price}</p>
                                <button onClick={()=>{ this.handleClick(arr)} }>Add to cart</button>
                            </div>
                        )
                    })
                }
                <br/><br/> 
            </div>
        )
    }
}
export default Display;








// const Display = (props) => {
//     const [name, setName] = useState("");
//     const [url, setUrl] = useState("");
//     const [price, setPrice] = useState("");
//     const [test, setTest] = useState([]);
//     const [size, setSize] = useState();


//     const {ID} = props
//     const id = "user2@gmail.com";
    
   
    

//     db.collectionGroup("food").get().then(querySnapshot => {
//         const data = querySnapshot.docs.map(doc=>doc.data())
//         setHelper(data[4])
//         setSize(data.length);
        
        
        
//     })
//     function setHelper(data_){
//         setName(data_.Foodname);
//         setPrice(data_.Price);
//         setUrl(data_.ImageUrl)
//     }

//     return( 
//         <div>
//             <br/>
//             <h1>Testing here</h1>
//             <p>{test}</p>
//             <p> {size}</p>
//             <p>Name: {name}</p>
//             <p>Price: {price} </p>
//             <img src={url}/>
//             <br/> <br/>
//             <p>-------------------------------------------------------------------------</p>
//         </div>
//     )
    
// }

// export default Display;