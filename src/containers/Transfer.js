import SellerPage from './SellersPage';
import Home from './Home';

const Transfer = (props) =>{
    const {AccountID, SellerID, reflash} = props;

    return(
        <div>
        {reflash?(
            <>
            <SellerPage
                AccountID = {AccountID}
                SellerID = {SellerID}
            />
            </>  
        ):(
            <>
            <Home
                AccountID = {AccountID}
                SellerID = {SellerID}
            />
            </>
        )}
        </div>
    );
}
export default Transfer;