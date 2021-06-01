import React from 'react';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';

const Contact = () => {

    const contacts = useSelector((state) => {
        return state.contactList
    })

    return (
        <div>
            <table class="table table-dark table-striped">
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
                            <tr>
                                <td className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" />
                                    <label className="custom-control-label"></label>
                                </td>
                                <td><Avatar className="me-3" name={contact.name} size="45" round={true} /> {contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td className="actions">
                                    {/* <Link to={`/contacts/edit/${id}`}>
                                        <span className="material-icons mr-2">edit</span>
                                    </Link> */}
                                    <a>
                                        <span className="material-icons mr-2">edit</span>
                                    </a>
                                    {/* <span className="material-icons  text-danger" onClick={() => dispatch(deleteContact(id))}>
                                        remove_circle
                                    </span> */}
                                    <span className="material-icons  text-danger">
                                        remove_circle
                                    </span>
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