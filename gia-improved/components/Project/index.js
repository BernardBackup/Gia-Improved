import React, { useState } from 'react';
import Header from './Header'
import Hero from './Hero'
import CollectionPage from './body';



export default function index() {
    
    return (
        <div className=' relative' >
        <Header />
        <Hero/>
        <CollectionPage/>
        </div>
    )
}