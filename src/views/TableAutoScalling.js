import React from 'react';
import axios from 'axios';

export default class TableAutoScaling extends React.Component{

  constructor() {
    super();
    this.handleChecked = this.handleChecked.bind(this); 
  }

  state = {
    Autoscaling : [],
    //Enable : [],
    isChecked: ""
    
  }

    handleChecked = event => {
      event.preventDefault();
      axios.put(`http://localhost:4000/dev/asgroups/openspot/enable`,
      {  
          "auto-scaling-group-name": event.target.getAttribute('name'),
          "openspot": event.target.value
      }).then(res =>{
        if(!this.state.isChecked === true){
          alert("Tag Spot vinculada com sucesso !")
          //window.location.reload(false)
        }else{
          alert("Tag Spot desvinculada !")
          //window.location.reload(false)
        }              
        const tag = JSON.parse(res.config.data)
        this.setState({ 
          isChecked:  !this.state.isChecked,
          tag: tag
          
         });
          console.log(tag)
          console.log(this.state.isChecked , 'do put')            
      });
    }

    componentDidMount(){      
        axios.get(`http://localhost:4000/dev/asgroups`).then(res =>{
          const autoGroups = JSON.parse(res.data)
          console.log(autoGroups)
          this.setState({ 
            Autoscaling: autoGroups.AutoScalingGroups,
      //      Enable: autoGroups.AutoScalingGroups[0].Tags[0].Value,
            
           });
        });

        
    }

    render(){   
      
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
                          <td>
                          <a href="teste" >{Autoscaling.AutoScalingGroupName}</a>
                          </td>
                          <td>{Autoscaling.DesiredCapacity}</td>   
                          <td>{Autoscaling.MaxSize}</td>                
                          <td>{Autoscaling.MinSize}</td>
                          <td>{Autoscaling.AvailabilityZones}</td>
                          <td>{Autoscaling.Tags[0].Value}</td>
                          <td>
                            <div class="custom-control custom-checkbox mb-1" >
                            <input 
                            type="checkbox" 
                            class="custom-control-input"
                            id={Autoscaling.AutoScalingGroupName} 
                            onClick={ this.handleChecked }
                            name={Autoscaling.AutoScalingGroupName}  
                            value={!this.state.isChecked == true ? "enabled" : "disabled" }
                            defaultChecked={Autoscaling.Tags[0].Value == "enabled" ? true : false }
                             ></input>
                            <label class="custom-control-label" for={Autoscaling.AutoScalingGroupName}></label>
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