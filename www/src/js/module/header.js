
'use strict';
import React from 'react';
import catch_render_error from './catch_error';
import {header_json} from './global';
import superagent from 'superagent';
import {Link} from 'react-router';
import MyCommon from '../plugins/common';

@catch_render_error
export default class Header extends React.Component{
  state = {
    flag: true,
    current_index: 0,
    modules: {
      links:[]
    }
  };
  constructor(){
    super();
    superagent
      .get(header_json)
      .set('Accept', 'application/json')
      .end((err,res) => {
        if(!err){
          let data = JSON.parse(res.text);
          this.setState({modules:data.modules});
        }
      });

  }
  componentDidMount(){
    if (this.state.flag){
      MyCommon.newInstance().auto_overflow_y();
      let index = 0;
      if (this.props.current_path === "/about"){
        index = 1;
      }else if (this.props.current_path === "/service") {
        MyCommon.newInstance().hidden_overflow();
        index = 2;
      }else if (this.props.current_path === "/recruit") {
        index = 3;
      }else if (this.props.current_path === "/contact") {
        index = 4;
      }
      this.setState({current_index:index, flag:false});
    }
  }
  onClick (index){
    MyCommon.newInstance().auto_overflow_y();
    if (index === 2){
      MyCommon.newInstance().hidden_overflow();
    }
    this.setState({current_index:index});
  }
  onMouseEnter (index){
    let data = this.state.modules;
    data.links[index].name = data.links[index].name_hover;
    this.setState({modules:data});
  }
  onMouseLeave (index){
    let data = this.state.modules;
    data.links[index].name = data.links[index].name_temp;
    this.setState({modules:data});
  }
  render(){
    return(
          <header className="header">
              <ul className="header_ul">
                  {this.state.modules.links.map((value,index) => {
                       const type = this.state.current_index === index ? "title-active": "";
                       return <li key={'header_' + index}>
                                <Link to={value.url} className={type}
                                        onClick={this.onClick.bind(this, index)}
                                        onMouseEnter={this.onMouseEnter.bind(this,index)}
                                        onMouseLeave={this.onMouseLeave.bind(this,index)}>{value.name}</Link>
                              </li>
                   })}
              </ul>
          </header>

    )
  }
}
