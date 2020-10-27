import React from 'react';
import './Display.css';
import './visor/Visor';
import Visor from './visor/Visor';
import Selector from './selector/Selector';
import selectors from '../display/selector/selectors';
import ProfilePic from '../../misc/profilePic/profilePic';

class Display extends React.Component{

    constructor(props){
        super(props);

        let {title, description, menu} = selectors[0].visor;

        this.state = {
            selectors:selectors,
            currentBox: selectors[0].title,
            visor:{title, description, menu},
            boxes: selectors.map((value)=>{return value.title}),
        }

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(currentBox, visor){
        return ()=>{this.setState({currentBox, visor})}
    }

    render(){
        let { colors } = this.props;
        let style = {
            border: `1px solid ${colors.border}`,
            color: colors.text02
        }

        let {selectors, currentBox, visor} = this.state;
        let selector = {colors, selectors, currentBox};
        let visorProp = {colors, visor};

        let picSTyle = {
            position:'absolute',
            top:80,
            right:85,
            height:90,
            filter:'sepia(50)'
        }
        return(
            <div className="display" {...{style}}>
                {/* <ProfilePic style={picSTyle}/> */}
                <Selector onHover = {this.handleHover} {...selector}/>
                <Visor {...visorProp}/>
            </div>
        )
    }
}


export default Display;