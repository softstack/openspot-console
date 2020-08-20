import React from 'react';
import axios from 'axios';

export default class TableAutoScaling extends React.Component{

state = {
    instances : [],
}

    componentDidMount(){
      axios.get(`http://localhost:4000/dev/asgroups`).then(res =>{
        const autoInstance = JSON.parse(res.data)  
                 
        //console.log(autoInstance.AutoScalingGroups[0])
        this.setState({ 
          instances: autoInstance.AutoScalingGroups,
         });
         
      });

    }

    render(){
       
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
                          <th scope="col" class="border-0">Group</th>
                          <th scope="col" class="border-0">Id</th>
                          <th scope="col" class="border-0">Type</th>
                          <th scope="col" class="border-0">HealthStatus</th>
                          <th scope="col" class="border-0">Region</th>
                        </tr>
                      </thead>
                      <tbody>
                      { this.state.instances.map((instance) =>
                        <tr>
                          <td>{instance.AutoScalingGroupName}</td>
                          <td><a href="teste">{instance.Instances[0].InstanceId}</a></td>
                          <td>{instance.Instances[0].InstanceType}</td>                   
                          <td>{instance.Instances[0].HealthStatus}</td>
                          <td>{instance.Instances[0].AvailabilityZone}</td>     
                        </tr>
                        ) }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
             
        );
    }

}