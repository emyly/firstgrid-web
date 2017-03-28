

'use strict';
import React from 'react';
import {Router, Route, Link, browserHistory,IndexRoute,hashHistory} from 'react-router';

export default class MainSidebar extends React.Component{
  state = {
   current_index: 0,
   sub_current_index: 0,
   links:[
     {name:"首页编辑",subitem:[
                               {url: "/home",title:"首页内容编辑"},
                               {url: "/home_header",title: "顶部导航编辑"},
                               {url: "/home_footer",title: "底部内容编辑"}
                             ]},
     {name:"关于我们编辑",subitem:[
                               {url: "/about",title:"关于我们内容编辑"},
                               {url: "/about_backup",title: "关于我们其他编辑"}
                             ]},
     {name:"产品与服务编辑",subitem:[
                               {url: "/service",title:"产品与服务内容编辑"},
                               {url: "/service_backup",title: "产品与服务其他编辑"}
                             ]},
     {name:"招聘编辑",subitem:[
                               {url: "/recruit",title:"招聘内容编辑"},
                               {url: "/recruit_backup",title: "招聘其他编辑"}
                             ]},
     {name:"联系我们编辑",subitem:[
                               {url: "/contact",title:"联系我们内容编辑"},
                               {url: "/contact_backup",title: "联系我们其他编辑"}
                             ]},
     {name:"部署页面编辑",subitem:[
                               {url: "/deploy",title:"子模块部署编辑"},
                               {url: "/deploy_backup",title: "子模块其他编辑"}
                             ]}
   ]
  };
  onMenuClick (index){
   this.setState({current_index:index});
  }
  onMenuSubClick (index){
   this.setState({sub_current_index:index});
  }
  render(){
    return(
            <aside className="main-sidebar">
              <section className="sidebar">
                <div className="user-panel">
                  <div className="pull-left image">
                    <img src="images/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                  </div>
                  <div className="pull-left info">
                    <p>{this.props.account}</p>
                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                  </div>
                </div>
                <form action="#" method="get" className="sidebar-form">
                  <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..."/>
                    <span className="input-group-btn">
                      <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
                <ul className="sidebar-menu">
                  <li className="header">菜单导航</li>
                  {
                    this.state.links.map(function(item, index) {
                      const li_type = this.state.current_index == index ? "active treeview" : "treeview";
                      return <li className={li_type} key={'sidebar_' + index} onClick={this.onMenuClick.bind(this, index)}>
                                <a href="#">
                                  <i className="fa"></i> <span>{item.name}</span>
                                  <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                  </span>
                                </a>
                                <ul className="treeview-menu">
                                  {
                                    item.subitem.map(function(value, value_index) {
                                      const sub_li_type = this.state.sub_current_index == value_index ? "active" : "";
                                      return <li key={'subsidebar_' + value_index} className={sub_li_type} onClick={this.onMenuSubClick.bind(this, value_index)}>
                                                <Link to={value.url} ><i className="fa fa-circle-o"></i> {value.title}</Link>
                                             </li>
                                  }.bind(this))}
                                </ul>

                              </li>
                    }.bind(this))}
                </ul>
              </section>
            </aside>
    )
  }
}
