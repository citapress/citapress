import React from 'react'
import { injectIntl } from "gatsby-plugin-intl"
import * as classes from "./genreSelector.module.scss"

export class genreSelector extends React.Component {
  state = {
    selected: 'genre',
    values: ["fiction", "short-stories", "novella", "poetry", "nonfiction", "essay", "manifesto", "autobiography"]
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    this.props.onChange('genre', event.target.value);
  }

  render() {
    return (
    <div className='main-select'>
      <select className={classes.select} onChange={this.handleChange} value={this.state.selected} name="selected">
        <option value="">{this.props.intl.formatMessage({ id: 'genre' })}</option>
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

export default injectIntl(genreSelector)