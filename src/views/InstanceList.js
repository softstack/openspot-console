import React from 'react';
import axios from 'axios';

export default class TableAutoScaling extends React.Component{

state = {
    groups : [],
}


    componentDidMount(){
        axios.get(`http://localhost:4000/dev/asgroups`).then(res =>{
         
         const autoGroups = JSON.parse(res.data) 
        console.log(autoGroups.AutoScalingGroups[0].AutoScalingGroupName);    
        this.setState({ groups: autoGroups.AutoScalingGroups[0].AutoScalingGroupName });

        });


        
    }

    

    render(){

      const elements = [this.state.groups];

        const items = []

        for (const [index, value] of elements.entries()) {
          items.push(<td key={index}>{value}</td>)
  }
        return(
            
            <div class="row">
              <div class="col">
                <div class="card card-small mb-4">
                  <div class="card-header border-bottom">
                    <h6 class="m-0">All instances list</h6>
                  </div>
                  <div class="card-body p-0 pb-3 text-center">
                    <table class="table mb-0">
                      <thead class="bg-light">
                        <tr>
                          <th scope="col" class="border-0">Id</th>
                          <th scope="col" class="border-0">Name</th>
                          <th scope="col" class="border-0">Group Name</th>
                          <th scope="col" class="border-0">Auto scalling group</th>
                          <th scope="col" class="border-0">Region</th>
                          <th scope="col" class="border-0">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>123</td>
                          <td><a href="teste">instance name</a></td>
                          
                          <td>Rteste-autoscaling</td>
                          <td>sa-east-1</td>
                          <td>active</td>
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