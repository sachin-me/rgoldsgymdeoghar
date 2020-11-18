import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, makeStyles, Step, StepConnector, StepLabel, Stepper, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Pricing.css';
import clsx from 'clsx';
import { Check } from '@material-ui/icons';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Stripe from '../Stripe/Stripe';
import { createContext } from 'react';
import congratulation from '../../images/congratulation.png'

export const PaymentContext = createContext();

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: 'goldenrod',
        },
    },
    completed: {
        '& $line': {
            borderColor: 'goldenrod',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: 'goldenrod',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: 'goldenrod',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

function getSteps() {
    return ['Personal Details', 'Bank Payment', 'Membership Created'];
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
        borderRadius: '0',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const Pricing = () => {
    const [pricingPlan, setPricingPlan] = useState(null);
    const [path, setPath] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [customerInformation, setCustomerInformation] = useState(null);

    console.log(paymentMethod);


    const { register, handleSubmit, errors } = useForm();

    const location = useLocation();

    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    const day = ['Day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const month = ['Month', 'January', 'February', 'March', 'April', 'Mey', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = [1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 'Year']

    const steps = getSteps();
    const classes = useStyles();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    useEffect(() => {
        if (location.pathname === '/pricing') {
            setPricingPlan(null)
        }
    }, [location.pathname])

    const ELEMENTS_OPTIONS = {
        fonts: [
            {
                cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
            },
        ],
    };

    return (
        <main className='pricing'>
            {
                !pricingPlan ?
                    <section>
                        <h2><span style={{ color: 'goldenrod' }}>CHOOSE THE OFFER</span> THAT SUITS YOU</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat earum unde cum, reprehenderit doloremque facere?</p>
                        <div className='pricingDetails'>
                            <div>
                                <p>BILLED MONTHLY</p>
                                <h2>ADVANCE PLANE</h2>
                                <h1>$140</h1>
                                <div>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Mobile-Optimized</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Best Hosting</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Free Custom</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Outstanding</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Happy Customer</p>
                                </div>
                                <Link onMouseOver={() => setPath('planDetails')} style={{ textDecoration: 'none' }} to={'/pricing/:' + path}>
                                    <Button onClick={() => setPricingPlan('Advance Plan')}>PURCHASE</Button>
                                </Link>
                            </div>
                            <div>
                                <p>BILLED MONTHLY</p>
                                <h2>BASIC PLANE</h2>
                                <h1>$120</h1>
                                <div>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Mobile-Optimized</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Best Hosting</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Free Custom</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Outstanding</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Happy Customer</p>
                                </div>
                                <Link onMouseOver={() => setPath('planDetails')} style={{ textDecoration: 'none' }} to={'/pricing/:' + path}>
                                    <Button onClick={() => { setPricingPlan('Basic Plan') }}>PURCHASE</Button>
                                </Link>
                            </div>
                            <div>
                                <p>BILLED MONTHLY</p>
                                <h2>BEGINNERS</h2>
                                <h1>$90</h1>
                                <div>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Mobile-Optimized</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Best Hosting</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Free Custom</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Outstanding</p>
                                    <p><FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px', fontSize: '12px' }} /> Happy Customer</p>
                                </div>
                                <Link onMouseOver={() => setPath('planDetails')} style={{ textDecoration: 'none' }} to={'/pricing/:' + path}>
                                    <Button onClick={() => { setPricingPlan('Beginners') }}>PURCHASE</Button>
                                </Link>
                            </div>
                        </div>
                    </section> :
                    <section>
                        <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <div className='informationForm' style={{ display: activeStep === 0 ? 'flex' : 'none' }}>
                            <form>
                                <label>First Name</label>
                                <br />
                                <input name='firstName' ref={register({ required: true })} />
                                <br />
                                {errors.firstName && <small>First Name is Required</small>}
                                <br />
                                <label className='rightPosition'>Last Name</label>
                                <br />
                                <input className='rightPosition' name='lastName' ref={register({ required: true })} />
                                <br />
                                {errors.lastName && <small className='rightPosition'>Last Name is Required</small>}
                                <br />
                                <label className='leftPosition'>Email</label>
                                <br />
                                <input className='leftPosition' name='email' ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                                <br />
                                {errors.email && <small className='leftPosition'>Insert a valid email</small>}
                                <br />
                                <label className='rightPosition2'>Mobile Number</label>
                                <br />
                                <input className='rightPosition2' name='mobileNumber' ref={register({ required: true, pattern: /[0-9]/g })} />
                                <br />
                                {errors.mobileNumber && <small className='rightPosition2'>Insert a valid mobile number</small>}
                                <br />
                                <label className='leftPosition2'>Date of Birth</label>
                                <br />
                                <select className='leftPosition2' name="day" ref={register({ required: true })}>
                                    {
                                        day.map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))
                                    }
                                </select>
                                <select className='leftPosition2' name="month" ref={register({ required: true })}>
                                    {
                                        month.map(month => (
                                            <option key={month} value={month}>{month}</option>
                                        ))
                                    }
                                </select>
                                <select className='leftPosition2' name='year' ref={register({ required: true })}>
                                    {
                                        year.reverse().map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))
                                    }
                                </select>
                                <br />
                                <label className='rightPosition3'>Gender</label>
                                <br />
                                <select className='rightPosition3' name='gender' ref={register({ required: true })}>
                                    <option value='Gender'></option>
                                    <option value='female'>Female</option>
                                    <option value='Male'>Male</option>
                                    <option value='others'>Others</option>
                                </select>
                                <br />
                                <label className='leftPosition3'>Address Line 1</label>
                                <br />
                                <input className='leftPosition3' name='address' ref={register({ required: true })} />
                                <br />
                                {errors.address && <small className='leftPosition3'>Address Line 1 is Required</small>}
                                <br />
                                <label className='rightPosition4'>Country/Region</label>
                                <br />
                                <input className='rightPosition4' name='countryRegion' ref={register({ required: true })} />
                                <br />
                                {errors.countryRegion && <small className='rightPosition4'>Country/Region is Required</small>}
                                <br />
                                <label className='leftPosition4'>City</label>
                                <br />
                                <input className='leftPosition4' name='city' ref={register({ required: true })} />
                                <br />
                                {errors.city && <small className='leftPosition4'>City is Required</small>}
                                <br />
                                <label className='rightPosition5'>Postcode</label>
                                <br />
                                <input className='rightPosition5' name='postcode' ref={register({ required: true, pattern: /[0-9]/g })} />
                                <br />
                                {errors.postcode && <small className='rightPosition5'>Insert a valid postcode</small>}
                            </form>
                        </div>
                        <div className='paymentForm' style={{ display: activeStep === 1 ? 'flex' : 'none' }}>
                            <PaymentContext.Provider value={[paymentMethod, setPaymentMethod]}>
                                <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                                    <Stripe />
                                </Elements>
                            </PaymentContext.Provider>
                        </div>
                        <div className='finishingMessage' style={{ display: activeStep === 2 ? 'flex' : 'none' }}>
                            <div>
                                <h3>Congratulation, now you are a member of our family.</h3>
                                <img src={congratulation} alt=""/>
                            </div>
                        </div>
                        <div className='steps'>
                            <div>
                                {activeStep === steps.length ? (
                                    <div>
                                        <Button onClick={handleReset} className={classes.button}>
                                            Reset
                                        </Button>
                                    </div>
                                ) : (
                                        <div>
                                            <div className='nextBtn'>
                                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                    Back
                                                </Button>
                                                {activeStep === 0 ?
                                                    <Button
                                                        variant="contained"
                                                        style={{ background: 'goldenrod' }}
                                                        onClick={handleSubmit((data) => {
                                                            setCustomerInformation(data);
                                                            handleNext();
                                                        })}
                                                        className={classes.button}
                                                    >
                                                        Next
                                                    </Button> :
                                                    <section>
                                                        {
                                                            activeStep === 1 ?
                                                                <Button
                                                                    disabled={paymentMethod === null}
                                                                    variant="contained"
                                                                    style={{ background: 'goldenrod' }}
                                                                    onClick={handleSubmit((data) => {
                                                                        setCustomerInformation(data);
                                                                        handleNext();
                                                                    })}
                                                                    className={classes.button}
                                                                >
                                                                    Next
                                                                </Button> :
                                                                <Button
                                                                    variant="contained"
                                                                    style={{ background: 'goldenrod' }}
                                                                    onClick={handleSubmit((data) => {
                                                                        handleNext();
                                                                        window.location.reload()
                                                                    })}
                                                                    className={classes.button}
                                                                >
                                                                    finish
                                                                </Button>
                                                        }
                                                    </section>
                                                }
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </section>
            }
        </main>
    );
};

export default Pricing;