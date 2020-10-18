import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function Dropdowns(props) {
  let onDropdownClick = () => {
    console.log('a');
  };

  return (
    <DropdownButton id="dropdown-basic-button" title="sort">
      <Dropdown.Item onClick={() => props.onDropDown('date')}>
        sorting by date
      </Dropdown.Item>
      <Dropdown.Item onClick={() => props.onDropDown('rating')}>
        rating
      </Dropdown.Item>
      <Dropdown.Item onClick={() => props.onDropDown('viewCount')}>
        viewCount
      </Dropdown.Item>
      <Dropdown.Item onClick={() => props.onDropDown('flora芙蘿拉')}>
        flora芙蘿拉
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default Dropdowns;
