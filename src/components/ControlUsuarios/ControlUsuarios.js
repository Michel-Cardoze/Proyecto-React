import React, { useEffect } from 'react';
import { ControlUsuariosItem } from '../ControlUsuariosItem/ControlUsuariosItem';
import styles from './ControlUsuarios.module.css'


export const ControlUsuarios = ({data, setData}) => {


    useEffect(() => {
        const fetchData = async () => {
                let response = await fetch("http://localhost:3002/");
                let usuarios = await response.json();
                setData(usuarios);
            }

            fetchData();
        }, [])

    useEffect(() => {
        const addUsuario = async (usuario) => {
            let request = await fetch("http://localhost:3002/", {
                method: "POST",
                body: JSON.stringify(usuario),
                headers: {
                    "Content-Type" : "application/json"
                }
            })

            let response = await request.json();
            usuario.id = response.id;

            setData(function(data){ return [...data, usuario]})
        }

        addUsuario({id : 0, name: "Ethan", last_name: "Madison", state : true});
    }, [])

    return (
        <ul  className={styles.usuarios}>
            {data.map(
               
                (usuario) => typeof usuario.id != "undefined" && <ControlUsuariosItem key={usuario.id} id={usuario.id}
                 name={usuario.first_name}  last_name={usuario.last_name} job={usuario.job}  /> 
            )}
        </ul>
    )
};
