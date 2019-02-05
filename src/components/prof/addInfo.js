import React, { Component } from 'react';
export default class Additional extends Component {
  render() {
    return(
         <div role="tabpanel" className="tab-pane active" id="add-info">
            <p><strong>Details: </strong></p>
            <ul>
               <li>Crew neck</li>
               <li>Short sleeves</li>
               <li>Front text print</li>
               <li>Cropped</li>
               <li>Approx. 18&quot; length</li>
               <li>Made in USA</li>
            </ul>
            <p>&nbsp;</p>
            <p><strong>Fiber Content:</strong></p>
            <ul>
               <li>50% cotton, 50% polyester</li>
            </ul>
            <p>&nbsp;</p>
            <p><strong>Care:</strong></p>
            <ul>
               <li>Hand wash</li>
            </ul>
            <p>&nbsp;</p>
            <p><strong>Additional Info: </strong></p>
            <ul>
               <li>Fit: this style fits true  to size. </li>
            </ul>
            <p>&nbsp;</p>
            <p><strong>Models stats for sizing: </strong></p>
            <ul>
               <li>Height: 510&quot;</li>
               <li>Bust: 32&quot;</li>
               <li>Waist: 24&quot;</li>
               <li>Hips: 34&quot;</li>
               <li>Model is wearing size S.</li>
            </ul>
         </div>
    )
  }
}
