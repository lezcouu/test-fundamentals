function App() {
  const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Buenos Aires', 'Guadalajara'];

  const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
  };
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        background: 'black',
        color: '#fafafa',
        fontSize: '3rem',
        fontWeight: '600',
        lineHeight: '2em',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      className='App'
    >
      Soy App
    </div>
  );
}

export default App;
