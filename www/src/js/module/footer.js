
'use strict';
import React from 'react';
import catch_render_error from './catch_error';
import {footer_json, header_json} from './global';
import superagent from 'superagent';
import {Link} from 'react-router';

@catch_render_error
export default class Footer extends React.Component{
  state = {
    modules: {
      promotion_links:[]
    },
    header_modules: {
      links:[]
    }
  };
  constructor(){
    super();
    superagent
      .get(footer_json)
      .set('Accept', 'application/json')
      .end((err,res) => {
        if(!err){
          var data = JSON.parse(res.text);
          this.setState({modules:data.modules});
        }
      });
    superagent
      .get(header_json)
      .set('Accept', 'application/json')
      .end((err,res) => {
        if(!err){
          var data = JSON.parse(res.text);
          this.setState({header_modules:data.modules});
        }
      });
  }
  render(){
    return(
            (() => {
                if (this.props.current_path === "/service") {
                    return <div style={{width:0}} > </div>
                }else {
                    return <footer className="index-footer">
                              <div className="index-footer-top col-lg-12  col-md-12 col-sm-12">
                                  <div className="footer-top">
                                      <div className="consociation-logo col-lg-4  col-md-4 col-sm-4">
                                          <div className="footer-logo">
                                              <img src={this.state.modules.footer_logo_img} width="100%"/>
                                          </div>
                                          <h2>{this.state.modules.company_name}</h2>
                                          <div className="prodect-introduce">
                                              <div className="port" >
                                                  {this.state.modules.promotion_links.map(function(value,index){
                                                      return <a key={'promotion_links_' + index} href={value.url} className={value.type} style={{width:0}}>
                                                                <img src={value.icon} width="100%"/>
                                                             </a>
                                                  })}
                                                  <div className="two-dimension" style={{width:0}}>
                                                      <img src={this.state.modules.two_dimension_icon} width="100%"/>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="nav col-lg-4  col-md-4 col-sm-4">
                                          <h2>{this.state.modules.navigation_title}</h2>
                                          {this.state.header_modules.links.map(function(value,index){
                                               return <Link key={'footer_url_' + index} to='#'>{value.name_hover}</Link>
                                           })}
                                      </div>
                                      <div className="touchUs col-lg-4  col-md-4 col-sm-4">
                                          <h2>{this.state.modules.contact_title}</h2>
                                          <p>
                                              {this.state.modules.company_name}<br/>
                                              {this.state.modules.department_name}<br/>
                                              {this.state.modules.company_address}<br/>
                                              {this.state.modules.company_headquarters}<br/>
                                              {this.state.modules.headquarters_address}<br/>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="index-footer-bottom  col-lg-12  col-md-4 col-sm-4">
                                  <a className="footer-bottom" href='http://www.miitbeian.gov.cn'>{this.state.modules.license}</a>
                              </div>
                          </footer>
                }
            })()
    )
  }
}
