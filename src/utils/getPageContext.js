import { SheetsRegistry } from 'jss'
import {
  createMuiTheme,
  createStyles
} from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const createPageContext = () => {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createStyles()
  }
}

let pageContext

const getPageContext = () => {
  if (!process.browser) {
    return createPageContext()
  }

  if (!pageContext) {
    pageContext = createPageContext()
  }

  return pageContext
}

export default getPageContext