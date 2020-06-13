import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51GsWiMGiTlIbj8wlnDzqG0etuUXZl5TolXWnZHfkjYmSV9UckIRch5ix1mwOyYTGvs2fH4QjC8nPNVN7cO1shiUz00ftwjtGk1'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')  
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton


