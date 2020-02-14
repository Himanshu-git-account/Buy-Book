import React, { Component } from 'react'
import Comic from '../../Asset/images/comic.jpg'
import Menu_item from '../Menu-item/Menu_item'
import './Directory.scss'

export default class Directory extends Component {
    constructor(){
        super()
        this.state = {
            sections : [{
                id: 1,
                name: 'COMICS',
                imageURL: 'https://i.ibb.co/D8jxZTp/comic.jpg'        
            },
            {
                id: 2,
                name: 'SCI-FI',
                imageURL: 'https://i.ibb.co/TqXhP7k/scifi.jpg'       
            },
            {
                id: 3,
                name: 'FICTIONAL',
                imageURL: 'https://i.ibb.co/TLZT9G1/fictional.jpg'       
            },
            {
                id: 4,
                name: 'AUTOBIOGRAPHY',
                imageURL: 'https://i.ibb.co/6FxLqdt/autobiography.jpg',
                size: 'large'      
            },
            {
                id: 5,
                name: 'EDUCATION',
                imageURL: 'https://i.ibb.co/Js7xZdp/educational.jpg',
                size: 'large'         
            }
        ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, name, imageURL,size})=>{
                    return <Menu_item key={id} title={name} imageURL={imageURL} size={size}/>
                })}
            </div>
        )
    }
}
