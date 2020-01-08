import React, {Component} from 'react';
import BarChart_SickCows from '../dataCharts/BarChart_SickCows'
import M from 'materialize-css';  

class ConceptionRate extends Component {

state = {

}

componentDidMount (){
    M.AutoInit();
}



    render() {
        return(
            <BarChart_SickCows />
        )
    }
}

export default ConceptionRate;