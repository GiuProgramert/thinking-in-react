import { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import ProductsTable from './components/ProductsTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText:'',
      inStockOnly: false,
    }
  }
  
  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.isStockOnly}
        />
        <ProductsTable 
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.isStockOnly}
        />
      </div>
    )
  }
}

export default FilterableProductTable;
