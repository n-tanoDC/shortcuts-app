import React, {Component} from 'react';
import ShortcutCardContainer from "../card/ShortcutCardContainer";
import Loader from "react-loader-spinner";

const CARDS_DISPLAYED = 30;

class ShortcutGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardsDisplayed: CARDS_DISPLAYED
    }
  }
  
  handleClick() {
    this.setState({
      cardsDisplayed: this.state.cardsDisplayed + CARDS_DISPLAYED
    })
  }

  render() {
    const {shortcuts, loading} = this.props;
    const {cardsDisplayed} = this.state;
    const shortcutsJsx = shortcuts
      .map(shortcut => <ShortcutCardContainer key={shortcut.id} shortcut={shortcut}/>)
      .slice(0, cardsDisplayed);

      if (loading) {
        return (
          <Loader
            className="loader"
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />)
      }

    return (
      <div className="d-flex flex-column align-items-center">
        <div className="row row-cols-1 row-cols-md-2">
          {shortcutsJsx}
        </div>
        <div className="btn-group">
          <button disabled={cardsDisplayed >= shortcuts.length} onClick={() => this.handleClick()} className="btn btn-warning text-white">Voir Plus</button>
          <a className="btn btn-info" href="#">Haut de la page</a>
        </div>
      </div>
    );
  }
}

export default ShortcutGrid;
