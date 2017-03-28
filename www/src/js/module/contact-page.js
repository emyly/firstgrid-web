
'use strict';
import React from 'react';
import catch_render_error from './catch_error';
import {contact_page_json} from './global';
import superagent from 'superagent';
import MyCommon from '../plugins/common';

@catch_render_error
export default class ContactPage extends React.Component{
  state = {
    modules: {
      "company_logo": "/images/contact-us/contact-us-logo.png",
      "company_address_logo": "/images/contact-us/address.png",
      "email_logo": "/images/contact-us/email.png",
      "phone_logo": "/images/contact-us/phone.png"
    }
  };
  constructor(){
    super();
    superagent
      .get(contact_page_json)
      .set('Accept', 'application/json')
      .end((err,res) => {
        if(!err){
          var data = JSON.parse(res.text);
          this.setState({modules:data.modules});
        }
      });
  }
  componentDidMount(){
    MyCommon.newInstance().contact_run();
  }
  render(){
    return(
            <section className="contact-us-cont col-lg-12 col-md-12 col-sm-12">
              <img src="images/contact-us/contact-us.jpg" width="100%" height="100%"/>
              <div className="contact-us"  >
                  <div className="col-lg-4 col-md-4 col-sm-4">
                      <div className="col-lg-12 col-md-12">
                          <div className="big-title">
                              {this.state.modules.big_title}
                          </div>
                      </div>
                      <div className="compare-base">
                          <span>
                              <img src={this.state.modules.company_logo}/>
                          </span>
                          <h2>{this.state.modules.company_name}</h2>
                          <p>
                              {this.state.modules.company_website}<br/>
                              Fax:{this.state.modules.company_number}
                          </p>
                      </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8">
                          <ul className="contact-us-right">
                              <li className="col-lg-4">
                                  <span>
                                      <img src={this.state.modules.company_address_logo} width="100%" id="address"/>
                                  </span>
                                  <div className="contact-us-address col-lg-8">
                                      <h2>{this.state.modules.headquarters}</h2>
                                      <p>{this.state.modules.headquarters_address_number}<br/>
                                          {this.state.modules.headquarters_address_office}
                                      </p>
                                      <h2>{this.state.modules.department_name}</h2>
                                      <p>
                                          {this.state.modules.company_address_number}<br/>
                                          {this.state.modules.company_address_office}
                                      </p>
                                  </div>
                              </li>
                              <li className="col-lg-4">
                                   <span>
                                      <img src={this.state.modules.email_logo} width="100%"/>
                                   </span>
                                  <div className="contact-us-address col-lg-8">
                                      <h2>{this.state.modules.email_title}</h2>
                                      <p>{this.state.modules.email_address}</p>
                                  </div>
                              </li>
                              <li style={{marginRight: 0}} className="col-lg-4">
                                   <span>
                                      <img src={this.state.modules.phone_logo} width="100%"/>
                                   </span>
                                  <div className="contact-us-address col-lg-8">
                                      <h2>{this.state.modules.headquarters_title}</h2>
                                      <p>{this.state.modules.headquarters_phone}</p>
                                      <h2>{this.state.modules.company_title}</h2>
                                      <p>{this.state.modules.company_phone}<br/></p>
                                  </div>
                              </li>
                          </ul>
                  </div>
              </div>
              </section>

    )
  }
}
