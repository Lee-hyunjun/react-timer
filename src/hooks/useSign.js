import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { changeType } from '../modules/stores/sign';

export default function useSign() {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => ({
    type: state.sign.type,
  }), shallowEqual)

  const onChangeType = React.useCallback((type) => {
    dispatch(changeType(type));
  }, [dispatch])

  return {
    type,
    onChangeType,
  }
}
