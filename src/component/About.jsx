import React from 'react';
import { FormattedMessage } from 'react-intl'
import RandomPicture from './RandomPicture'

const About = () => {
    return ( 
        <div>
            <h3>
                <FormattedMessage id='about' />
                <RandomPicture />
            </h3>
        </div>
     );
}
 
export default About;
