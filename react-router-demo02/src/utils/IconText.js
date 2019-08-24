import React from 'react';
import { Icon } from 'antd';

const IconText = ({ type, text, onDeleteClick, itemId }) => {
    const onClick = () => {
        onDeleteClick(itemId);
    }
    return (
        <span onClick={onClick}>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
    )

};

export default IconText;