
'use strict';
import React from 'react';

export default class ContentWrapper extends React.Component{
    render(){
      return(
              <div>
                {this.props.child}
              </div>
      )
    }
}
