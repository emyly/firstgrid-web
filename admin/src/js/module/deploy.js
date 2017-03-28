'use strict'

import React from 'react';
import superagent from 'superagent';


import  {
  home_page_json,
  header_json,
  footer_json,
  about_page_json,
  service_page_json,
  recruit_page_json,
  contact_page_json
} from './global';


export default class Deploy extends React.Component{

    state ={
        modules:[{
            name:"首页内容",
            link:home_page_json
        },{
            name:"顶部导航",
            link:header_json
        },{
            name:"底部内容",
            link:footer_json
        },{
            name:"关于我们",
            link:about_page_json
        },{
            name:"产品与服务",
            link:service_page_json
        },{
            name:"招聘",
            link:recruit_page_json
        },{
            name:"联系我们",
            link:contact_page_json
        }]
    }

    handleDeploy(index){
        const name = this.state.modules[index].name;
        superagent.post('/deploy').set('Content-Type', 'application/json')
        .accept('application/json').send({json:this.state.modules[index].link}).end(function(err,res){
            if(!err)
            {
                let data = JSON.parse(res.text);
                if(data.code == 0)
                {
                    alert(`部署${name}模块成功！`);
                    location.href = "/#/deploy";
                }
            }
        });
    }
    render(){
        return(
          <div className="content-wrapper deploy-content">
            <section className="content-header">
              <h1>
                部署页面
                <small>子模块部署编辑</small>
              </h1>
              <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i>部署页面编辑</a></li>
                <li className="active">子模块部署编辑</li>
              </ol>
            </section>
            <section className="content">
              <div className="row">
                <div className="col-md-12">

                  <div className="box box-primary">
                    <div className="box-header">
                      <i className="fa fa-edit"></i>
                      <h3 className="box-title">子模块部署</h3>
                    </div>
                    <div className="box-body">

                      {this.state.modules.map(function(module,index){
                          return <div className="module" key={'deploy_links_' + index}>
                                    <div className="name">{module.name}模块</div>
                                    <button type="button" className="submit btn btn-block btn-primary btn-lg" onClick={this.handleDeploy.bind(this,index)}>确认部署</button>
                                </div>
                      }.bind(this))}

                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
    }
}
