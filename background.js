'use strict'

const [themeValues, last] = (() => {
  const pastelColors = [
    Object.freeze('#FF7F7F'),
    Object.freeze('#FF837E'),
    Object.freeze('#FF877D'),
    Object.freeze('#FF8B7C'),
    Object.freeze('#FF8E7C'),
    Object.freeze('#FF927B'),
    Object.freeze('#FF967B'),
    Object.freeze('#FF9A7B'),
    Object.freeze('#FF9E7C'),
    Object.freeze('#FFA17C'),
    Object.freeze('#FFA57D'),
    Object.freeze('#FFA97D'),
    Object.freeze('#FFAD7E'),
    Object.freeze('#FFB080'),
    Object.freeze('#FFB481'),
    Object.freeze('#FFB880'),
    Object.freeze('#FFBD80'),
    Object.freeze('#FFC280'),
    Object.freeze('#FFC77F'),
    Object.freeze('#FFCB7F'),
    Object.freeze('#FFD080'),
    Object.freeze('#FFD580'),
    Object.freeze('#FFDA81'),
    Object.freeze('#FFE081'),
    Object.freeze('#FFE583'),
    Object.freeze('#FFEA84'),
    Object.freeze('#FFEF86'),
    Object.freeze('#FFF588'),
    Object.freeze('#FFFA8B'),
    Object.freeze('#FAFA89'),
    Object.freeze('#F4FB87'),
    Object.freeze('#EEFB85'),
    Object.freeze('#E8FC84'),
    Object.freeze('#E2FC83'),
    Object.freeze('#DBFC82'),
    Object.freeze('#D4FD81'),
    Object.freeze('#CDFD81'),
    Object.freeze('#C6FE81'),
    Object.freeze('#BEFE82'),
    Object.freeze('#B6FE82'),
    Object.freeze('#AEFE83'),
    Object.freeze('#A5FF84'),
    Object.freeze('#9CFF86'),
    Object.freeze('#87FF96'),
    Object.freeze('#73FEA6'),
    Object.freeze('#5DFDB6'),
    Object.freeze('#47FBC4'),
    Object.freeze('#31F9D2'),
    Object.freeze('#19F7DE'),
    Object.freeze('#05F4E8'),
    Object.freeze('#12F1F1'),
    Object.freeze('#2AEDF8'),
    Object.freeze('#40E9FD'),
    Object.freeze('#55E5FF'),
    Object.freeze('#68E1FF'),
    Object.freeze('#79DCFF'),
    Object.freeze('#89D8FF'),
    Object.freeze('#8BD6FF'),
    Object.freeze('#8ED5FF'),
    Object.freeze('#92D3FF'),
    Object.freeze('#97D1FF'),
    Object.freeze('#9CCFFF'),
    Object.freeze('#A2CDFF'),
    Object.freeze('#A9CAFF'),
    Object.freeze('#B0C8FF'),
    Object.freeze('#B7C5FF'),
    Object.freeze('#BEC2FF'),
    Object.freeze('#C6BFFF'),
    Object.freeze('#CEBCFF'),
    Object.freeze('#D5B9FF'),
    Object.freeze('#DDB6FF'),
    Object.freeze('#E3B1F9'),
    Object.freeze('#E9ACF2'),
    Object.freeze('#EEA7EB'),
    Object.freeze('#F3A2E3'),
    Object.freeze('#F79DDB'),
    Object.freeze('#FB98D2'),
    Object.freeze('#FE94C8'),
    Object.freeze('#FF90BE'),
    Object.freeze('#FF8CB4'),
    Object.freeze('#FF88AA'),
    Object.freeze('#FF859F'),
    Object.freeze('#FF8395'),
    Object.freeze('#FF818A')]

  const staticColors = (() => {
    const color464646 = Object.freeze('#464646')
    const color000000 = Object.freeze('#000000')
    const colorFFFFFF = Object.freeze('#FFFFFF')
    const color141414 = Object.freeze('#141414')

    return Object.freeze({
      button_background_active: color464646,
      button_background_hover: Object.freeze('#323232'),
      frame: color000000,
      frame_inactive: color000000,
      ntp_background: color000000,
      ntp_text: colorFFFFFF,
      popup: color000000,
      popup_highlight: color464646,
      sidebar: color000000,
      sidebar_highlight: color464646,
      tab_selected: color000000,
      toolbar: color000000,
      toolbar_bottom_separator: color141414,
      toolbar_field: color141414,
      toolbar_field_border: Object.freeze('#0A0A0A'),
      toolbar_field_focus: color141414,
      toolbar_field_highlight: color464646,
      toolbar_field_highlight_text: colorFFFFFF
    })
  })()

  const properties = Object.freeze({
    content_color_scheme: Object.freeze('dark')
  })

  const themeValues = Array(pastelColors.length).fill(null)

  for (let i = themeValues.length - 1; i > -1; i--) {
    const color = pastelColors.pop()

    themeValues[i] = Object.freeze({
      colors: Object.freeze(Object.assign({}, staticColors, Object.freeze({
        bookmark_text: color,
        icons: color,
        icons_attention: color,
        popup_border: color,
        popup_highlight_text: color,
        popup_text: color,
        sidebar_border: color,
        sidebar_highlight_text: color,
        sidebar_text: color,
        tab_background_text: color,
        tab_line: color,
        tab_loading: color,
        tab_text: color,
        toolbar_field_border_focus: color,
        toolbar_field_text: color,
        toolbar_field_text_focus: color,
        toolbar_top_separator: color,
        toolbar_vertical_separator: color
      }))),
      properties
    })
  }

  const last = Object.freeze(themeValues.length - 1)
  return [Object.freeze(themeValues), last]
})()

let index = 0

const setTheme = Object.freeze(() => {
  browser.theme.update(themeValues[index])
  index === last ? index = 0 : index++
  return undefined
})

setTheme()

browser.alarms.onAlarm.addListener(setTheme)
browser.alarms.create(Object.freeze('setTheme'), Object.freeze({ periodInMinutes: Object.freeze(0.0042) }))
