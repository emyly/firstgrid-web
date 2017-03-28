
'use strict';
import React from 'react';
import catch_render_error from './catch_error';
import {about_page_json} from './global';
import superagent from 'superagent';
import MyCommon from '../plugins/common';

@catch_render_error
export default class AboutPage extends React.Component{
  state = {
    modules: {
      "current_index":0,
      "about_links": [
        {
          "show_img": "/images/about/about-us.jpg",
        },
        {
          "show_img": "/images/recruit/image_zhaopin.jpg",
        }
      ]
    }
  };
  constructor(){
    super();
    superagent
      .get(about_page_json)
      .set('Accept', 'application/json')
      .end((err,res) => {
        if(!err){
          var data = JSON.parse(res.text);
          this.setState({modules:data.modules});
        }
      });
  }
  menu_links_click(index){
    var data = this.state.modules;
    data.current_index = index;
    this.setState({modules:data});
  }
  componentDidMount(){
    MyCommon.newInstance().about_run();
  }
  render(){
    return(
            <div className="about-us">
              <div className="compare-title col-lg-4 col-md-4 col-sm-4">
                  <div className="big-title">{this.state.modules.big_title}</div>
                  <div className="small-title col-lg-12  col-md-12 col-sm-12">
                    {this.state.modules.about_links.map((value, index) => {
                      let type = index === this.state.modules.current_index ? "active": "";
                      return <a key={"about_links_" + index} href="javascript:void(0)" target="content" className={type} onClick={this.menu_links_click.bind(this,index)}>
                                  {value.menu_title}
                             </a>
                    })}
                  </div>
              </div>
              <div className="introduce-cont col-lg-8  col-md-8 col-sm-8">
                  <div className="compare-introduce">
                      <div>
                          <img src={this.state.modules.about_links[this.state.modules.current_index].show_img} width="100%"/>
                      </div>
                      <h2 className="introduce-title">
                          {this.state.modules.about_links[this.state.modules.current_index].title}
                      </h2>
                      <p className="introduce-cont">{this.state.modules.about_links[this.state.modules.current_index].introduce}</p>
                  </div>
              </div>
            </div>

    )
  }
}
