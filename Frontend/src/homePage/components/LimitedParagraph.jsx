import React from 'react'

class LimitedParagraph extends React.Component {
    render() {
        const {children, maxWords} = this.props
        const text = children.toString();
        const words = text.split('')
        const limitedText = words.slice(0, maxWords).join('');
        return <p>{limitedText}</p>
    }
}

export default LimitedParagraph