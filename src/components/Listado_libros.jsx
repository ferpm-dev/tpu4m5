import React from "react";
import axios from 'axios';

export default function ListadoLibros() {
    const [listado, setListado] = React.useState([]);

React.useEffect(() => {
    async function fetchData() {
        console.log('hola useEffect');
        const respuesta = await axios.get('http://localhost:3000/libro');
        if (respuesta.status===200) {
            console.log('respuesta OK');
            setListado(respuesta)
        }else{
            return console.log('todoMAL');
        }
        console.log('chau useEffect');

    }
        fetchData();

    //  console.log(`la respuesta es: ${respuesta}`);

}, []);




console.log(listado);

    return ( 
        <h3>ListadoLibrosss</h3>

     );
}