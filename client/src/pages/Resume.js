import React from 'react';
import '../App.css';

import resumePic from '../images/palmerinwanekCJ-resume_2020-02.png'


export default function Resume() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <img src= {resumePic} alt="CJ Resume" id="resume" />
                </div>
            </div>
        </div>
    )
}
