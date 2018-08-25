import React, {Component} from 'react'
import styles from  './index.css'
import CountrySelectOptionComponent from '../CountrySelectOptionComponent'

export class CountrySelectComponent extends Component {
  state = {
    ...this.props,
    items: this.props.items || [],
    placeholder: this.props.placeholder || 'Select country',
    selectedItem: this.props.selected || '',
    showItems: false,
  }

  _expand = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }

  _selectItem = (item, e) => {
    e.stopPropagation()
    this.setState({
      selectedItem: item,
      showItems: false,
    })
    return this.props.onSelect(item)
  }

  _renderOptions = (items) => {
    return items.map((item, i) => {
      return <CountrySelectOptionComponent key={i} onClick={this._selectItem} item={item} />
    })
  }

  render () {
    const {selectedItem, placeholder, showItems, items} = this.state
    return (
      <div onClick={this._expand} className={showItems ? `${styles.box} ${styles.boxOpened}`: styles.box}>
        <div className={styles.container}>
          {selectedItem ? <div id="selectedItem" className={styles.selectedItem}>
            { selectedItem.value }
          </div> : <div id="placeholder" className={`${styles.selectedItem} ${styles.placeholder}`}>
            { placeholder }
          </div>}
          <div className={styles.arrow}>
            <span className={showItems ? styles.arrowUp : styles.arrowDown} />
          </div>
        </div>
        <div
          className={styles.items}
          style={{display: showItems ? 'block' : 'none'}}
        >
          {this._renderOptions(items)}
        </div>
      </div>
    )
  }
}

export default CountrySelectComponent
