
'use strict';
import React from 'react';
import catch_render_error from './catch_error';
import {service_page_json} from './global';
import superagent from 'superagent';

import MyRange from '../plugins/range';
import MyMouseWheel from '../plugins/jquery.mousewheel';

@catch_render_error
export default class ServicePage extends React.Component{
  state = {
    modules: {
      "range_cont_links": [
          {
            "big_icon": "/images/service/0001.jpg"
          },
          {
            "big_icon": "/images/service/00002.jpg"
          },
          {
            "big_icon": "/images/service/000003.jpg"
          },
          {
            "big_icon": "/images/service/00004.jpg"
          },
          {
            "big_icon": "/images/service/000005.jpg"
          }
      ]
    }
  };
  constructor(){
    super();
    superagent
      .get(service_page_json)
      .set('Accept', 'application/json')
      .end((err,res) => {
        if(!err){
          var data = JSON.parse(res.text);
          this.setState({modules:data.modules});
        }
      });
  }
  componentDidMount(){
    MyMouseWheel.newInstance().run();
    MyRange.newInstance().run();
  }
  render(){
    return(
        <form name="form1" method="post" action="" id="form1">
          <div id="idea_left" style={{opacity: 1}}>
              <div className="header">
                  <div className="menu_icon"></div>
                  <div id="menu_mask"></div>
              </div>
              <div id="main" ref="main">
                  <div className="range_cont">
                      {this.state.modules.range_cont_links.map(function(value, index){
                          return <div key={"range_cont_links_" + index} className={"range_box " + value.active_class} id={value.id}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className="td_l col-lg-6 col-md-6 col-sm-6">
                                                <div className="webimg">
                                                        <img src={value.big_icon} width="100%"/>
                                                </div>
                                            </td>
                                            <td className="textlist webtext col-lg-6 col-md-6 col-sm-6">
                                                <h3 className="title_style2">
                                                    <span className={value.span_class}>
                                                        <img src={value.small_icon} width="100%"/>
                                                    </span>
                                                    <p>{value.title}</p>

                                                </h3>
                                                <div className="desc">{value.describe}</div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                      })}
                  </div>
                  <ul className="range_type">
                      <li className="item itemcur" data-num="0"><i></i></li>
                      <li className="item1" data-num="1"><i></i></li>
                      <li className="item2" data-num="2"><i></i></li>
                      <li className="item3" data-num="3"><i></i></li>
                      <li className="item4" data-num="4"><i></i></li>
                  </ul>
              </div>
          </div>
          <footer className="index-footer col-lg-12 col-md-12 col-sm-12">
              <div className="index-footer-bottom col-lg-12 col-md-12 col-sm-12">
                  <div className="footer-bottom">
                      {this.state.modules.footer_license}
                  </div>
              </div>
          </footer>
        </form>
    )
  }
}
