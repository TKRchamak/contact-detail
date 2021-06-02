import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../Redux/Actions/Action';

const Contact = () => {

    const contacts = useSelector((state) => {
        return state.contact.contactList
    })
    const dispatch = useDispatch()

    return (
        <div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <label className="custom-control-label"></label>
                        </th>
                        <th >Name</th>
                        <th >Phone Number</th>
                        <th >Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className="custom-control-label"></label>
                                </td>
                                <td><Avatar className="me-3" name={contact.name} size="45" round={true} /> {contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td className="actions">
                                    <Link to={`/editContact/${contact.id}`}>
                                        <span className="material-icons mr-2">edit</span>
                                    </Link>
                                    <Link onClick={() => dispatch(deleteContact(`${contact.id}`))}>
                                        <span className="material-icons  text-danger" >
                                            remove_circle
                                         </span>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Contact;