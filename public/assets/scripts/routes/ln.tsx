import React from 'react'
import ReactDOM from 'react-dom'

import LN_QR_CODE from '../_qr-code';

export default {

    init() {
        
        ReactDOM.render(
        
            <LN_QR_CODE />, 
            document.getElementById('root')
        
        );

    },

    finalize() {
      
        

    },

  }