
'use strict';
import React from 'react';
import superagent from 'superagent';
import {home_page_json} from './global';

export default class HomePage extends React.Component{
  state = {
    modules: {
      about_us_info:{},
      service_info:{
        links:[]
      }
    }
  };
  constructor(){
    super();
    superagent.get(home_page_json).set('Accept', 'application/json').end(function(err,res){
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
  handleAboutUsChange(key,e)
  {
      let data = this.state.modules;
      data.about_us_info[key] = e.target.value;
      this.setState({modules:data});
  }
  handleServiceChange(key,e)
  {
      let data = this.state.modules;
      data.service_info[key] = e.target.value;
      this.setState({modules:data});
  }
  handleServiceLinksChange(index,key,e)
  {
      let data = this.state.modules;
      data.service_info.links[index][key] = e.target.value;
      this.setState({modules:data});
  }
  handleSubmit(e){
      e.preventDefault();
      superagent.post(home_page_json).set('Content-Type', 'application/json')
      .accept('application/json').send({json:this.state.modules}).end(function(err,res){
          if(!err)
          {
              let data = JSON.parse(res.text);
              if(data.code == 0)
              {
                alert('保存首页内容成功');
                location.href = "/#/home";
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
                <small>内容编辑</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i>首页编辑</a></li>
                <li className="active">内容编辑</li>
              </ol>
            </section>
            <section className="content">
              <div className="row">
                <div className="col-md-12">

                  <div className="box box-primary">
                    <div className="box-header">
                      <i className="fa fa-edit"></i>
                      <h3 className="box-title">首页横幅编辑</h3>
                    </div>
                    <div className="box-body">
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页横幅logo图片地址</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.home_logo_img} onChange={this.handleInputChange.bind(this,'home_logo_img')} placeholder="首页横幅logo图片地址"/>
                        </div>
                    </div>
                  </div>
                  <div className="box box-primary">
                    <div className="box-header">
                      <i className="fa fa-edit"></i>
                      <h3 className="box-title">首页关于我们编辑</h3>
                    </div>
                    <div className="box-body">
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们背景图片</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.home_logo_img} onChange={this.handleAboutUsChange.bind(this,'home_logo_img')} placeholder="首页关于我们背景图片地址"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们文字标题</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.title} onChange={this.handleAboutUsChange.bind(this,'title')} placeholder="首页关于我们标题"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第一列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column1} onChange={this.handleAboutUsChange.bind(this,'about_us_column1')} placeholder="首页关于我们的第一列"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第二列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column2} onChange={this.handleAboutUsChange.bind(this,'about_us_column2')} placeholder="首页关于我们的第二列"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第三列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column3} onChange={this.handleAboutUsChange.bind(this,'about_us_column3')} placeholder="首页关于我们的第三列"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第四列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column4} onChange={this.handleAboutUsChange.bind(this,'about_us_column4')} placeholder="首页关于我们的第四列"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第五列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column5} onChange={this.handleAboutUsChange.bind(this,'about_us_column5')} placeholder="首页关于我们的第五列"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第六列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column6} onChange={this.handleAboutUsChange.bind(this,'about_us_column6')} placeholder="首页关于我们的第六列"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第七列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column7} onChange={this.handleAboutUsChange.bind(this,'about_us_column7')} placeholder="首页关于我们的第七列"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第八列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column8} onChange={this.handleAboutUsChange.bind(this,'about_us_column8')} placeholder="首页关于我们的第八列"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第九列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column9} onChange={this.handleAboutUsChange.bind(this,'about_us_column9')} placeholder="首页关于我们的第九列"/>
                        </div>
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页关于我们的第十列</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.about_us_info.about_us_column10} onChange={this.handleAboutUsChange.bind(this,'about_us_column10')} placeholder="首页关于我们的第十列"/>
                        </div>
                    </div>
                  </div>

                  <div className="box box-primary">
                    <div className="box-header">
                      <i className="fa fa-edit"></i>
                      <h3 className="box-title">首页service编辑</h3>
                    </div>
                    <div className="box-body">
                        <div className="input-group margin">
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">首页service标题文字</button>
                          </div>
                          <input type="text" className="form-control" value={this.state.modules.service_info.title} onChange={this.handleServiceChange.bind(this,'title')} placeholder="首页关于我们背景图片地址"/>
                        </div>
                        {this.state.modules.service_info.links.map(function(value,index){
                          return <div key={'service_info_links_' + index}>
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">首页service第{index+1}个图片地址</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.icon} onChange={this.handleServiceLinksChange.bind(this,index,'icon')} placeholder="首页service第{index+1}个图片地址"/>
                                    </div>
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">首页service第{index+1}个的主标题</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.main_name} onChange={this.handleServiceLinksChange.bind(this,index,'main_name')} placeholder={"首页service第"+ (index+1) +"个主标题"}/>
                                    </div>
                                    <div className="input-group margin">
                                      <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">首页service第{index+1}个的子标题</button>
                                      </div>
                                      <input type="text" className="form-control" value={value.sub_name} onChange={this.handleServiceLinksChange.bind(this,index,'sub_name')} placeholder={"首页service第"+(index+1)+"个子标题"}/>
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
