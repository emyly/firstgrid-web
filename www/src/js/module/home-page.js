
'use strict';
import React from 'react';
import catch_render_error from './catch_error';
import {home_page_json} from './global';
import superagent from 'superagent';

import MyCommon from '../plugins/common';
import MyParticles from '../plugins/particles';

@catch_render_error
export default class HomePage extends React.Component{
  state = {
    modules: {
      "home_logo_img": "/images/index/logo.png",
      "about_us_info": {
        "about_us_logo_img": "/images/index/compare-bg.jpg"
      },
      "service_info": {
        "links":[
          {
            "icon": "/images/index/cloud-platform.png"
          },
          {
            "icon": "/images/index/message.png"
          },
          {
            "icon": "/images/index/pc.png"
          },
          {
            "icon": "/images/index/ios.png"
          },
          {
            "icon": "/images/index/Android.png"
          }
        ]
      }
    }
  };
  constructor(){
    super();
    superagent
      .get(home_page_json)
      .set('Accept', 'application/json')
      .end((err,res) => {
        if(!err){
          var data = JSON.parse(res.text);
          this.setState({modules:data.modules});
        }
      });
  }
  componentDidMount(){
    MyParticles.newInstance().run();
    MyCommon.newInstance().home_run();
  }
  render(){
    return(
          <section className="home-page">
            <section className="first-page col-lg-12 col-md-12 col-sm-12">
              <div id="particles-js"></div>
              <div className="firstgrid-Logo">
                  <img src={this.state.modules.home_logo_img}/>
              </div>
            </section>
            <section className="about_us col-lg-12 col-md-12 col-sm-12">
              <img src={this.state.modules.about_us_info.about_us_logo_img} id="img" width="100%" height="100%"/>
              <div className="container">
                  <div className="comparss-opcity">
                      <h2>{this.state.modules.about_us_info.title}</h2>
                      <p>
                          {this.state.modules.about_us_info.about_us_column1}<br/>
                          {this.state.modules.about_us_info.about_us_column2}<br/>
                          {this.state.modules.about_us_info.about_us_column3}<br/>
                          {this.state.modules.about_us_info.about_us_column4}<br/>
                          {this.state.modules.about_us_info.about_us_column5}<br/>
                          {this.state.modules.about_us_info.about_us_column6}<br/>
                          {this.state.modules.about_us_info.about_us_column7}<br/>
                          {this.state.modules.about_us_info.about_us_column8}<br/>
                          {this.state.modules.about_us_info.about_us_column9}<br/>
                          {this.state.modules.about_us_info.about_us_column10}<br/>
                      </p>
                  </div>
              </div>
            </section>
            <section className="service col-lg-12 col-md-12 col-sm-12">
              <div className="service-border">
                  <h2>{this.state.modules.service_info.title}</h2>
                  <ul className="service-logo">
                      {this.state.modules.service_info.links.map(function(value,index){
                         return <li key={"service_info_links" + index}>
                                   <div>
                                       <img src={value.icon} width="100%"/>
                                       <p>
                                           {value.main_name}<br/>{value.sub_name}
                                       </p>
                                   </div>
                               </li>
                      })}
                  </ul>
              </div>
            </section>
          </section>
    )
  }
}
