import React, {useState} from 'react';
import {Button} from './components/Button'

export const App = () => {
  const [value, setValue] = useState(false);
  const handleClickValue = () => setValue(!value);

  return (
    <div>
      <Button content="Button" onClick={handleClickValue} isDisabled={value}/>
    </div>
  )
}


