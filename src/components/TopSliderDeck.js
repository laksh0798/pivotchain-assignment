import React, { Component } from 'react'
import Card from './TopSliderCard'


class Deck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: []
        }

        this.animation_in_progress = false;
    }

    componentDidMount = () => {
        let new_card = []
        let center = {
            x: parseFloat(this.deck.style.width) / 2,
            y: parseFloat(this.deck.style.height) / 2

        }
        // let total_number_of_cards = 9;
        let middle_card_by_index = 0
        let new_x = 0;
        let new_y = 0;
        let new_zIndex = 0;
        let new_scale = 1;
        for (let i = 0; i < cardData.length; i++) {
            if (i < middle_card_by_index) {
                new_x = center.x - (800 * (middle_card_by_index - i))
                new_y = center.y;

                new_x = new_x + ((200) * (middle_card_by_index - i))

                new_zIndex = i + 200

                new_scale = Math.pow(0.4, (middle_card_by_index - i))
            } else {
                new_x = center.x + (800 * (i - middle_card_by_index))

                new_y = center.y;
                new_x = new_x - ((200) * (i - middle_card_by_index))

                new_zIndex = i * (-1.0) *10
                new_scale = Math.pow(0.4, (i - middle_card_by_index))

            }
            new_card.push(
                <Card
                    id={i}
                    index={cardData[i].index}
                    title={cardData[i].title}
                    text={cardData[i].text}
                    x={new_x}
                    y={new_y}
                    z_index={i === middle_card_by_index ? 100 : new_zIndex}
                    opacity={i === middle_card_by_index ? 1 : 0.5}
                    scale={new_scale}
                    handle_next={this.handle_next}
                />

            )
        }

        this.setState({
            cards: new_card
        })
    }
    handle_next = (index=null) => {
        console.log(this.deck.children)
        if(!index){
            if(!(Number(this.deck.children[1].id)===index)){
                return
            }
        }
        if (!this.animation_in_progress) {
            this.animation_in_progress = true;
            let last_card_left = this.deck.children[this.deck.children.length - 1].style.left
            let last_card_zIndex = this.deck.children[this.deck.children.length - 1].style.zIndex
            let last_card_transform = this.deck.children[this.deck.children.length - 1].style.transform

            for (let i = this.deck.children.length - 1; i > 0; i--) {
                this.deck.children[i].style.transitionDuration = '1.0s'
                this.deck.children[i].style.left = this.deck.children[i - 1].style.left;
                this.deck.children[i].style.zIndex = this.deck.children[i - 1].style.zIndex;
                this.deck.children[i].style.transform = this.deck.children[i - 1].style.transform;
                this.deck.children[i].style.opacity = '1';
            }

            this.deck.children[0].style.transitionDuration = '0.1s';
            this.deck.children[0].style.transform = `translate(-50% -50%) scale(1)`

            setTimeout(() => {
                this.deck.children[0].style.transitionDuration = '0.0s';
                this.deck.children[0].style.left = last_card_left;
                this.deck.children[0].style.zIndex = last_card_zIndex;

                this.deck.appendChild(this.deck.children[0]);

                setTimeout(() => {
                    this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.2s';
                    this.deck.children[this.deck.children.length - 1].style.transform = last_card_transform;
                    this.animation_in_progress = false;
                }, 100)
            }, 700)
        }
        else {
            return
        }
    }
    handle_previous = () => {
        if (!this.animation_in_progress) {
            this.animation_in_progress = true;
            let first_card_left = this.deck.children[0].style.left
            let first_card_zIndex = this.deck.children[0].style.zIndex
            let first_card_transform = this.deck.children[0].style.transform

            for (let i = 0; i < this.deck.children.length - 1; i++) {
                this.deck.children[i].style.transitionDuration = '1.0s'
                this.deck.children[i].style.left = this.deck.children[i + 1].style.left;
                this.deck.children[i].style.zIndex = this.deck.children[i + 1].style.zIndex;
                this.deck.children[i].style.transform = this.deck.children[i + 1].style.transform;
            }

            this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.1s';
            this.deck.children[this.deck.children.length - 1].style.transform = `translate(-50% -50%) scale(0)`

            setTimeout(() => {
                this.deck.children[this.deck.children.length - 1].style.transitionDuration = '0.0s';
                this.deck.children[this.deck.children.length - 1].style.left = first_card_left;
                this.deck.children[this.deck.children.length - 1].style.zIndex = first_card_zIndex;

                this.deck.insertBefore(this.deck.children[this.deck.children.length - 1], this.deck.children[0]);

                setTimeout(() => {
                    this.deck.children[0].style.transitionDuration = '0.2s';
                    this.deck.children[0].style.transform = first_card_transform;
                    this.animation_in_progress = false;
                }, 100)
            }, 700)
        }
        else {
            return
        }
    }
    render() {
        return (
            <div className="topSlider">
                <div className="containerTitle">
                    <div className="question">
                        How can we Help?
                    </div>
                    <div className="answer">
                        Detect risks in real time
                    </div>
                </div>
                <div className="eventText">
                    Events
                </div>
                <div className="playbutton">
                    <i className="fa fa-caret-left" aria-hidden="true"></i>
                </div>
                <div className="arrowbuttons">
                    <button className="button" onClick={this.handle_previous}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                    <button className="button" onClick={this.handle_next}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </div>
                <div className="sliderarea">
                    <div ref={ref_id => this.deck = ref_id} style={styles.deck}>
                        {this.state.cards}
                    </div>
                </div>
            </div>
        )
    }
}

const cardData = [
    {
        index: "01",
        title: "Vandalism",
        text: " Raven works seamlessly with your existing CCTV cameras."
    },
    {
        index: "02",
        title: "Accidents",
        text: " Raven works seamlessly with your existing CCTV cameras."
    },
    {
        index: "03",
        title: "Something",
        text: " Raven works seamlessly with your existing CCTV cameras."
    },
    {
        index: "04",
        title: "Testing",
        text: " Raven works seamlessly with your existing CCTV cameras."
    },
    {
        index: "05",
        title: "fifth",
        text: " Raven works seamlessly with your existing CCTV cameras."
    },
]
const styles = {
    deck: {

        position: "absolute",
        top: "50%",
        left: "30%",
        transform: "translate(-50%,-50%)",
        height: "250px",
        width: "500px",
    }
}
export default Deck;