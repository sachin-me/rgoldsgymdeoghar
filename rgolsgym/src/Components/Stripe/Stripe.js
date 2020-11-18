import { Radio, withStyles } from '@material-ui/core';
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import './Stripe.css';
import payment1 from '../../images/payment/payment1.png';
import payment2 from '../../images/payment/payment2.png';
import payment3 from '../../images/payment/payment3.png';
import payPal from '../../images/payment/payPal.png';
import PaypalBtn from 'react-paypal-checkout';
import { useContext } from 'react';
import {PaymentContext} from '../Pricing/Pricing'

const SubmitButton = ({ processing, error, children, disabled }) => (
    <button
        style={{
            backgroundColor: 'goldenrod',
            border: 'none',
            borderRadius: '5px',
            padding: '5px 10px',
            outline: 'none',
            marginLeft: '14px'
        }}
        className={`SubmitButton ${error ? 'SubmitButton--error' : ''}`}
        type="submit"
        disabled={processing || disabled}
    >
        {processing ? 'Processing...' : children}
    </button>
);

const ErrorMessage = ({ children }) => (
    <div className="ErrorMessage" role="alert">
        <svg width="16" height="16" viewBox="0 0 17 17">
            <path
                fill="#FFF"
                d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
            />
            <path
                fill="#6772e5"
                d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
            />
        </svg>
        {children}
    </div>
);

const ResetButton = ({ onClick }) => (
    <button type="button" className="ResetButton" onClick={onClick}>
        <svg width="32px" height="32px" viewBox="0 0 32 32">
            <path
                fill="#FFF"
                d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
            />
        </svg>
    </button>
);

// radio

const GoldenRadio = withStyles({
    root: {
        color: 'goldenrod',
        '&$checked': {
            color: 'goldenrod',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const Stripe = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [billingDetails, setBillingDetails] = useState({ name: '', });
    const [selectedValue, setSelectedValue] = useState('a');
    const [paymentMethod, setPaymentMethod] = useContext(PaymentContext)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (error) {
            elements.getElement('card').focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }

        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
            billing_details: billingDetails,
        });

        setProcessing(false);

        if (payload.error) {
            setError(payload.error);
        } else {
            setPaymentMethod(payload.paymentMethod);
        }
    };

    const reset = () => {
        setError(null);
        setProcessing(false);
        setPaymentMethod(null);
        setBillingDetails({
            name: '',
        });
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    // PayPal

    const onSuccess = (payment) => {
        // Congratulation, it came here means everything's fine!
        console.log("The payment was succeeded!", payment);
    }

    const onCancel = (data) => {
        // User pressed "cancel" or close Paypal's popup!
        console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
        console.log("Error!", err);
    }


    let env = 'sandbox';
    let currency = 'USD';
    let total = 1;
    let locale = 'en_US';

    let style = {
        'label': 'pay',
        'tagline': false,
        'size': 'medium',
        'shape': 'pill',
        'color': 'gold',
    };

    const client = {
        sandbox: 'AavWMx-6T-JoXrCWXQvTJboeiahgkUSvmvJ-LyjHGlMDOnTjoaKLGWzc67vE-HBS5J1ncaAUv38XMvk6',
        production: 'YOUR-PRODUCTION-APP-ID',
    }

    return (
        <div className='stripe'>
            <div>
                <div className='creditCard'>
                    <div>
                        <GoldenRadio
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value="a"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                            style={{
                                position: 'relative',
                                bottom: '5px',
                                height: '25px'
                            }}
                        />
                        <div>
                            <p>Credit Card</p>
                            <small>Safe money transfer using your bank account, Visa, Maestro, Discover, American Express.</small>
                        </div>
                    </div>
                    <div className='paymentImg'>
                        <img src={payment1} alt="" />
                        <img src={payment2} alt="" />
                        <img src={payment3} alt="" />
                    </div>
                </div>
                <div style={{
                    height: selectedValue === 'a' ? '200px' : '0',
                    opacity: selectedValue === 'a' ? '1' : '0',
                    transition: '2s',
                    marginTop: '5px',
                    overflow: 'hidden'
                }}>
                    {paymentMethod ?
                        <div className="Result">
                            <div className="ResultTitle" role="alert">
                                Payment successful
                        </div>
                            <div className="ResultMessage">
                                Thanks for trying Stripe Elements. No money was charged, but we
                                generated a PaymentMethod: {paymentMethod.id}
                            </div>
                            <ResetButton onClick={reset} />
                        </div>
                        :
                        <form className="Form" onSubmit={handleSubmit}>
                            <fieldset className="FormGroup">
                                <div>
                                    <label>CARD NUMBER</label>
                                    <div>
                                        <CardNumberElement
                                            className='cardNumber'
                                            required
                                            onChange={(e) => {
                                                setError(e.error);
                                                setCardComplete(e.complete);

                                            }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label>NAME ON CARD</label>
                                        <br />
                                        <input
                                            id='name'
                                            type="text"
                                            placeholder='Your Name'
                                            required
                                            autoComplete='name'
                                            value={billingDetails.name}
                                            onChange={(e) => {
                                                setBillingDetails({ ...billingDetails, name: e.target.value })
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>EXPIRE DATE</label>
                                        <div>
                                            <CardExpiryElement required onChange={(e) => {
                                                setError(e.error);
                                                setCardComplete(e.complete);
                                            }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label>CVC CODE</label>
                                        <div>
                                            <CardCvcElement required onChange={(e) => {
                                                setError(e.error);
                                                setCardComplete(e.complete);
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            {error && <ErrorMessage>{error.message}</ErrorMessage>}
                            <SubmitButton processing={processing} error={error} disabled={!stripe}>
                                Pay
                            </SubmitButton>
                        </form>
                    }
                </div>
            </div>
            <div>
                <div className='payPal'>
                    <div>
                        <GoldenRadio
                            checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value="b"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'B' }}
                            style={{
                                position: 'relative',
                                bottom: '5px',
                                height: '25px'
                            }}
                        />
                        <div>
                            <p>PayPal</p>
                            <small>You will be redirect to PayPal website to complete your purchase securely.</small>
                        </div>
                    </div>
                    <div className='payPalImg'>
                        <img src={payPal} alt="" />
                    </div>
                </div>
                <div style={{
                    height: selectedValue === 'b' ? '40px' : '0',
                    opacity: selectedValue === 'b' ? '1' : '0',
                    transition: '2s',
                    marginTop: '10px',
                    overflow: 'hidden'
                }}>
                    <PaypalBtn
                        env={env}
                        client={client}
                        currency={currency}
                        total={total}
                        locale={locale}
                        style={style}
                        onError={onError}
                        onSuccess={onSuccess}
                        onCancel={onCancel} />
                </div>
            </div>
        </div>
    );
};

export default Stripe;