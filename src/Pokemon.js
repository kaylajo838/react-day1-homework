import React, { Component } from "react";

export default class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemonSprite: "",
      pokemonName: "",
      pokemonAbility: "",
      pokemonBaseXP: "",
      pokemonAttackStat: "",
      pokemonHpStat: "",
      pokemonDefenseStat: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    this.getPokemon(name);
  };

  getPokemon = async (pokemon) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const data = await response.json();
    console.log(data);

    const pokeSprite = data.sprites.front_shiny;
    const pokeName = data.name;
    // captialize pokemon name
    const captializeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
    const pokeAbility = data.abilities[0].ability.name;
    // captialize ability name
    const capitalizeAbility =
      pokeAbility.charAt(0).toUpperCase() + pokeAbility.slice(1);
    const pokeBaseXP = data.base_experience;
    const pokeAttackBaseStat = data.stats[1].base_stat;
    const pokeHpBaseStat = data.stats[0].base_stat;
    const pokeDefenseBaseStat = data.stats[2].base_stat;

    this.setState({
      pokemonSprite: pokeSprite,
      pokemonName: captializeName,
      pokemonAbility: capitalizeAbility,
      pokemonBaseXP: pokeBaseXP,
      pokemonAttackStat: pokeAttackBaseStat,
      pokemonHpStat: pokeHpBaseStat,
      pokemonDefenseStat: pokeDefenseBaseStat,
    });
  };

  render() {
    return (
      <div className="body-style">
        <form name="form-data" id="form-data" onSubmit={this.handleSubmit}>
          <label htmlFor="poke-name">Pokemon Name</label>
          <input
            type="text"
            name="name"
            id="poke-name"
            placeholder="Enter Pokemon Name"
          />
          <button type="submit">Get Pokemon!</button>
        </form>

        <div className="card-container">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={`${this.state.pokemonSprite}`}
              className="card-img-top"
              alt="pokemon image"
            />
            <div className="card-body">
              <h5 className="card-title">{`${this.state.pokemonName}`}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Ability: {this.state.pokemonAbility}
              </li>
              <li className="list-group-item">
                Base XP: {this.state.pokemonBaseXP}
              </li>
              <li className="list-group-item">
                Attack Base Stat: {this.state.pokemonAttackStat}
              </li>
              <li className="list-group-item">
                HP Base Stat: {this.state.pokemonHpStat}
              </li>
              <li className="list-group-item">
                Defense Base Stat: {this.state.pokemonDefenseStat}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
