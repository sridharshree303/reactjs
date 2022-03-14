import React from 'react'

const Offset = () => {
  return (
    <div>
      <div className="container">
        <h3>Coloum offset </h3>
        <div className="row align-items-center  justify-content-center">
            <div className="col offset-sm-2 alert alert-info">
                <h3>class="offset-sm-2"</h3>
            </div>
            <div className="col-sm-5 offset-sm-2 alert alert-primary">
                <h3>class="col-sm-4 offset-sm-2"</h3>
            </div>
            <div className="col-sm-5 alert alert-success">
                <h3>class="col-sm-5"</h3>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Offset
