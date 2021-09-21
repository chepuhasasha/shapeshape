const styles = {
  themes: {
    dark: {
      background_0: '#1F1F1F',
      background_100: '#2C2C2C',
      background_200: '#393939',
      text_primary: '#F1F3F6',
      hover_0: '#1F1F1F',
      hover_100: '#393939',
      primary_0: '#18A0FB',
      primary_100: '#0B8FE8',
    },
    light: {
      background_0: '#F1F3F6',
      background_100: '#FFFFFF',
      background_200: '#393939',
      text_primary: '#2C2C2C',
      hover_0: '#DAEBF7',
      hover_100: 'rgba(24, 160, 251, 0.05)',
      primary_0: '#18A0FB',
      primary_100: '#0B8FE8',
    },
  },

  setTheme: (theme) => {
    const keys = Object.keys(styles.themes[theme])
    keys.forEach(key => {
      document.documentElement.style.setProperty(`--${key}`, styles.themes[theme][key])
    })
  },

  getTheme() {
    return Object.keys(this.themes)
  }
}

export default styles