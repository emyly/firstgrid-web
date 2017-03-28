

'use strict';
import React from 'react';
import { connect } from 'react-redux';

import MainHeader from './main-header';
import MainSidebar from './main-sidebar';
import ContentWrapper from './content-wrapper';
import MainFooter from './main-footer';
import Login from './login';


export default class App extends React.Component{
  state = {
    modules: {
      is_login: true,
      account: "",
      password: ""
    }

  };
  handleSubmit(e){
      e.preventDefault();
      if (this.state.modules.account === "firstgrid" && this.state.modules.password === "firstgridadmin"){
        this.setState({is_login:true});
      }else if (this.state.modules.account === ""){
        alert('账号不能为空,请重新输入！');
        location.href = "/";
      }else if (this.state.modules.password === ""){
        alert('密码不能为空,请重新输入！');
        location.href = "/";
      }else{
        alert('账号或密码错误,请重新输入！');
        location.href = "/";
      }
  }
  handleInputChange(key,e)
  {
      let data = this.state.modules;
      data[key] = e.target.value;
      this.setState({modules:data});
  }
  render(){
    return (
          (() => {
            if (this.state.is_login){
              return <div>
                        <MainHeader account={this.state.modules.account}/>
                        <MainSidebar account={this.state.modules.account}/>
                        <ContentWrapper child={this.props.children}/>
                        <MainFooter />
                        <div className="control-sidebar-bg"></div>
                     </div>
            }else{
              return <section style={{backgroundImage: 'url(/images/BG.jpg)',display:'flex',width:'100%',height:950}}>
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
                                            <input type="text" className="form-control" placeholder="请输入账户名"  onChange={this.handleInputChange.bind(this,'account')} required/>
                                        </div>
                                        <div className="form-group has-feedback">
                                            <input type="password" className="form-control" placeholder="请输入密码" onChange={this.handleInputChange.bind(this,'password')} required/>
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
            }
          })()
    )
  }

}

// export default connect(
//   state => ({ is_login: state.is_login })
// )(App)
