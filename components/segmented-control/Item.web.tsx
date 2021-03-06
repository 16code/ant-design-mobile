import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import touchableFeedback from '../_util/touchableFeedback';

class SegmentItem extends React.Component<any, any> {
  static defaultProps = {
    onClick() {},
    selected: false,
  };

  render() {
    const { label, prefixCls, selected, tintColor, enabled, touchFeedback } = this.props;
    const restProps = assign({}, this.props);
    ['prefixCls', 'label', 'selected', 'tintColor', 'enabled', 'touchFeedback', 'activeStyle'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-selected`]: selected,
    });
    const touchedCls = classNames({
      [`${prefixCls}-item-feedback`]: true,
      [`${prefixCls}-item-feedback-tintcolor`]: enabled && touchFeedback && !selected && !tintColor,
    });
    const touchFeedbackStyle = enabled && touchFeedback && !selected && tintColor ? {
      backgroundColor: tintColor,
    } : {};
    return (
      <div
        className={itemCls}
        style={{
          color: selected ? '#fff' : tintColor,
          backgroundColor: selected ? tintColor : '#fff',
          borderColor: tintColor,
        }}
        {...restProps}
      >
        <div className={touchedCls} style={touchFeedbackStyle}></div>
        {label}
      </div>
    );
  }
};

export default touchableFeedback<{
  prefixCls?: string;
  label?: string;
  enabled?: boolean;
  tintColor?: string;
  selected?: boolean;
  onClick?: (e: any) => void;
}>(SegmentItem);
