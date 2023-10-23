// list of books component
import React, { useState } from 'react';
import { injectIntl } from "gatsby-plugin-intl"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import * as classes from "./textConfiguration.module.scss";

const TextConfiguration = ({ onChangeSize, onChangeLine, onChangeSpacing, onChangeFontFamily, onChangeLineLength, intl }) => {

  const [text, setText] = useState(true);

  const handleChangeSize = value => {
    onChangeSize(value)
  }
  
  const handleChangeLine = value => {
    onChangeLine(value)
  }
  
  const handleChangeSpacing = value => {
    onChangeSpacing(value)
  }
  
  const fontChange = value => {
    onChangeFontFamily(value)
  }

  const handleLineLenght = value => {
    onChangeLineLength(value)
  }

  return (
    <div className={text ? classes.configBody : `${classes.configBody} ${classes.configBodyOpen}`}>
      <div className={classes.tools}>
        <label>{intl.formatMessage({id: 'Type size'})}:</label>
        <Slider name="font-size" min={10} max={40} defaultValue={19} onChange={handleChangeSize}/>
        <label>{intl.formatMessage({id: 'Line Height'})}:</label>
        <Slider name="line-heigth" min={15} max={50} defaultValue={26} onChange={handleChangeLine}/>
        <label>{intl.formatMessage({id: 'Letter spacing'})}:</label>
        <Slider min={-5} max={10} defaultValue={0} onChange={handleChangeSpacing}/>
        <label>{intl.formatMessage({id: 'Line length'})}:</label>
        <Slider min={0} max={100} defaultValue={90} onChange={handleLineLenght}/>
        <label>{intl.formatMessage({id: 'Font'})}:</label>
        <div className={classes.fonts}>
          <button onClick={(e) => fontChange('inter')} className="inter">A</button>
          <button onClick={(e) => fontChange('zilla')} className="zilla">A</button>
          <button onClick={(e) => fontChange('garamond')} className="garamond">A</button>
        </div>
      </div>
      <button class={classes.textConfigBtn} onClick={() => setText(!text)}>
        <img src="/img/cogwheel-outline.svg" width="25px" height="25px" alt="font-config" />
      </button>
    </div>
  )
}

export default injectIntl(TextConfiguration)