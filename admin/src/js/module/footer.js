
'use strict';
import React from 'react';
import superagent from 'superagent';

import {footer_json} from './global';

export default class Footer extends React.Component{
  state = {
    modules: {
      promotion_links:[]
    },
  };
  constructor(){
    super();
    superagent.get(footer_json).set('Accept', 'application/json').end(function(err,res){
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
  handlePromotionLinksChange(index,key,e)
  {
      let data = this.state.modules;
      data.promotion_links[index][key] = e.target.value;
      this.setState({modules:data});
  }
  handleSubmit(e){
      e.preventDefault();
      superagent.post(footer_json).set('Content-Type', 'application/json')
      .accept('application/json').send({json:this.state.modules}).end(function(err,res){
          if(!err)
          {
              let data = JSON.parse(res.text);
              if(data.code == 0)
              {
                alert('保存底部内容成功');
                location.href = "/#/home_footer";
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
                <small>底部内容编辑</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i>首页编辑</a></li>
                <li className="active">底部内容编辑</li>
              </ol>
            </section>
            <section className="content">
              <div className="row">
                <div className="col-md-12">

                  <div className="box box-primary">
                    <div className="box-header">
                      <i className="fa fa-edit"></i>
                      <h3 className="box-title">底部内容编辑</h3>
                    </div>
                    <div className="box-body">

                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">底部logo图片地址:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.footer_logo_img} onChange={this.handleInputChange.bind(this,'footer_logo_img')} placeholder="底部logo图片地址"/>
                        </div>
                        {this.state.modules.promotion_links.map(function(value,index){
                          return <div key={'promotion_links_' + index}>
                                  <div className="input-group margin">
                                    <div className="input-group-btn">
                                      <button type="button" className="btn btn-primary">底部推广链接地址:</button>
                                    </div>
                                    <input type="text" className="form-control" value={value.url} onChange={this.handlePromotionLinksChange.bind(this,index,'url')} placeholder="底部推广链接地址"/>
                                  </div>
                                  <div className="input-group margin">
                                    <div className="input-group-btn">
                                      <button type="button" className="btn btn-primary">推广链接图片地址:</button>
                                    </div>
                                    <input type="text" className="form-control" value={value.icon} onChange={this.handlePromotionLinksChange.bind(this,index,'icon')} placeholder="推广链接图片地址"/>
                                  </div>
                                 </div>
                        }.bind(this))}
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">二维码图片的地址:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.two_dimension_icon} onChange={this.handleInputChange.bind(this,'two_dimension_icon')} placeholder="二维码图片地址"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">底部导航菜单标题:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.navigation_title} onChange={this.handleInputChange.bind(this,'navigation_title')} placeholder="底部导航菜单标题"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">底部联系我们标题:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.contact_title} onChange={this.handleInputChange.bind(this,'contact_title')} placeholder="底部联系我们标题"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">底部公司总部名称:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.company_name} onChange={this.handleInputChange.bind(this,'company_name')} placeholder="底部公司总部名称"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">底部研发中心名称:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.department_name} onChange={this.handleInputChange.bind(this,'department_name')} placeholder="底部研发中心名称"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">底部研发中心地址:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.company_address} onChange={this.handleInputChange.bind(this,'company_address')} placeholder="底部研发中心地址"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">底部上海总部名称:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.company_headquarters} onChange={this.handleInputChange.bind(this,'company_headquarters')} placeholder="底部上海总部名称"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">底部上海总部地址:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.headquarters_address} onChange={this.handleInputChange.bind(this,'headquarters_address')} placeholder="底部上海总部地址"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">底部公司证件编号:</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.license} onChange={this.handleInputChange.bind(this,'license')} placeholder="底部公司证件编号"/>
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
