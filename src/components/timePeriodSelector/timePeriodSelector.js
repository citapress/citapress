import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"
import * as classes from "./timePeriodSelector.module.scss"

export class TimePeriodSelector extends React.Component {
  state = {
    period: 'Time Period',
    periods: [`19th`, `20th`, `victorian`, 'early-modern', 'modernist', 'contemporary']
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    this.props.onChange('time_period', event.target.value);
  }


  render() {
    return (
    <div className='main-select'>
      <select className={classes.select} onChange={this.handleChange} value={this.state.period} name="period">
        <option value="">{this.props.intl.formatMessage({ id: 'Time Period' })}</option>
        {this.state.periods.map((period, index) => (
          <option 
            key={index}
            value={period}>{this.props.intl.formatMessage({ id: period })}</option>
        ))}
      </select>
    </div>
    )
  }
}

export default injectIntl(TimePeriodSelector)