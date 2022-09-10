// import { useReducer } from "react";

// const TutorialComponent = () => {

//     const reducer = (state, action) => {
//         switch (action.type){
//             case "increment":
//                     return {count: state.count + 1,
//                         showText: state.showText}
//             case "toggleShowText":
//                 return {
//                     count: state.count,
//                     showText: !state.showText
//                 }
//             default :
//             return state
//         }
//     }
//     const [state, dispatch] = useReducer(
//         reducer , {
//             count: 0
//         }
//     )
//     return ( 
//         <div className="container p-5">
//             <h1>Hooks Explained</h1>
//             <h3>{state.count}</h3>
//             <h3>{state.showText}</h3>
//             <button className="btn btn-primary" onClick={()=>{
//                 dispatch({type: 'increment'});
//                 dispatch({type:"toggleShowText"})
//             }}>Click Me</button>
//         </div>
//      );
// }

// export default TutorialComponent;

import Button from "react-bootstrap/Button";
import { useRef, useState, useReducer } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";

const TutorialComponent = () => {

    //redux
    // const dispatch = useDispatch
    // const counter = useSelector(
    //     (state) => state.counter
    // )
    // const age = useSelector(
    //     (state) => state.age
    // )
    // const increment = () => {}
    // const decrement = () => {}

    //end redux

    console.log(Date.now)
    const initialState = [
        { id: Date.now(), name: "Ujiro", email: "ujiroeruteya@outlook.com"},
        { id: Date.now() + 1, name: "David", email: "dav@outlook.com"}
    ];
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    const addContact = (e) => {
        e.preventDefault();
        const contact = {
         id: Date.now(),
         name,
         email
        }

        setName('');
        setEmail('');
        dispatch({type: "add", body: contact})
    }
    function reducer(state, action) {
        switch (action.type) {
            case "add":
             return [...state, action.body]    
            //return state + 1;
            case "delete":
            //return state - 1;   
             return state.filter(
                contact => {
                    return contact.id !== action.body.id
                }
             )

            default:
                throw new Error();
        }
    }
    
    //const something = document.getElementById('something')

    // const inputRef = useRef(null)
    // const AutoFocus = () => {
    //     console.log(inputRef.current.value);
    // }

    return (
        <div className="container p-5">
            {/* <input type="text" className="form-control" id="something" ref={inputRef} />
                <Button onClick={AutoFocus}> Click Me To Fill this</Button> */}
            {/* <h2>{state}</h2>
            <button onClick={
                () => dispatch(
                    {
                        name: "increment"
                    }
                )
            }>Increase</button>
            <button onClick={
                () => dispatch(
                    {
                        name: "decrement"
                    }
                )
            }>Decrease</button> */}
            <Row>
                {/* <h2>{counter} people are {age}years old</h2>
                <button className="btn btn-success m-5" onClick={increment}> Increase</button>
                <button className="btn btn-danger m-5" onClick={decrement}> Decrease</button> */}
                <Col md={{span: 6, offset: 3}}>
                    <form onSubmit={addContact}>
                        <input type="text" value={name} onChange={
                            (e) => setName(e.target.value)
                        } className="form-control m-3" placeholder="Enter Your Name" />
                        <input type="email" value={email} onChange={
                            (e) => setEmail(e.target.value)
                        } className="form-control m-3" placeholder="Enter Your Email" />
                        <button className="btn btn-success m-3"> Add New Contact</button>
                    </form>

                    <div>
                        <ul>
                            {state.map(
                                contact => {
                                    return (
                                        <li key={contact.id}>
                                            <p>{contact.name}</p>
                                            <small>{contact.email}</small>
                                            <br/>
                                            <button className="btn btn-danger" onClick ={
                                                () => dispatch(
                                                    {type: 'delete',
                                                body: {id: contact.id}}
                                                )
                                            }>
                                                Delete Contact

                                            </button>
                                        </li>
                                    )
                                }
                            )}
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>

    );
}

export default TutorialComponent;