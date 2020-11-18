import { Button } from '@material-ui/core';
import React from 'react';
import './OurClasses.css';
import { Link } from 'react-router-dom';

const OurClasses = () => {

    return (
        <main className='ourClasses'>
            <section>
                <section>
                    <Link to='/physioTraining'>
                        <Button className='classBtn'>PHYSIO TRAINING </Button>
                    </Link>
                </section>
                <section>
                    <Link to='/selfDefense'>
                        <Button className='classBtn'>SELF DEFENSE</Button>
                    </Link>
                </section>
                <section>
                    <Link to='/advanceGym'>
                        <Button className='classBtn'>ADVANCE GYM</Button>
                    </Link>
                </section>
            </section>
            <section>
                <section>
                    <Link to='/cardioTraining'>
                        <Button className='classBtn'>CARDIO TRAINING</Button>
                    </Link>
                </section>
                <section>
                    <Link to='/strengthTraining'>
                        <Button className='classBtn'>STRENGTH TRAINING</Button>
                    </Link>
                </section>
                <section>
                    <Link to='/physioTraining2'>
                        <Button className='classBtn'>PHYSIO TRAINING</Button>
                    </Link>
                </section>
            </section>
        </main>
    );
};

export default OurClasses;