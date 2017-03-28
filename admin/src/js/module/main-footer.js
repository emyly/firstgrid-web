
'use strict';
import React from 'react';

export default class MainFooter extends React.Component{
    render(){
      return(
            <footer className="main-footer">
              <div className="pull-right hidden-xs">
                <b>Version</b> 1.0.0
              </div>
              <strong>Copyright &copy;  <a href="http://www.hao123.com">上海首格网络科技有限公司</a>.</strong> All rights
              reserved.
            </footer>
      )
    }
}
