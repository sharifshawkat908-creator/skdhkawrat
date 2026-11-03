import { useState } from 'react';
import Navbar from './components/Navbar';
import RewardsHero from './components/rewards/RewardsHero';
import RewardsShowcase from './components/rewards/RewardsShowcase';
import ClaimModal from './components/rewards/ClaimModal';
import TrustSection from './components/rewards/TrustSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [modalReward, setModalReward] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openClaim = (rewardId) => {
    setModalReward(rewardId);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-casino-panel text-slate-200">
      <Navbar />
      <RewardsHero onClaim={openClaim} />
      <RewardsShowcase onClaim={openClaim} />
      <ClaimModal isOpen={modalOpen} rewardId={modalReward} onClose={() => setModalOpen(false)} />
      <TrustSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
