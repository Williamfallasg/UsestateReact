import React, { useState } from 'react';




function Semaforo() {
  const [color, setColor] = useState('red');

  
  function cambiarColor(nuevoColor) {
    setColor(nuevoColor);
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      
        <button onClick={() => cambiarColor('red')} style={{ backgroundColor: color === 'red' ? 'red' : 'gray', marginRight: '10px' }}>Color Rojo</button>
        <button onClick={() => cambiarColor('yellow')} style={{ backgroundColor: color === 'yellow' ? 'yellow' : 'gray', marginRight: '10px' }}>Color Amarillo</button>
        <button onClick={() => cambiarColor('green')} style={{ backgroundColor: color === 'green' ? 'green' : 'gray' }}>Color Verde</button>
      </div>
      

      <div style={{ width: '100px', height: '200px', border: '1px solid black', marginTop: '20px', position: 'relative' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: color, margin: 'auto', position: 'absolute', top: '20px', left: '10px', right: '10px' }}></div>
        <div style={{ width: '20px', height: '80px', backgroundColor: 'black', margin: 'auto', position: 'absolute', top: '110px', left: '40px' }}></div>
      </div>
    </div>
  );
}

export default Semaforo;