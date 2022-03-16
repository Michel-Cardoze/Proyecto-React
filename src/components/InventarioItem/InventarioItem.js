
export const InventarioItem = ({ id, name, last,email,job}) => {



    return (
        <div className="row">
            <h3 className="usuarios">Usuario</h3>
            <div className="col-sm-5 ">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Información</h5>
                    <p>Id: {id}</p><p>Name: {name}</p><p>Lastname: {last}</p><p>Email: {email}</p><p>Job: {job}</p>
                    </div>
                </div>
            </div>
        </div>
        
                     
    )
}