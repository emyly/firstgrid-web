
'use strict';
import React from 'react';

export default class MainHeader extends React.Component{
    render(){
      return(
              <header className="main-header">
                <a href="#" className="logo">
                  <span className="logo-mini">首格</span>
                  <span className="logo-lg">首格网络后台管理</span>
                </a>
                <nav className="navbar navbar-static-top">
                  <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span className="sr-only">Toggle navigation</span>
                  </a>

                  <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                      <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          <img src="images/user2-160x160.jpg" className="user-image" alt="User Image"/>
                          <span className="hidden-xs">{this.props.account}</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="user-header">
                            <img src="images/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                            <p>
                              {this.props.account} - Web Developer
                              <small>让我们重新定义医疗管理</small>
                            </p>
                          </li>
                          <li className="user-body">
                            <div className="row">
                              <div className="col-xs-4 text-center">
                                <a href="#">粉丝</a>
                              </div>
                              <div className="col-xs-4 text-center">
                                <a href="#">关注</a>
                              </div>
                              <div className="col-xs-4 text-center">
                                <a href="#">朋友</a>
                              </div>
                            </div>
                          </li>
                          <li className="user-footer">
                            <div className="pull-left">
                              <a href="#" className="btn btn-default btn-flat">简介</a>
                            </div>
                            <div className="pull-right">
                              <a href="/" className="btn btn-default btn-flat">登出</a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
      )
    }
}
