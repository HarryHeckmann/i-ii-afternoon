import React, {Component} from 'react'
import Name from './Name'
import From from './From'
import FunFact from './FunFact'
import List from './List'
import New from './New'
import Header from './Header'


class Main extends Component {
    constructor(){
        super()
        this.state ={ 
            isNew: false,
            isEdit: true,
            index: 0,
            studentArray: [
                {
                  name:"Kevin",
                  from:"San Antonio",
                  funFact:"Has lived in Argentina",
                  cityOrCountry:"Country",
                  indoorsOrOutdoors:"Indoors",
                  travel: "Travel everyday",
                  topsOrSubway: "Top's",
                  dogOrCat:"Dog"
                },
                {
                  name: "Sabrina",
                  from: "NYC",
                  funFact: "Born in Bangladesh",
                  cityOrCountry: "City",
                  indoorsOrOutdoors: "Indoors",
                  travel: null,
                  topsOrSubway: "Subway",
                  dogOrCat: "Cats - can't have dogs"
                },
                {
                  name: "Samuel",
                  from: "Nigeria",
                  funFact: "He has been away from home since 10 boarding school",
                  cityOrCountry: "City",
                  indoorsOrOutdoors: " Indoors",
                  travel:"Everyday",
                  topsOrSubway: null,
                  dogOrCat:"Cat"
                }, 
                {
                  name:"Yousef",
                  from:"West Africa",
                  funfact:"born in a village",
                  cityOrCountry:"Lots of money in the city, otherwise country",
                  indoorsOrOutdoors:"Outside but not working",
                  travel: "yes",
                  topsOrSubway: "subway",
                  dogOrCat:"Cat"
                },
                {
                  name: "Uriel",
                  from: "Dallas, TX",
                  funFact: "Plays Soccer",
                  cityOrCountry: "Inbetween, rural",
                  indoorsOrOutdoors: "Outdoors",
                  travel: "Yes",
                  topsOrSubway: "Subway",
                  dogOrCat: null
                },
                {
                  name: "Jon",
                  from: "Washington State",
                  funFact: "Can count in Finnish (lived in Finland)",
                  cityOrCountry: "The midlands",
                  indoorsOrOutdoors: "indoors",
                  travel: "travel",
                  topsOrSubway: null,
                  dogOrCat: "cat"
                },
                {
                  name: 'Harry',
                  from: 'Denton',
                  funFact: 'Degree in music education',
                  cityOrCountry: 'Country but not too far from the city',
                  indoorsOrOutdoors: 'Outdoors for sure, yes definitely outdoors',
                  travel: 'Yes, for sure',
                  topsOrSubway: 'Tops sounds cool, subway is lame',
                  dogOrCat: '2 dogs'
                },
                {
                  name: "Blake",
                  from: "Springdale Arkansas",
                  funFact: "Blackbelt",
                  cityOrCountry: "Country",
                  indoorsOrOutdoors: "outdoors",
                  travel: "home",
                  topsOrSubway: "tops",
                  dogOrCat: "dog"
                },
                {
                  name: "Alec",
                  from: "Plano, TX",
                  funFact: "He is a musician",
                  cityOrCountry: "both",
                  indoorsOrOutdoors: null,
                  travel: "never leave home",
                  topsOrSubway: "subway",
                  dogOrCat: "dog"
                },
                {
                  name : "Candace",
                  from: "North Dallas",
                  funFact: "She can weld",
                  cityOrCountry: "Country",
                  indoorsOrOutdoors : "Outdoors",
                  travel: "travel every day",
                  topsOrSubway: "subway",
                  dogOrCat: "werewolf cat"
                },
                {
                  name: "Zaid",
                  from: "New Jersey",
                  funFact: "Plans to get engaged soon",
                  cityOrCountry: "City for now, country to retire",     
                  indoorsOrOutdoors: "Both, depends on mood",
                  travel: "new country everday",
                  topsOrSubway: null,
                  dogOrCat: "unfortunately, none at the moment" 
                },
                {
                  name: 'Dylan',
                  from: 'Round Rock',
                  funFact: 'Has been in drumline for 4 years',
                  cityOrCountry: 'Country',
                  indoorsOrOutdoors: 'Indoors',
                  travel: 'travel',
                  topsOrSubway: 'subway',
                  dogOrCat: 'both'
                  },
                {
                  name: "Caleb",
                  from:"Wisconsin",
                  funFact: "Has been to Asia",
                  cityOrCountry:"City",
                  indoorsOrOutdoors:"Indoors",
                  travel:"yes",
                  topsOrSubway:"subway",
                  dogOrCat:"Neghter"
                },
                {
                  name: "Sandra",
                  from: "San Diego, CA",
                  funFact: "Moved to 5 Difference Countries",
                  cityorCountry: "Both, depending on the weather",
                  indoorsOrOutdoors: null,
                  travel: "yes",
                  topsOrSubway: "Subway",
                  dogOrCat: "Dog"
                }
              ]
        }
        this.nextClick = this.nextClick.bind(this)
    }
    nextClick(){
        if(this.state.index < this.state.studentArray.length-1){
            let newIndex = this.state.index+1
            this.setState({index: newIndex})
            console.log(newIndex)
        }
        else{
            this.setState({index: 0})
        }
    }
    previousClick(){
        if(this.state.index > 0){
            let newIndex = this.state.index-1
            this.setState({index: newIndex})
            console.log(newIndex)
        }
        else{
            this.setState({index: 13})
        }
    }
    deleteClick(){
        if (this.state.studentArray.length === 1){
            if(alert('You killed everyone you monster!! Click OK to bring them back')){
                this.state.studentArray.splice(this.state.index, 1)
                this.setState({index: 0})
            }
            else {window.location.reload()};
        }
        else{
            this.state.studentArray.splice(this.state.index, 1)
            this.setState({index: 0})
        }
    }
    newClick(){
        // let isItNew = props.state.isNew
        this.setState({isNew: true})
        // console.log(isItNew)
    }
    render(){
        return(
            <div>
                <main>
                    <p1 id='counter'>{this.state.index+1} of {this.state.studentArray.length}</p1>
                    <Name 
                        index = {this.state.index}
                        array={this.state.studentArray}
                    />    
                    <From 
                        index = {this.state.index}
                        array={this.state.studentArray}
                    />
                    <FunFact 
                        index = {this.state.index}
                        array={this.state.studentArray}
                    />
                    <h4>Woud you rather...</h4>
                    <List
                        index = {this.state.index}
                        array={this.state.studentArray}
                    />
                </main>
                <div className='buttonBox'>
                    <a 
                        onClick={() => this.previousClick()}
                        id='previous' 
                        href='#'>{'< Previous'}</a>
                    <button id='edit'>Edit</button>
                    <button 
                        id='delete'
                        onClick={() => this.deleteClick()}
                        >Delete
                    </button>
                    <button 
                        id='new'
                        onClick={() => this.newClick()}
                        >New
                    </button>
                    <a 
                        onClick={() => this.nextClick()}
                        id='next' 
                        href='#'>{'> Next'}
                    </a>
                </div>
                {(!this.state.isNew) ? null : <New/>}
            </div>
        )
    }
    componentDidUpdate(){
        return(
          <div className="App">
              <Header/>
              <Main/>
          </div>
        )
      }
    
}

export default Main