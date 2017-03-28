
'use strict';
import React from 'react';
import superagent from 'superagent';

import {header_json} from './global';


export default class Header extends React.Component{
  state = {
    modules: {
      links:[]
    }
  };
  constructor(){
    super();
    superagent.get(header_json).set('Accept', 'application/json').end(function(err,res){
      if(!err){
        let data = JSON.parse(res.text);
        this.setState({modules:data.modules});
      }
    }.bind(this));

  }
  handleNameChange(index,key,e)
  {
      let data = this.state.modules;
      data.links[index][key] = e.target.value;
      data.links[index].name_temp = data.links[index].name;
      this.setState({modules:data});
  }
  handleSubmit(e){
      e.preventDefault();
      superagent.post(header_json).set('Content-Type', 'application/json')
      .accept('application/json').send({json:this.state.modules}).end(function(err,res){
          if(!err)
          {
              let data = JSON.parse(res.text);
              if(data.code == 0)
              {
                  alert('保存顶部导航成功');
                  location.href = "/#/home_header";
              }
          }
      });
  }
  render(){
    return(
          <div className="content-wrapper">
            <section className="content-header">
              <h1>
                首页
                <small>顶部导航编辑</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i>首页编辑</a></li>
                <li className="active">顶部导航编辑</li>
              </ol>
            </section>
            <section className="content">
              <div className="row">
                <div className="col-md-12">
                  <div className="box box-primary">
                    <div className="box-header">
                      <i className="fa fa-edit"></i>
                      <h3 className="box-title">顶部导航编辑</h3>
                    </div>
                    <div className="box-body">
                      {this.state.modules.links.map(function(value,index){
                        return  <div key={"header_links_" + index}>
                                  <div className="input-group margin">
                                    <div className="input-group-btn">
                                      <button type="button" className="btn btn-primary">第{index+1}个导航显示的名称:</button>
                                    </div>
                                    <input type="text" className="form-control" value={value.name} onChange={this.handleNameChange.bind(this,index,'name')} placeholder="导航显示名称"/>
                                  </div>
                                  <div className="input-group margin">
                                    <div className="input-group-btn">
                                      <button type="button" className="btn btn-primary">第{index+1}个导航悬停的名称:</button>
                                    </div>
                                    <input type="text" className="form-control" value={value.name_hover} onChange={this.handleNameChange.bind(this,index,'name_hover')} placeholder="导航悬停名称"/>
                                  </div>
                                </div>
                       }.bind(this))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row btn-div">
                <button type="button" className="btn btn-block btn-primary btn-lg" onClick={this.handleSubmit.bind(this)}>确认保存</button>
              </div>
            </section>
          </div>

    )
  }

}
