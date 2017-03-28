
'use strict';
import React from 'react';
import superagent from 'superagent';
import {contact_page_json} from './global';

export default class ContactPage extends React.Component{
  state = {
    modules: {
    }
  };
  constructor(){
    super();
    superagent.get(contact_page_json).set('Accept', 'application/json').end(function(err,res){
      if(!err){
        var data = JSON.parse(res.text);
        this.setState({modules:data.modules});
      }
    }.bind(this));
  }
  handleInputChange(key,e)
  {
      let data = this.state.modules;
      data[key] = e.target.value;
      this.setState({modules:data});
  }
  handleSubmit(e){
      e.preventDefault();
      superagent.post(contact_page_json).set('Content-Type', 'application/json')
      .accept('application/json').send({json:this.state.modules}).end(function(err,res){
          if(!err)
          {
              let data = JSON.parse(res.text);
              if(data.code == 0)
              {
                  alert('保存联系我们内容成功');
                  location.href = "/#/contact";
              }
          }
      });
  }
  render(){
    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            联系我们
            <small>内容编辑</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i>联系我们编辑</a></li>
            <li className="active">内容编辑</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="box box-primary">
                <div className="box-header">
                  <i className="fa fa-edit"></i>
                  <h3 className="box-title">联系我们内容编辑</h3>
                </div>
                <div className="box-body">
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">联系我们页面的顶部标题:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.big_title} onChange={this.handleInputChange.bind(this,'big_title')} placeholder="联系我们页面的顶部标题"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">公司logo图片地址:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.company_logo} onChange={this.handleInputChange.bind(this,'company_logo')} placeholder="公司logo图片地址"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">公司名称:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.company_name} onChange={this.handleInputChange.bind(this,'company_name')} placeholder="公司名称"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">公司官网:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.company_website} onChange={this.handleInputChange.bind(this,'company_website')} placeholder="公司官网"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">公司电话:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.company_number} onChange={this.handleInputChange.bind(this,'company_number')} placeholder="公司电话"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">地址图片:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.company_address_logo} onChange={this.handleInputChange.bind(this,'company_address_logo')} placeholder="图片地址"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">总部标题:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.headquarters} onChange={this.handleInputChange.bind(this,'headquarters')} placeholder="总部标题"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">总部办公:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.headquarters_address_office} onChange={this.handleInputChange.bind(this,'headquarters_address_office')} placeholder="总部办公"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">杭州研发:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.department_name} onChange={this.handleInputChange.bind(this,'department_name')} placeholder="杭州研发"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">研发地址:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.company_address_number} onChange={this.handleInputChange.bind(this,'company_address_number')} placeholder="研发地址"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">研发办公:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.company_address_office} onChange={this.handleInputChange.bind(this,'company_address_office')} placeholder="研发办公"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">邮箱图片:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.email_logo} onChange={this.handleInputChange.bind(this,'email_logo')} placeholder="邮箱图片"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">邮箱标题:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.email_title} onChange={this.handleInputChange.bind(this,'email_title')} placeholder="底部logo图片地址"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">邮箱网址:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.email_address} onChange={this.handleInputChange.bind(this,'email_address')} placeholder="邮箱网址"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">联系图片:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.phone_logo} onChange={this.handleInputChange.bind(this,'phone_logo')} placeholder="联系图片"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">总部标题:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.headquarters_title} onChange={this.handleInputChange.bind(this,'headquarters_title')} placeholder="总部标题"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">总部电话:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.headquarters_phone} onChange={this.handleInputChange.bind(this,'headquarters_phone')} placeholder="总部电话"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">杭研标题:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.company_title} onChange={this.handleInputChange.bind(this,'company_title')} placeholder="杭研标题"/>
                  </div>
                  <div className="input-group margin">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-primary">杭研电话:</button>
                    </div>
                    <input type="text" className="form-control" value={this.state.modules.company_phone} onChange={this.handleInputChange.bind(this,'company_phone')} placeholder="杭研电话"/>
                  </div>
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
