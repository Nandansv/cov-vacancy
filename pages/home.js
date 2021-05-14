import React from 'react';

export default function Home(){
    return(
        <div>
            Home Page
        <button onClick={() => window.location = '/'}> Go back to Index </button>
        </div>
    )
}