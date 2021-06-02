
export const addContact = (payload) => {
    return{
        type: "add_To_Contact",
        payload
    }
}

export const editContact = (payload) => {
    return{
        type: "edit_Contact",
        payload
    }
}

export const updateContact = (payload) => {
    return{
        type: "update_Contact",
        payload
    }
}

export const deleteContact = (payload) => {
    return{
        type: "delete_Contact",
        payload
    }
}