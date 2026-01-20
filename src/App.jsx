import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';
import Projects from './pages/Projects';
import Links from './pages/Links';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
