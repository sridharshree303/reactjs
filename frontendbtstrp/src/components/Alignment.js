import React from 'react'

const Alignment = () => {
  return (
    <div>
       <div className="container">
        <h3>Bootstrap Grid System </h3>
        <div className="row align-items-center justify-content-center">
            <div className="col-sm col-sm-3 col-md-2 alert alert-primary">
                <h2>Hello world !</h2>
            </div>
            <div className="col-sm col-sm-6 col-md-8 alert alert-success">
                <h2>Hello world !<br/> This is earth<br/>
                    welcome to the World of the planet</h2>
            </div>
            <div className="col-sm col-sm-3 col-md-2 alert alert-warning">
                <h2>Hello world !</h2>
            </div>
            <div className="col-sm col-sm-3 col-md-auto alert alert-info">
                <h2>Hello world !</h2>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Alignment
