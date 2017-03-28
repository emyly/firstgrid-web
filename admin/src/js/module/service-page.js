
'use strict';
import React from 'react';
import superagent from 'superagent';
import {service_page_json} from './global';

export default class ServicePage extends React.Component{
  state = {
    modules: {
      range_cont_links:[]
    }
  };
  constructor(){
    super();
    superagent.get(service_page_json).set('Accept', 'application/json').end(function(err,res){
      if(!err){
        var data = JSON.parse(res.text);
        this.setState({modules:data.modules});
      }
    }.bind(this));
  }
  handleLinksChange (index, key, e){
    let data = this.state.modules;
    data.range_cont_links[index][key] = e.target.value;
    this.setState({modules:data});
  }
  handleSubmit(e){
      e.preventDefault();
      superagent.post(service_page_json).set('Content-Type', 'application/json')
      .accept('application/json').send({json:this.state.modules}).end(function(err,res){
          if(!err)
          {
              let data = JSON.parse(res.text);
              if(data.code == 0)
              {
                  alert('保存产品与服务内容成功');
                  location.href = "/#/service";
              }
          }
      });
  }
  render(){
    return(
            <div className="content-wrapper">
              <section className="content-header">
                <h1>
                  产品与服务
                  <small>内容编辑</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard"></i>产品与服务编辑</a></li>
                  <li className="active">内容编辑</li>
                </ol>
              </section>
              <section className="content">
                <div className="row">
                  <div className="col-md-12">
                    {this.state.modules.range_cont_links.map(function(value,index){
                        return <div key={'range_cont_links_' + index} className="box box-primary">
                                  <div className="box-header">
                                    <i className="fa fa-edit"></i>
                                    <h3 className="box-title">第{index+1}页内容编辑</h3>
                                  </div>
                                  <div className="box-body">
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">左边图片地址:</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.big_icon} onChange={this.handleLinksChange.bind(this,index,'big_icon')} placeholder="左边大图片地址"/>
                                    </div>
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">右边图片地址:</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.small_icon} onChange={this.handleLinksChange.bind(this,index,'small_icon')} placeholder="右边小图片地址"/>
                                    </div>
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">右边内容标题:</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.title} onChange={this.handleLinksChange.bind(this,index,'title')} placeholder="右边内容标题"/>
                                    </div>
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">右边内容描述:</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.describe} onChange={this.handleLinksChange.bind(this,index,'describe')} placeholder="右边内容描述"/>
                                    </div>
                                  </div>
                               </div>
                    }.bind(this))}
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
