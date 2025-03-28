import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Community from './pages/Community';
import Contact from './pages/Contact';
import DiseaseDetection from './components/DiseaseDetection/DiseaseDetection';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.main`
  flex: 1;
`;

// AI Tools page component
const AITools = () => {
  return (
    <DiseaseDetection />
  );
};

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/business" element={<div>Business Page - Coming Soon</div>} />
            <Route path="/schemes" element={<div>Schemes Page - Coming Soon</div>} />
            <Route path="/aitools" element={<AITools />} />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
