
'use strict';
import React from 'react';
import { updateLoginState } from '../actions/functions';

export default class Login extends React.Component{
  state = {

  }
  handleSubmit(e){
      e.preventDefault();
      updateLoginState(true);
  }
  render(){
    return(

      <section style={{backgroundImage: 'url(/images/BG.jpg)',display:'flex',width:'100%',height:950}}>
          <div className="login-box" >
              <div className="login-boxBg"></div>
              <div className="login-box-body" style={{height:400}}>
                  <div className="login-logo">
                      <span className="fgrid_logo">
                            <img src="/images/login.png" className="fgrid_logo_img" style={{width:'50%'}}/>
                      </span>
                  </div>
                  <div>
                      <p className="login-box-msg">登录首格后台管理账号</p>
                      <form  name="loginForm">
                          <div className="form-group has-feedback">
                              <input type="text" name="loginName" className="form-control" placeholder="请输入账户名" required/>
                              <div className="error" >
                                  <small className="error" style={{display: "none"}}>
                                      用户名不能为空
                                  </small>
                              </div>
                          </div>

                          <div className="form-group has-feedback">
                              <input type="password" name="loginPassword" className="form-control" placeholder="请输入密码" required/>
                              <div className="error" >
                                  <small className="error" style={{display: "none"}}>
                                      密码不能为空
                                  </small>

                                  <small className="error" style={{display: "none"}}>
                                      请输入6到16位数字字母或下划线
                                  </small>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-xs-12" style={{marginTop:30}}>
                                  <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={this.handleSubmit.bind(this)}>登录</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>

      </section>
    )
  }
}
