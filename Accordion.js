import React from 'react'

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = { currentSectionIndex: null, };

    renderButtons(section, index, currentSectionIndex) {
        return (
            <li className='Accordion-title' key={index}>
                <button
                    onClick={() => this.handleActiveSection(index)}
                >
                    {section.title}
                </button>
                {(currentSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }

    handleActiveSection = (sectionIndex) => {
        this.setState({ currentSectionIndex: sectionIndex })
    }

    render () {
        const { currentSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, index) =>
                    this.renderButtons(section, index, currentSectionIndex)
                )}
            </ul>
        )
    }
}
export default Accordion