import React from 'react'
import ReactDOM from 'react-dom';
import Calender from '../../components/calender/Calender';
require('../usercenter/usercenter.scss');
require('./exchange-query.scss');
class ExchangeQuery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: [2015,2,3],
            endDate: [2015,2,4],
            time: '',
            calenderBtn: false
        }
    }
    toggleCalender(){
        this.setState({
            calenderBtn: !this.state.calenderBtn
        })
    }

    calenderHandler(time){
        let temp = this.state;
        temp[time.label] = time.date;
        this.setState(temp);
    }
    
    showCalender(flag){
        this.state.time = {
            label: flag,
            date: this.state[flag]
        }
        this.toggleCalender();
    }
    render(){

        return(
            <div>
                <section className="query-cont">
                    <div className="form-row">
                        <div className="select-date"><div className="select" onClick={() => this.showCalender('startDate')}>{this.state.startDate.join('/')}</div></div>
                        <div className="icon-and">至</div>
                        <div className="select-date"><div className="select"  onClick={() => this.showCalender('endDate')}>{this.state.endDate.join('/')}</div></div>
                        <div className="query-btn">
                            <a href="" className="small-bor-btn small-bor-btn-large">查询</a>
                        </div>
                    </div>
                    <div className="query-total">
                        <p>共计20张券，兑换金额<em className="c-red">40.00</em>元</p>
                    </div>
                </section>
                <section>
                    <dl className="exchange-list">
                        <dt className="column-box">
                            <div>兑换码</div>
                            <div>管理员</div>
                            <div>兑换金额</div>
                        </dt>
                        <dd className="column-box">
                            <div>
                            1234-4567-6789
                            </div>
                            <div>猴赛雷</div>
                            <div className="operation">
                                <em className="c-red">40.00</em>
                            </div>
                        </dd>
                        <dd className="column-box">
                            <div>
                            1234-4567-6789
                            </div>
                            <div>猴赛雷</div>
                            <div className="operation">
                                <em className="c-red">40.00</em>
                            </div>
                        </dd>
                    </dl>

                </section>
                {this.state.calenderBtn ? <Calender callback={(time) => this.calenderHandler(time)} closeHandler={() => this.toggleCalender()} time={this.state.time} /> : null}
            </div>

            )
    }
}
export default ExchangeQuery;