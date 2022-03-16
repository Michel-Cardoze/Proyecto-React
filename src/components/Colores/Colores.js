import data from '../../colores.json'
import React from 'react';
import { ColoresItem} from '../ColoresItem/ColoresItem';


export const Colores = () => {
    return (
      <ul>
          { data.map(
            
              (favorito) => <ColoresItem key={favorito.id}color={favorito.color}/>
          )}
      </ul>
    )
};

