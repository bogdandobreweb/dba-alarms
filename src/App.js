import Directory from './components/directory/directory.component';

const App = () => {

const categories = [
  {
    id: 1,
    title: 'Surveillance Cameras',
    imageUrl: "https://i.pinimg.com/564x/5a/73/f4/5a73f4a195a28a9748575daf3f52d60b.jpg"
  },
  {
    id: 2,
    title: 'Alarms',
    imageUrl: "https://i.pinimg.com/564x/9d/54/27/9d542799df04d3552634e28b4ab35030.jpg"
  },
  {
    id: 3,
    title: 'Smart Homes',
    imageUrl: "https://i.pinimg.com/564x/c1/6b/73/c16b731666540e32f025ce7e47233df3.jpg"
  },
  {
    id: 4,
    title: 'Intercoms & Video Intercoms',
    imageUrl: "https://i.pinimg.com/564x/cc/55/f7/cc55f78c40a0a0062ca1003083b73ab0.jpg"
  },
  {
    id: 5,
    title: 'Photovoltaic Systems',
    imageUrl: "https://i.pinimg.com/564x/51/94/4d/51944d8e9fbfc0d18954fb9e0015e360.jpg"
  }
]

  return (
      <Directory categories = {categories} />
  );
}

export default App;
