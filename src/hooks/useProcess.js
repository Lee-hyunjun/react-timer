import React from 'react';

export default function useProcess(value, setValue, maxValue) {
  const setStep = React.useCallback((val) => {
    setValue(val);
  }, [setValue])

  const onNext = React.useCallback(() => {
    setValue(Math.min(value + 1, maxValue));
  }, [value, setValue, maxValue])

  const onPrev = React.useCallback(() => {
    setValue(Math.max(value - 1, 1));
  }, [value, setValue])

  return {
    value,
    setStep,
    onNext,
    onPrev
  }
}
