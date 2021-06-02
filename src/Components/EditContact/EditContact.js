import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { editContact, updateContact } from '../../Redux/Actions/Action';

const EditContact = () => {

    let { id } = useParams();
    // const shortid = require('shortid');

    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // const creteContact = (e) => {
    //     e.preventDefault();
    //     const new_contact = {
    //         id: shortid.generate(),
    //         name: name,
    //         phone: phone,
    //         email: email,
    //     };
    //     dispatch(addContact(new_contact));
    //     history.push("/");
    // };
    const contacts = useSelector((state) =>state.contact.editContact)
    console.log(contacts);

    useEffect(()=>{
        if(contacts != null){
            setName(contacts.name)
            setEmail(contacts.email)
            setPhone(contacts.phone)
        }
        dispatch(editContact(id))
    }, [contacts]);

    const onUpdateContact = (e) => {
        e.preventDefault();
    
        const update_contact = Object.assign(contacts, {
          name: name,
          phone: phone,
          email: email,
        });
        console.log(update_contact)
    
        dispatch(updateContact(update_contact));
        history.push("/")
      };



    return (
        <div className="card border-0 shadow">
            <div className="card-header">Edit Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Update Contact
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditContact;