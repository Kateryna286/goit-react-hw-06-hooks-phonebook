import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../Redux/contacts/contacts-actions';
import './Filter.css';

const Filter = ({ value, onChange }) => (
  <div className="filter">
    <label>
      <span className="filterText">Filter</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.updateFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
