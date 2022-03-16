import React, { Component } from "react";

class Listado extends Component{

    constructor(props){
        super(props)
        this.state = {
            tasks: ["Los Gavilanes","Rancho El Tabacón","San Buenaventura","San Martín","Las Veraneras"]
        }
      
    }

    render(){
        const {tasks} = this.state;
        return(           
            <div>
                <ul className="list-group">
                <h3>Centros Turisticos</h3>

                    <li className="list-group-item">
                        {tasks.map(task => <li className="list-group-item list-group-item-action"> <button className="centro">Ver más</button>{task}</li>)}
                       
                    </li>
                       
                </ul>
            </div>
        );
    }
      

}

export default Listado