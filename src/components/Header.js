import React, { Component } from 'react';

export default class Header extends Component {

    render(){
        return(
            <div class='flex items-center'>
                <div class='fw8 f2 lh-title pa3 w-80'>
                    FreeTime
                </div>      
                <div class='fw2 f2 pa3 w10'>
                    About
                </div>
                <div class='fw2 f2 pa3 w10'>
                    Log In
                </div>
            </div>
        )
    }
}