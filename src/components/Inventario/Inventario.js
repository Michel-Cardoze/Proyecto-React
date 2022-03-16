import data from '../../data.json'
import React from 'react';
import { InventarioItem} from '../InventarioItem/InventarioItem';


export const Inventario = () => {
    return (
      <ul>
          { data.map(
            
              (client) => <InventarioItem key={client.id} id={client.id}  name={client.first_name} last={client.last_name} email={client.email} job={client.job} />
          )}
      </ul>
      )
  };