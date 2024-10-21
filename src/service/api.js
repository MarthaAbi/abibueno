import axios from 'axios';
const url = 'https://abi-2.onrender.com/' 
// const url ='http://localhost:8080/people' 
const instance = axios.create({ baseURL: url});


export const savePersonName = async (obj) => await instance.post('/', obj)

export const getPersons = async () => await instance.get();

export const deletePerson = async (id) => await instance.delete('/' + id);

export const updatePerson = async (id, name) => await instance.put('/'+id, { nombre: name });

