// onChange -> event handler function to capture user input
// ex: <input>, <textarea>, <select>, <checkbox>
// Triggers a function when the value of an element changes


import React, { useState} from 'react';

function MyComponent() {
    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('Cash');
    const [subscribe, setSubscribe] = useState(false);
    

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleSubscribeChange(event){
        setSubscribe(event.target.checked);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Payment Method</option>
                <option value="Master Card">Master Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Visa">Visa</option>
                <option value="Cash">Cash on Delivery</option>
            </select>
            <p>Payment Method: {payment}</p>

            <label>
                <input type="checkbox" checked={subscribe} onChange={handleSubscribeChange} />
                Subscribe to Channel
            </label>
            <p>Subscribed: {subscribe ? 'Yes' : 'No'}</p>

        </div>
    );
}
export default MyComponent;