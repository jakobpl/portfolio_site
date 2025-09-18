import LiquidGlass from 'liquid-glass-react';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const bgRef = useRef(null);
  const targetX = useRef(50);
  const targetY = useRef(50);
  const currentX = useRef(50);
  const currentY = useRef(50);
  let animationFrameId;

  useEffect(() => {
const animate = () => {
  currentX.current += (targetX.current - currentX.current) * 0.1; // 0.1 is easing factor; smaller = more delay
  currentY.current += (targetY.current - currentY.current) * 0.1;

  if (bgRef.current) {
    bgRef.current.style.backgroundPosition = `${currentX.current}% ${currentY.current}%`;
  }

  animationFrameId = requestAnimationFrame(animate);
};

animate(); // Start the animation loop

    const handleMouseMove = (e) => {
      if (!bgRef.current) return;

      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;

      const offsetX = (50 - xPercent) * 0.2;
      const offsetY = (50 - yPercent) * 0.2;

targetX.current = 50 - offsetX;
targetY.current = 50 - offsetY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
window.removeEventListener('mousemove', handleMouseMove);
cancelAnimationFrame(animationFrameId);
};
  }, []);

  return (
    <div className='bg-img' ref={bgRef}>

    
    <div className="App">


     

      {/* intro */}
        <LiquidGlass cornerRadius={32} padding={24} style={{position: 'fixed', top: "25%", left: "18%"}} overLight={true} elasticity={.25} blurAmount={.1}>
          <h2>User Info</h2>
          <div className='user-info-container'>
            <div className='flex-gap'>

            <div className="user-icon"><span>JN</span></div>
            <div className="user-info">
              <h2 className='name'>Jakob Norman</h2>
              <p className='occupation'>Student</p>
            </div>
            </div>

            <div className='contact'>
              <div className='contact-row'><span>Email:</span><span>z2039007@students.niu.edu</span></div>
              <div className='contact-row'><span>Location:</span><span>United States</span></div>
            </div>
          </div>
        </LiquidGlass>

      {/* history */}
        <LiquidGlass cornerRadius={32} style={{position: 'fixed', top: "20%", left: "66%"}} overLight={true} elasticity={.25}>
          <h2>history</h2>
          <div className='experience-container'>
            <ul className='history-ul'><li className='history-li'><span>comp sci @ niu</span><span>2024-present</span></li></ul>
            <ul className='history-ul'><li className='history-li'><span>living in europe</span><span>2021-2024</span></li></ul>
            <ul className='history-ul'><li className='history-li'><span>military</span><span>2017-2021</span></li></ul>
          </div>
        </LiquidGlass>

      {/* about */}
        <LiquidGlass cornerRadius={32} style={{position: 'fixed', top: "70%" , left: "23%"}} elasticity={.25}>
          <h2>About</h2>
          <div>
            <p>
              Former US military member looking to relocate to Doha, Qatar.
            </p>
            <p>
              Interests include: human nature, neurology, physics, aviation 
            </p>

         
          </div>
        </LiquidGlass>
      {/* stuff ive worked with */}
        <LiquidGlass cornerRadius={32} style={{position: 'fixed', top: "70%" , left: "70%"}} elasticity={.25} >
          <h4>stuff ive played with</h4>
          <div>
            <ul className='work-ul'>
              <li>react</li>
              <li>c++ (~600 <a href="https://leetcode.com/u/jdnev/" target="_blank">leets</a>), python</li>
              <li>node/express/mongodb</li>
              <li>google cloud</li>
              <li>ollama</li>
              <li>adobe photoshop, illustrator, premiere pro</li>
              <li>vmware</li>
              <li>linux (parrot os)</li>
              <li>raspberry pi, esp32, arduino ide</li>
              <li>xcode</li>
            </ul>
          </div>
        </LiquidGlass>

{/* buttons */}
        <LiquidGlass
        style={{position: 'fixed', top: "50%" , left: "8%"}} 
          onClick={() => console.log('Button clicked!')}
        >
          <span>linkedin</span>
        </LiquidGlass>

        {/* github */}
        <LiquidGlass
        style={{position: 'fixed', top: "50%" , left: "18%"}} 
          onClick={() => console.log('Button clicked!')}
        >
          <span>GitHub</span>
        </LiquidGlass>
       

    </div>
    </div>
  );
}

export default App;
