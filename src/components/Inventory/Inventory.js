import React, { useEffect } from 'react';
import { InventoryItem } from '../InventoryItem/InventoryItem';

export const Inventory = ({data, setData}) => {


    useEffect(() => {
        const fetchData = async () => {
                let response = await fetch("http://localhost:3002/");
                let lugares = await response.json();
                setData(lugares);
            }

            fetchData();
        }, [])

    

    return (
        <div>
            {data.map(
                (lugar) => typeof lugar.id != "undefined" && 
                <InventoryItem 
                    key={lugar.id} 
                    id={lugar.id} 
                    name={lugar.name} 
                    cost={lugar.cost} 
                    email={lugar.email} 
                    province={lugar.province} 
                    Canton={lugar.Canton} 
                    district={lugar.district} 
                    Contact={lugar.Contact} 

                />
            )}
        </div>
    )
};


