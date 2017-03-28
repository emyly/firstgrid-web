
'use strict';
import React from 'react';
import superagent from 'superagent';
import {recruit_page_json} from './global';

export default class RecruitPage extends React.Component{
  state = {
    modules: {
      current_index: 0,
      recruit_links:[
        {
          "responsibilities_list":[],
          "requirements_list": []
        }
      ]
    }
  };
  constructor(){
    super();
    superagent.get(recruit_page_json).set('Accept', 'application/json').end(function(err,res){
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
        if ( data.recruit_links.length > value && value > 0)
        {
          data[key] = value-1;
        }else{
          alert(`设置"页面当前选中岗位"只能设置1到${data.recruit_links.length}之间，请重新设置`);
        }
      }else{
        data[key] = value;
      }
      this.setState({modules:data});
  }
  handleLinksChange(index,key,e)
  {
      let data = this.state.modules;
      data.recruit_links[index][key] = e.target.value;
      this.setState({modules:data});
  }
  handleLinksConternChange(index,key,data_index,e)
  {
      let data = this.state.modules;
      data.recruit_links[index][key][data_index].content = e.target.value;
      this.setState({modules:data});
  }
  handleSubmit(e){
      e.preventDefault();
      superagent.post(recruit_page_json).set('Content-Type', 'application/json')
      .accept('application/json').send({json:this.state.modules}).end(function(err,res){
          if(!err)
          {
              let data = JSON.parse(res.text);
              if(data.code == 0)
              {
                  alert('保存招聘内容成功');
                  location.href = "/#/recruit";
              }
          }
      });
  }
  render(){
    return(
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            招聘
            <small>内容编辑</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i>招聘编辑</a></li>
            <li className="active">内容编辑</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">

              <div className="box box-primary">
                <div className="box-header">
                  <i className="fa fa-edit"></i>
                  <h3 className="box-title">招聘内容编辑</h3>
                </div>
                <div className="box-body">
                    <div className="input-group margin">
                      <div className="input-group-btn">
                        <button type="button" className="btn btn-primary">招聘页面顶部标题:</button>
                      </div>
                      <input type="text" className="form-control" value={this.state.modules.big_title} onChange={this.handleInputChange.bind(this,'big_title')} placeholder="招聘页面大标题"/>
                    </div>
                    <div className="input-group margin">
                      <div className="input-group-btn">
                        <button type="button" className="btn btn-primary">页面当前选中岗位:</button>
                      </div>
                      <input type="text" className="form-control" value={this.state.modules.current_index+1} onChange={this.handleInputChange.bind(this,'current_index')} placeholder="页面当前选中岗位"/>
                    </div>
                </div>
              </div>
              {this.state.modules.recruit_links.map(function(value,index){
                  return <div key={'recruit_links_' + index} className="box box-primary">
                            <div className="box-header">
                                <i className="fa fa-edit"></i>
                                <h3 className="box-title">第{index+1}个岗位详情:</h3>
                            </div>
                            <div className="box-body">
                              <div className="input-group margin">
                                <div className="input-group-btn">
                                  <button type="button" className="btn btn-primary">招聘左侧菜单标题:</button>
                                </div>
                                <input type="text" className="form-control" value={value.menu_title} onChange={this.handleLinksChange.bind(this,index,'menu_title')} placeholder="招聘左侧菜单标题"/>
                              </div>
                              <div className="input-group margin">
                                <div className="input-group-btn">
                                  <button type="button" className="btn btn-primary">招聘岗位展示图片:</button>
                                </div>
                                <input type="text" className="form-control" value={value.show_img} onChange={this.handleLinksChange.bind(this,index,'show_img')} placeholder="招聘岗位展示图片"/>
                              </div>
                              <div className="input-group margin">
                                <div className="input-group-btn">
                                  <button type="button" className="btn btn-primary">招聘岗位要求标题:</button>
                                </div>
                                <input type="text" className="form-control" value={value.title} onChange={this.handleLinksChange.bind(this,index,'title')} placeholder="招聘岗位要求标题"/>
                              </div>
                              <div className="input-group margin">
                                <div className="input-group-btn">
                                  <button type="button" className="btn btn-primary">招聘职位描述标题:</button>
                                </div>
                                <input type="text" className="form-control" value={value.introduce_title} onChange={this.handleLinksChange.bind(this,index,'introduce_title')} placeholder="招聘职位描述标题"/>
                              </div>
                              <div className="input-group margin">
                                <div className="input-group-btn">
                                  <button type="button" className="btn btn-primary">招聘职位描述内容:</button>
                                </div>
                                <input type="text" className="form-control" value={value.introduce} onChange={this.handleLinksChange.bind(this,index,'introduce')} placeholder="招聘职位描述内容"/>
                              </div>
                              <div className="input-group margin">
                                <div className="input-group-btn">
                                  <button type="button" className="btn btn-primary">招聘岗位职责标题:</button>
                                </div>
                                <input type="text" className="form-control" value={value.responsibilities_title} onChange={this.handleLinksChange.bind(this,index,'responsibilities_title')} placeholder="招聘岗位职责标题"/>
                              </div>
                              {value.responsibilities_list.map(function(data, data_index){
                                return <div key={'responsibilities_list_'+data_index} className="input-group margin">
                                          <div className="input-group-btn">
                                            <button type="button" className="btn btn-primary">第{data_index+1}行岗位职责内容:</button>
                                          </div>
                                          <input type="text" className="form-control" value={data.content} onChange={this.handleLinksConternChange.bind(this,index,'responsibilities_list',data_index)} placeholder={"第" + (data_index+1) +"行岗位职责内容"}/>
                                       </div>
                              }.bind(this))}
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
