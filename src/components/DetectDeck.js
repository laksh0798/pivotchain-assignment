import React, { Component } from 'react'
import Card from './DetectCard'


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
                new_x = center.x - (300 * (middle_card_by_index - i))
                new_y = center.y;
            } else {
                new_x = center.x + (300 * (i - middle_card_by_index))

                new_y = center.y;

            }
            new_card.push(
                <Card
                    index={i}
                    title={cardData[i].title}
                    text={cardData[i].text}
                    x={new_x}
                    y={new_y}
                    handle_next={this.handle_next}
                />

            )
        }

        this.setState({
            cards: new_card
        })
    }
    handle_next = (index) => {
        if(!(Number(this.deck.children[3].id)===index)){
            return
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
            <div className="detectSlider">
                <div className="header">
                    Detect Potential risks in real time
                    <p>____</p>
                </div>
                <div className="detectsliderarea">
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
        title: "Automatic",
        text: "Number Plate Recognition"
    },
    {
        index: "02",
        title: "POI Identification",
        text: "(Face Recognition)"
    },
    {
        index: "03",
        title: "Object",
        text: "or Person Search"
    },
    {
        index: "04",
        title: "People",
        text: "this is text"
    },
    {
        index: "05",
        title: "Alert",
        text: "Alert when event occurs"
    },
]
const styles = {
    deck: {
        position: "absolute",
        left: "5%",
        transform: "translate(-50%,-50%)",
        width: "300px"
    }
}
export default Deck;