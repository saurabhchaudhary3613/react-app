import React from 'react'
import PropTypes from 'prop-types'

class Modal extends React.PureComponent {
  onClose(e) {
    e.preventDefault()
    this.props.onClose()
  }
  render() {
     const {
            onClose, 
            isOpen, 
        } = this.props
        
      return isOpen ? (
          <div className='overlay'>
              <div className='popup'>
                <header className='score-header'>Your Score <a className='close' onClick={ (e) => this.onClose(e) }>&times;</a></header>

                <div className='content'>
                    <p className='total-score'>52</p>
                    <p className='right-wrong-answers'>10 Correct</p>
                    <p className='right-wrong-answers'>5 Correct</p>
                </div>
              </div>
       </div>
    ):
    null
  }
}
 Modal.propTypes = {
   onClose: PropTypes.func.isRequired,
   isOpen: PropTypes.bool.isRequired,
   header: PropTypes.string,
}

export default Modal;