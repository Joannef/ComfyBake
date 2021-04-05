import database from '../firebase';
import "./OrderDetails.css";

const id = this.props.location.state.id;
const addy = this.props.location.state.addy;
const status = this.props.location.state.status;
const plan = this.props.location.state.plan;
const price = this.props.location.state.price;
var subtotal = price*0.85;
var tax = price - subtotal;



export default function OrderDetails() {
    return (
        <div class="big-rect">
            <k class="top-p"> Order Details</k>
            <f class="side-word-1">{id}</f>
            <f class="side-word-2">{status}</f>
            <f class="middle-word-1">Ship To:</f>
            <f class="middle-word-2">{addy}</f>
            <f class="middle-word-3">Payment Information</f>
            <f class="middle-word-4">{plan}</f>
            <f class="right-word-1">Order Summary</f>
            <f class="right-word-2a">Subtotal</f>
            <f class="right-word-2b">{subtotal}</f>
            <f class="right-word-3a">Sales Tax</f>
            <f class="right-word-3b">{tax}</f>
            <y class="faint-line"/>
            <f class="right-word-4a">Total</f>
            <f class="right-word-4b">{price}</f>
            <q class="bye-bye"> We hope you order again soon!</q>
        </div>
    )
};
