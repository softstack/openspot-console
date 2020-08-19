import React from 'react';
import axios from 'axios';

export default class TableAutoScaling extends React.Component{

  constructor() {
    super();
    this.handleChecked = this.handleChecked.bind(this); 
  }

  state = {
    Autoscaling : [],
    Enable : [],
    isChecked: ""
    
  }


    handleChecked = event => {
      //this.setState({Check: true});
      axios.put(`http://localhost:4000/dev/asgroups/openspot/enable`,
      {  
          "auto-scaling-group-name": "openspot",
          "openspot": event.target.value
      }).then(res =>{
        const tag = JSON.parse(res.config.data)
        this.setState({ 
          isChecked:  !this.state.isChecked,
          
         });
          console.log(tag)            
      });
    }


    componentDidMount(){      
        axios.get(`http://localhost:4000/dev/asgroups`).then(res =>{
          const autoGroups = JSON.parse(res.data)           
          this.setState({ 
            Autoscaling: autoGroups.AutoScalingGroups,
            Enable: autoGroups.AutoScalingGroups[0].Tags[0].Value,
            
           });
           console.log(autoGroups.AutoScalingGroups[0].Tags[0].Value)
        });

        
    }



    render(){   
    
      var attrs = this.state.isChecked
      var isvalue = ""
      console.log(isvalue)
      console.log(this.state.isChecked)
      if (this.state.isChecked == false) {
        
        attrs = false
        isvalue = "disabled"
      } else {
        attrs = true
        isvalue = "enabled"
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
                      <tr>
                        
                        <th scope="col" class="border-0">Name</th>
                        <th scope="col" class="border-0">Desired Capacity</th>
                        <th scope="col" class="border-0">MaxSize</th>
                        <th scope="col" class="border-0">MinSize</th>
                        <th scope="col" class="border-0">Region</th>
                        <th scope="col" class="border-0">En.Tag</th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.state.Autoscaling.map((Autoscaling) =>
                        <tr>
                        
                          <td><a href="teste">{Autoscaling.AutoScalingGroupName}</a></td>
                          <td>{Autoscaling.DesiredCapacity}</td>   
                          <td>{Autoscaling.MaxSize}</td>                
                          <td>{Autoscaling.MinSize}</td>
                          <td>{Autoscaling.AvailabilityZones}</td>
                    <td>{isvalue}</td>
                          <td>
                            <div class="custom-control custom-checkbox mb-1" >
                            <input 
                            type="checkbox" 
                            class="custom-control-input"
                            id="formsCheckboxDefault" 
                            onClick={ this.handleChecked }
                            value={isvalue}
                            defaultChecked={attrs}
                             ></input>
                            <label class="custom-control-label" for="formsCheckboxDefault"></label>
                          </div>
                        </td>  
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