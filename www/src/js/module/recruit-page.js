
'use strict';
import React from 'react';
import catch_render_error from './catch_error';
import {recruit_page_json} from './global';
import superagent from 'superagent';

@catch_render_error
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
    superagent
      .get(recruit_page_json)
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
  render(){
    return(
          <section className="about-us">
            <div className="compare-title col-lg-4  col-md-4 col-sm-4">
                <div className="big-title">{this.state.modules.big_title}</div>
                <div className="small-title col-lg-12 col-md-12 col-sm-12">
                    {this.state.modules.recruit_links.map((value, index) => {
                      let type = index === this.state.modules.current_index ? "active": "";
                      return <a key={"recruit_links" + index} href="javascript:void(0)" target="content" className={type} onClick={this.menu_links_click.bind(this,index)}>
                                  {value.menu_title}
                             </a>
                    })}
                </div>
            </div>
            <div className="introduce-cont col-lg-8  col-md-8 col-sm-8">
                <div className="Android">
                    <div>
                        <img src={this.state.modules.recruit_links[this.state.modules.current_index].show_img} width="100%"/>
                    </div>
                    <h2 className="introduce-title">
                        {this.state.modules.recruit_links[this.state.modules.current_index].title}
                    </h2>
                    <div className="introduce-cont">
                        <div>
                            <div className="post-title">
                              {this.state.modules.recruit_links[this.state.modules.current_index].introduce_title}
                            </div>
                            <p>
                              {this.state.modules.recruit_links[this.state.modules.current_index].introduce}
                            </p>
                        </div>
                        <div className="">
                            <div className="post-title">
                              {this.state.modules.recruit_links[this.state.modules.current_index].responsibilities_title}
                            </div>
                            <div>
                                <ol>
                                  {this.state.modules.recruit_links[this.state.modules.current_index].responsibilities_list.map(function(value, index){
                                    return <li key={"responsibilities_list_" + index}>{value.content}</li>
                                  })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

    )
  }
}
