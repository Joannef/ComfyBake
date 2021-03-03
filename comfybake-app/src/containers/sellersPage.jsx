//imrc snippet
import React, {Component} from 'react';
import eggTart from './portuguese-egg-custard-tarts.jpg';
import "./sellerPage.css"

//cc snippet
class SellersPage extends Component {
    render() {
        
        return ( 
            <div class = "center">
                <h1>Sindy's Home Kitchen</h1>
                <h5>Recommendations</h5>

                <img src = {eggTart} alt = "Portugese Egg Tarts" class = "center"/>
                <h3>Portugese Egg Tarts: $2 per tart</h3>

                
            </div>
        );
    
    };
};

export default SellersPage;