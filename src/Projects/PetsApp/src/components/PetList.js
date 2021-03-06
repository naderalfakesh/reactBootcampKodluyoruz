import React from 'react';
import {Pet} from "../components";
import {getPets} from "../constants";
import {stringContains} from "../helpers";


class PetList extends React.Component{
    breed;
    constructor(props){
        super(props);
        this.state = {
            _pets: [],
            pets: [],
            yukleniyor: true
        }
    }

    componentDidMount() {
        getPets().then((data) => {
            this.setState({
                _pets: data,
                pets: data,
                yukleniyor: false
            })
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.activeFilter !== this.props.activeFilter){
            this.filterPets();
        }
        if(prevProps.searchValue !== this.props.searchValue){
            this.filterPets();
        }
    }

    filterPets = () => {
        if(!this.props.activeFilter){
            this.setState({
                pets: this.state._pets.filter((pet) => {
                    return stringContains(pet.name, this.props.searchValue)
                })
            })
        }else{
            this.setState({
                pets: this.state._pets.filter((pet) => {
                    return pet.breed === this.props.activeFilter;
                }).filter((filteredPet) => {
                    return stringContains(filteredPet.name, this.props.searchValue)
                })
            })
        }
    }


    render(){
        const baslik = <h3 key="1">Gösterilen Pet Sayısı: {this.state.pets.length}</h3>;
        const Yukleniyor = <div key="2" className="row">Yukleniyor</div>;
        const EmptyPets = <div key="3" className="row">Bulunamadı</div>;
    const Pets = <div key="4" className="row">
            {
                this.state.pets.map((pet) => {
                    return <Pet key={Math.random()} {...pet} />
                })
            }
        </div>;
        
        if(this.state.yukleniyor){
            return <>{[baslik,Yukleniyor]}</>;
        }else if(this.state.pets.length === 0){
            return <>{[baslik,EmptyPets]}</>
        }else{
            return <>{[baslik,Pets]}</>;
        }
    }
}


export default PetList;
