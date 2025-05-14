import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://a-static.mlcdn.com.br/800x560/miniatura-batmovel-1-32-desenho-animado-jada-toys/ifcat/684829334/fa6a995ca77876ebdba3f0bc95d0cd54.jpeg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
