import React from 'react';


export default class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    }
        
    state = {
        currentTabIndex: null,
    }
    
    handleClick(index) {
       this.setState({
           currentTabIndex: index,
       })
    }
    
    renderSection = () => {
        return this.props.sections.map((section, id) => {
            return (
                <li key={id}>
                    <button  onClick={() => this.handleClick(id)}>
                    {section.title}
                    </button>
                    {(this.state.currentTabIndex === id) && <p>
                        {section.content}
                    </p>}
                </li>
            )
        })
    }

    

    render(){
        return (
            <div>
                <ul>
                    <h1>Sections: </h1>
                    {this.renderSection()}
                </ul>
            </div>
        )
    }
}