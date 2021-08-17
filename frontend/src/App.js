import React, { useState, useEffect } from 'react';

const App = () => {

  
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div>
      Scratch
    </div>
  )

}

export default App;
