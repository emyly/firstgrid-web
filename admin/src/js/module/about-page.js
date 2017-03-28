
'use strict';
import React from 'react';
import superagent from 'superagent';
import {about_page_json} from './global';

export default class AboutPage extends React.Component{
  state = {
    modules: {
      current_index: 0,
      about_links:[{menu_title:"",show_img:"",title:"",introduce:""}]
    }
  };
  constructor(){
    super();
    superagent.get(about_page_json).set('Accept', 'application/json').end(function(err,res){
      if(!err){
        var data = JSON.parse(res.text);
        this.setState({modules:data.modules});
      }
    }.bind(this));
  }
  handleInputChange(key,e)
  {
    let data = this.state.modules;
    const value = e.target.value;
    if(key === "current_index"){
      if ( data.about_links.length >= value && value > 0)
      {
        data[key] = value-1;
      }else{
        alert(`设置"页面当前选中的公司介绍"只能设置1到${data.about_links.length}之间，请重新设置`);
      }
    }else{
      data[key] = value;
    }
    this.setState({modules:data});
  }
  handleLinksChange(index,key,e)
  {
      let data = this.state.modules;
      data.about_links[index][key] = e.target.value;
      this.setState({modules:data});
  }
  handleSubmit(e){
      e.preventDefault();
      superagent.post(about_page_json).set('Content-Type', 'application/json')
      .accept('application/json').send({json:this.state.modules}).end(function(err,res){
          if(!err)
          {
              let data = JSON.parse(res.text);
              if(data.code == 0)
              {
                  alert('保存关于我们内容成功');
                  location.href = "/#/about";
              }
          }
      });
  }
  render(){
    return(
            <div className="content-wrapper">
              <section className="content-header">
                <h1>
                  关于我们
                  <small>内容编辑</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard"></i>关于我们编辑</a></li>
                  <li className="active">内容编辑</li>
                </ol>
              </section>
              <section className="content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box box-primary">
                      <div className="box-header">
                        <i className="fa fa-edit"></i>
                        <h3 className="box-title">关于我们内容编辑</h3>
                      </div>
                      <div className="box-body">
                          <div className="input-group margin">
                            <div className="input-group-btn">
                              <button type="button" className="btn btn-primary">关于我们页面的顶部标题:</button>
                            </div>
                            <input type="text" className="form-control" value={this.state.modules.big_title} onChange={this.handleInputChange.bind(this,'big_title')} placeholder="关于我们页面顶部标题"/>
                          </div>
                          <div className="input-group margin">
                            <div className="input-group-btn">
                              <button type="button" className="btn btn-primary">页面当前选中的公司介绍:</button>
                            </div>
                            <input type="text" className="form-control" value={this.state.modules.current_index+1} onChange={this.handleInputChange.bind(this,'current_index')} placeholder="页面当前选中的公司介绍"/>
                          </div>
                      </div>
                    </div>
                    <div className="box box-primary">
                      <div className="box-header">
                        <i className="fa fa-edit"></i>
                        <h3 className="box-title">关于我们右边内容编辑</h3>
                      </div>
                      {this.state.modules.about_links.map(function(value,index){
                          return <div key={"about_links_" + index} className="box-body">
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">左侧菜单文字标题:</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.menu_title} onChange={this.handleLinksChange.bind(this,index,'menu_title')} placeholder="关于我们左侧菜单标题"/>
                                    </div>
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">右侧展示图片地址:</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.show_img} onChange={this.handleLinksChange.bind(this,index,'show_img')} placeholder={value.menu_title + "展示图片"}/>
                                    </div>
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">右侧展示文字标题:</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.title} onChange={this.handleLinksChange.bind(this,index,'title')} placeholder={value.menu_title + "文字标题"}/>
                                    </div>
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">右侧展示文字介绍:</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.introduce} onChange={this.handleLinksChange.bind(this,index,'introduce')} placeholder={value.menu_title + "文字介绍"}/>
                                    </div>
                                 </div>
                      }.bind(this))}
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
