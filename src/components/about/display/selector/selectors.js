import React from 'react';
import tools from './info/tools';
import work from './info/work';
import education from './info/education';
import { papers, awards } from './info/papers-awards';
import Itemizer from '../../../misc/Itemizer/Itemizer';

function age(dob) { 
    const birth =  new Date(dob);
    let diff_ms = Date.now() - birth.getTime();
    let age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}


const selectors  = [
    {   
        title:'About Me',
        description:'', //'[Human] : [After All]',
        icon: <i class="fas fa-address-card"></i>,
        visor:{
            title: 'Welcome! My Name is Mariano L. Acosta',
            description: 
                        <>
                            <p style={{marginBottom:30}}>
                                Born in 1993, I'm a {age('08/13/1993')} years old Engineer from Argentina.
                                In 2018, I graduated from the <a href='https://www.fi.mdp.edu.ar/' target='_blank'>University of Mar del Plata </a> 
                                with an Engineering Degree in Electronics, which is equivalent to a Bachelors + Master degree.
                                Also, I had the opportunity to be an exchange student at <a href="https://vt.edu/" target='_blank'>Virginia Tech</a> (U.S)
                                 with a Fulbright Scholarship.
                            </p>
                            <p style={{marginBottom:30}}>
                                {`During my career, I've worked in a variety of fields, ranging from Avionics Systems, Power Electronics, Embedded Systems,
                                Machine Learning, Signal Processing and Full-Stack Development.` }
                            </p>
                            <p style={{marginBottom:30}}>
                                {`Recently, in 2020, I've decided to go all-in with Computer Science and Software Engineering.
                                I've been in love with computers and mathemathics since I was in kindergarden, so this career change felt only natural.` }
                            </p>
                        </>,
            menu:{
                isValid: false,
                content: undefined
            }
        }
    },
    {
        title:'Tools & Abilities',
        description:'', //'[Id Est] : [Polyglot]',
        icon: <i class="fas fa-laptop-code"></i>,
        visor:{
            title: 'Select one field:',
            description: undefined,
            menu:{
                isValid: true,
                content: tools
            }
        }
    },
    {
        title:'Education',
        description:'', //'[Shoulders] : [Giant]',
        icon: <i class="fas fa-graduation-cap"></i>,
        visor:{
            title: 'Aliqua occaecat est cillum',
            description:undefined,
            menu:{
                isValid: true,
                content: education
            }
        }
    },
    {
        title:'Work Experience',
        description:'', //'[Leave] : [Mark]',
        icon: <i class="fas fa-suitcase"></i>,
        visor:{
            title: `Places where I've Worked`,
            description:undefined,
            menu:{
                isValid: true,
                content: work
            }
        }
    },
    {
        title:'Papers & Awards',
        description:'', //[Work Harder] : [Make it Better]',
        icon: <i class="fas fa-award"></i>,
        visor:{
            title: 'Ipsum commodo tempor ea consectetur',
            description:<><h3>Papers:</h3><Itemizer items={papers}/><h3>Awards:</h3><Itemizer items={awards}/></>,
            menu:{
                isValid: false,
                content: undefined
            }
        }
    },
    {
        title:'Hobbies & Interests',
        description:'' ,//'[Soul Body] : [Ecstasy]',
        icon: <i class="fas fa-gamepad"></i>,
        visor:{
            title: 'Non sint ex ea ad',
            description:`Ex incididunt proident adipisicing magna consectetur Lorem id ipsum nostrud. Do duis id ut labore ipsum reprehenderit 
                          nulla reprehenderit ea elit commodo. Dolor eu minim Lorem ea nulla. Cupidatat laboris cillum est commodo cillum est 
                          id do ut ad reprehenderit. Magna eu est veniam veniam nisi tempor deserunt amet consectetur tempor elit. Irure ipsum 
                          aliqua voluptate voluptate esse Lorem fugiat labore ex. Lorem quis et sunt ullamco pariatur adipisicing reprehenderit 
                          dolor exercitation.
                          Ipsum enim amet do elit ullamco ut nisi sunt aliqua Lorem. Duis eu dolore ex reprehenderit. Ullamco adipisicing laborum 
                          qui cillum Lorem tempor magna eiusmod ullamco laboris consequat.
                          
                          `,
            menu:{
                isValid: false,
                content: undefined
            }
        }
    },

]

export default selectors;

/*
twitch
music production, electronics music and retro music
enjoy reading about diversed topics (list) good reads
keep learning with moocs
keep working in personal projects & ideas
games, audio plugins, emulators,

retro gaming, I practice Speedruns time to time


I mantain a Twitch account where I usually do stream about software development and casual gaming,

 produced Electronic Music since I was 14. I enjoy remixing populars song and 
*/