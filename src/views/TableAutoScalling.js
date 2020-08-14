import React from 'react';
import axios from 'axios';

export default class TableAutoScaling extends React.Component{

state = {
      
}


    componentDidMount(){
        axios.get(`http://localhost:4000/dev/asgroups`).then(res =>{
          const autoGroups = JSON.parse(res.data) 
          console.log(autoGroups.AutoScalingGroups[0]);    
          this.setState({ 
            groups: autoGroups.AutoScalingGroups[0].AutoScalingGroupName,
            
           });
        });
    }


    render(){

      const elements = [this.state.groups];

      const groupname = []
      
      for (const [index, value] of elements.entries()) {
        groupname.push(<td key={index}>{value}</td>)
        
        }

        return(
            
            
            <div class="row" >
            <div class="col">
              <div class="card card-small mb-4" >
                {/* style={{ overflow: "scroll" }} */}
                <div class="card-header border-bottom" >
                  <h6 class="m-0">All Auto scalign groups</h6>
                </div>
                <div class="card-body p-0 pb-3 text-center"  >
                  <table class="table mb-7"  >
                    <thead class="bg-light">
                      <tr >
                        
                        <th scope="col" class="border-0">Name</th>
                        <th scope="col" class="border-0">confi de exec</th>
                        <th scope="col" class="border-0">Instance</th>
                        <th scope="col" class="border-0">Status</th>
                        <th scope="col" class="border-0">capacibility</th>
                        <th scope="col" class="border-0">Region</th>
                        <th scope="col" class="border-0">Tag</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href="teste">{groupname}</a> </td>
                        <td>globo-teste-eks</td>
                        <td>3</td>
                        <td>pending</td>
                        <td>3</td>
                        <td>us-east-2</td>
                        <td>
                        <div class="custom-control custom-checkbox mb-1">
                          <input type="checkbox" class="custom-control-input" id="formsCheckboxDefault"></input>
                          <label class="custom-control-label" for="formsCheckboxDefault"></label>
                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
             
        );
    }

}