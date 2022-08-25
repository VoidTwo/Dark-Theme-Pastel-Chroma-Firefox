function initialSetup () {
  let pastelColors = [
    '#FF7F7F',
    '#FF837E',
    '#FF877D',
    '#FF8B7C',
    '#FF8E7C',
    '#FF927B',
    '#FF967B',
    '#FF9A7B',
    '#FF9E7C',
    '#FFA17C',
    '#FFA57D',
    '#FFA97D',
    '#FFAD7E',
    '#FFB080',
    '#FFB481',
    '#FFB880',
    '#FFBD80',
    '#FFC280',
    '#FFC77F',
    '#FFCB7F',
    '#FFD080',
    '#FFD580',
    '#FFDA81',
    '#FFE081',
    '#FFE583',
    '#FFEA84',
    '#FFEF86',
    '#FFF588',
    '#FFFA8B',
    '#FAFA89',
    '#F4FB87',
    '#EEFB85',
    '#E8FC84',
    '#E2FC83',
    '#DBFC82',
    '#D4FD81',
    '#CDFD81',
    '#C6FE81',
    '#BEFE82',
    '#B6FE82',
    '#AEFE83',
    '#A5FF84',
    '#9CFF86',
    '#87FF96',
    '#73FEA6',
    '#5DFDB6',
    '#47FBC4',
    '#31F9D2',
    '#19F7DE',
    '#05F4E8',
    '#12F1F1',
    '#2AEDF8',
    '#40E9FD',
    '#55E5FF',
    '#68E1FF',
    '#79DCFF',
    '#89D8FF',
    '#8BD6FF',
    '#8ED5FF',
    '#92D3FF',
    '#97D1FF',
    '#9CCFFF',
    '#A2CDFF',
    '#A9CAFF',
    '#B0C8FF',
    '#B7C5FF',
    '#BEC2FF',
    '#C6BFFF',
    '#CEBCFF',
    '#D5B9FF',
    '#DDB6FF',
    '#E3B1F9',
    '#E9ACF2',
    '#EEA7EB',
    '#F3A2E3',
    '#F79DDB',
    '#FB98D2',
    '#FE94C8',
    '#FF90BE',
    '#FF8CB4',
    '#FF88AA',
    '#FF859F',
    '#FF8395',
    '#FF818A']

  const themeValues = Array(pastelColors.length).fill(null)

  for (let i = themeValues.length - 1; i > -1; i--) {
    let color = pastelColors.pop()

    themeValues[i] = {
      colors:
        {
          bookmark_text: color,
          button_background_active: '#464646',
          button_background_hover: '#323232',
          icons: color,
          icons_attention: color,
          frame: '#000000',
          frame_inactive: '#000000',
          ntp_background: '#000000',
          ntp_text: '#FFFFFF',
          popup: '#000000',
          popup_border: color,
          popup_highlight: '#464646',
          popup_highlight_text: color,
          popup_text: color,
          sidebar: '#000000',
          sidebar_border: color,
          sidebar_highlight: '#464646',
          sidebar_highlight_text: color,
          sidebar_text: color,
          tab_background_text: color,
          tab_line: color,
          tab_loading: color,
          tab_selected: '#000000',
          tab_text: color,
          toolbar: '#000000',
          toolbar_bottom_separator: '#141414',
          toolbar_field: '#141414',
          toolbar_field_border: '#0A0A0A',
          toolbar_field_border_focus: color,
          toolbar_field_focus: '#141414',
          toolbar_field_highlight: '#464646',
          toolbar_field_highlight_text: '#FFFFFF',
          toolbar_field_text: color,
          toolbar_field_text_focus: color,
          toolbar_top_separator: color,
          toolbar_vertical_separator: color
        },
      properties:
        {
          content_color_scheme: 'dark'
        }
    }

    color = null
  }

  pastelColors = null
  const last = themeValues.length - 1
  return [themeValues, last]
}

function setTheme () {
  browser.theme.update(themeValues[index])
  index === last ? index = 0 : index++
  return undefined
}

const [themeValues, last] = initialSetup()
Object.freeze(themeValues)
Object.freeze(last)

let index = 0

setTheme()

browser.alarms.onAlarm.addListener(setTheme)
browser.alarms.create('setTheme', { periodInMinutes: 0.0042 })
