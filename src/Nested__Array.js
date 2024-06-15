
import {Table} from 'react-bootstrap'
import React from 'react';
function Nested_Array() {
    const users = [
        {name:'Deepak', email:'deepak@test.com', address:[
            {Hn:'10', city:'mohali', country:'india'},
            {Hn:'15', city:'Delhi', country:'india'},
            {Hn:'20', city:'Noida', country:'india'},
            {Hn:'30', city:'mohali', country:'india'}
        ]},
        {name:'Ayan', email:'ayan@test.com', address:[
            {Hn:'10', city:'mohali', country:'india'},
            {Hn:'15', city:'Delhi', country:'india'},
            {Hn:'20', city:'Noida', country:'india'},
            {Hn:'30', city:'mohali', country:'india'}
        ]},
        {name:'Raju', email:'raju@test.com', address:[
            {Hn:'10', city:'mohali', country:'india'},
            {Hn:'15', city:'Delhi', country:'india'},
            {Hn:'20', city:'Noida', country:'india'},
            {Hn:'30', city:'mohali', country:'india'}
        ]},
        {name:'Prakash', email:'prakash@test.com', address:[
            {Hn:'10', city:'mohali', country:'india'},
            {Hn:'15', city:'Delhi', country:'india'},
            {Hn:'20', city:'Noida', country:'india'},
            {Hn:'30', city:'mohali', country:'india'}
        ]},
    ]
    return(
        <div className="App">
        <h1>Array Nested Listing</h1>
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>S.N</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                </tr>
                {
                    users.map((item,i)=>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Table striped>
                                    <tbody>
                                        <tr>
                                            <td>HOUSE NO.</td>
                                            <td>CITY</td>
                                            <td>COUNTRY</td>
                                        </tr>
                                        {
                                            item.address.map((data)=>
                                                <tr>
                                                    <td>{data.Hn}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.country}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>)
                }
            </tbody>
        </Table>
        </div>
    );
}

export default Nested_Array;
