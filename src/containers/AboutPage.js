import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {
  Page,
  Toolbar,
  BackButton
} from 'react-onsenui'

import TRANSLATIONS from '../translations'

class RecoverWalletPage extends React.Component {
  componentDidMount() {
    window.ga.trackView('About Page')
  }

  renderToolbar () {
    const CUR_LANG = this.props.settings.language

    return (
      <Toolbar>
        <div className='left'>
          <BackButton onClick={() => this.props.navigator.popPage()}>Back</BackButton>
        </div>
        <div className='center'>
          { TRANSLATIONS[CUR_LANG].AboutPage.title }
        </div>
      </Toolbar>
    )
  }

  render () {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>

        <div style={{padding: '12px 12px 0 12px', textAlign: 'center'}}>
          <p>BZC Wallet v{VERSION}</p>
          <br/>
          <p>Author: Bitzec Team</p>
          <p>Made for BZC</p>
          <p>This is the binary digit zero-knowledge electronic currency &nbsp;
            <a
              href='#'
              onClick={() => window.open('https://bitzec.github.io', '_system')}
            >bitzec bzc</a>
          </p>
        </div>
      </Page>
    )
  }
}

RecoverWalletPage.propTypes = {
  settings: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(RecoverWalletPage)
