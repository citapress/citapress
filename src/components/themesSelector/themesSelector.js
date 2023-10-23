import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"
import * as classes from "./themesSelector.module.scss"

export class ThemesSelector extends React.Component {
  state = {
    selected: 'themes',
    values: ["motherhood", "LGBTQ+", "politics" ,"religion", "sex-romance", "suspense-gothic", "race", "science-technology", "first-person-narrator", "banned-book", "mental-health"]
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    this.props.onChange('theme', event.target.value);
  }

  render() {
    return (
    <div className='main-select'>
      <select className={classes.select} onChange={this.handleChange} value={this.state.selected} name="selected">
        <option value="">{this.props.intl.formatMessage({ id: 'themes' })}</option>
        {this.state.values.map((v, index) => (
          <option 
            key={index}
            value={v}>{this.props.intl.formatMessage({ id: v })}</option>
        ))}
      </select>
    </div>
    )
  }
}

export default injectIntl(ThemesSelector)