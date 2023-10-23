import React from 'react'
import * as classes from "./changeLanguage.module.scss"
import { injectIntl, changeLocale } from "gatsby-plugin-intl"

export class changeLanguage extends React.Component {
  state = {
    language: this.props.intl.locale,
    where: this.props.where,
    languageName: {
      en: "English",
      es: "Spanish",
    },
    languageOriginal: {
      en: "English",
      es: "Español",
    },
    languages: [`en`, `es`]
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    changeLocale(event.target.value, this.state.where ? `/${this.state.where}` : null);
  }


  render() {
    return (
      <ul className={classes.languageSelector}>
        {this.state.languages.map((language, index) => (
          <li key={index}>
            <button key={index}
            className={this.state.language === language ? classes.active : null}
            onClick={() => changeLocale(language, this.state.where ? `/${this.state.where}` : null)}>
            {this.state.languageOriginal[language]}</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default injectIntl(changeLanguage)