import React from 'react'

const NestedColumns = () => {
  return (
    <div>
      <div className="container">
        <h3>Nested columns</h3>
        <div className="row offset-sm-1 ">
            <div className="col-sm-5 alert alert-secondary">
                <h4>col-sm-5</h4><br/>
                <h4>Hello world !<br/> This is earth<br/>
                    welcome to the World of the planet</h4>
            </div>
            <div className="col-sm-7">
                <div className="row alert alert-warning">
                    <h4>Row-1</h4>
                </div>
                <div className="row alert alert-danger">
                    <h4>Row-2</h4>
                </div>
                <div className="row">
                    <div className="col-sm-5 alert alert-success">
                        <h4>col-sm-5</h4>
                    </div>
                    <div className="col-sm-7 alert alert-info">
                        <h4>col-sm-7</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default NestedColumns
