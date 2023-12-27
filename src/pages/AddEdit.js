import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import './AddEdit.css'
import { toast } from 'react-toastify';
 import fireDb from '../firebase'
//  import { Toast } from 'react-toastify/dist/components'


const initialState = {
    name: "",
    email: "",
    contact: ""
}


const AddEdit = ()=>{

    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});

    const { name, email, contact } = state;

    const history = useNavigate();

    const {id} = useParams(); 

    useEffect(()=> {
        fireDb.child("contact").on("value",(snapshot) =>{
            if (snapshot.val() !== null){
            setData({...snapshot.val() });
            } else {
                setData({});
            }
        });
        return () => {
            setData({});
        };
    }, [id]);

    useEffect(() =>{
        if(id) {
            setState({...data[id]});

        } else {
            setState({...initialState});
        }
        return()=>{
            setState({...initialState});
        };

    }, [id, data]);

    const handleInputChange = (e) =>{
        const {name, value}=e.target;
        setState({...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact){
            toast.error("please provide value in each input field")
        }else{
            if(!id){

                fireDb.child("contact").push(state, (err) => {
                    if(err) {
                        toast.error(err);
                    } else{
                      toast.success("Contact Added Successfully");  
                    }
                });

            } else {
                fireDb.child(`contact/${id}`).set(state, (err) => {
                    if(err) {
                        toast.error(err);
                    } else{
                      toast.success("Contact Updated Successfully");  
                    }
                });
            }
         
            setTimeout(()=> history("/"), 500)
        }
    };
    return(
    <div style={{marginTop: "100px" }}>
        <form
        style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
        }}
        onSubmit={handleSubmit}
        >

            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' placeholder='Your Name...'
            value={name || ""} onChange={handleInputChange}>

            </input>

            <label htmlFor='email'>email</label>
            <input type='email' id='email' name='email' placeholder='Your email...'
            value={email || ""} onChange={handleInputChange}>

            </input>

            <label htmlFor='contact'>Contact</label>
            <input type='number' id='contact' name='contact' placeholder='Your contact No. ...'
            value={contact || ""} onChange={handleInputChange}>

            </input>

            <input type='submit' value={id ? "Update": "Save"}></input>

        </form>
        
    </div>
    );
}
export default AddEdit