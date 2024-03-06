import React, { useState } from 'react';
import Header from './Header'
import Hero from './Hero'
import Tokenomics from './about';


export default function index() {
    
    return (
        <div className=' relative' >
        <Header />
        <Hero/>
        <Tokenomics/>
        </div>
    )
}