import React from "react";
import "./product.css";

function Product() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">ZUMIDO</div>
        <ul className="nav-links">
          <li><a href="/product">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/cart">CART</a></li>
        </ul>
      </nav>

      <div className="content">
        <h1>Welcome to ZUMIDO</h1>
        <br></br>
      </div>

      <div className="card-container">

        <div className="card">
          <img src="public/mouse.jpeg" alt="Tech Image" className="card-img" />
          <div className="card-content">
            <h3 className="card-title">Gaming Mouse</h3>
            <p className="card-text">
              These high performance mice are built to give you added speed and precision,
              as well as additional mappable buttons that you can use to your advantage in game.
            </p>
            <a href="/cart" className="card-button">Read more →</a>
          </div>
        </div>

        <div className="card">
          <img src="public/gaming-keyboard.jpg" alt="Tech Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Gaming Keyboard</h3>
              <p className="card-text">
              A gaming keyboard is specifically designed to improve the gaming experience by offering features that enhance speed, precision, and comfort. 
              Unlike regular keyboards.
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public/gaming-headset.jpg" alt="Tech Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Gaming Headset</h3>
              <p className="card-text">
              In addition to stereo sound, usually offer surround sound through a 7.1 effect.
               This is achieved through signal processing and produces the sensation of having several built-in speakers.</p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public/monitor.jpeg" alt="Tech Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Gaming Monitor</h3>
              <p className="card-text">
              They feature fast refresh rates, low input lag,
               and large resolutions to provide the best graphics for your game.
               High refresh rate monitors with low input lag and high resolution.</p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\controller.avif" alt="Tech Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Gaming Controller</h3>
              <p className="card-text">
              A game controller, gaming controller, or simply controller,
               is an input device or input/output device used with video games or entertainment systems to provide input to a video game.</p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\Chair.jpg" alt="Tech Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Gaming Chair</h3>
              <p className="card-text">
              A restraint chair is a type of physical restraint that is used to force an individual 
              to remain seated in one place to prevent injury and harm to themselves or others.</p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\lap.jpg" alt="Tech Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Gaming Laptop</h3>
              <p className="card-text">
              A gaming laptop is a powerful portable computer designed specifically for playing online video games. 
              These laptops are designed to offer an immersive gaming experience 
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\pc.jpg" alt="Tech Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">Gaming Pc</h3>
              <p className="card-text">
              A gaming computer is a type of computer specifically designed to handle and deliver high-performance gaming experiences. These computers are equipped with powerful 
              processors. 
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\vr.jpeg" alt="Tech Image" className="card-img" />
            <div className="card-content">
              <h3 className="card-title">VR Headset</h3>
              <p className="card-text">
              A virtual reality headset (or VR headset) is a head-mounted device that uses 3D near-eye 
              displays and positional tracking to provide a virtual reality environment for the user
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\mic.jpeg" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">Gaming Microphone</h3>
              <p className="card-text">
              A gaming microphone is a specialized type of microphone designed for gamers to communicate clearly while playing games online. It allows you to talk to your
               teammates, opponents.
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\capture.jpeg" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">Capture Card</h3>
              <p className="card-text">
              They're widely used in gaming, streaming, and video production to capture video content 
              from one device and send it to another, usually a computer, for recording or streaming
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\pads.jpeg" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">Gaming Mouse Pad</h3>
              <p className="card-text">
              Gaming mouse pad provides a much more consistent and smooth surface. Some gamers prefer a hard surface vs. 
              this cloth surface. That's all based on personal preference.
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\lgb.jpg" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">LGB Light</h3>
              <p className="card-text">
              An RGB LED is an LED module that can produce almost 
              any color using these three primary additive colors: Red, Green and Blue
              any color using these three primary additive colors

              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\SDD.jpeg" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">External Hard Drive/SSD</h3>
              <p className="card-text">
              A portable SSD is a compact, external solid-state drive used for high-speed data storage and transfer. 
              External storage drives (external hard drives or external SSDs)
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\headset.webp" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">Headphones Stand</h3>
              <p className="card-text">
              By keeping your headphones on a stand, you prevent cable tangling, 
              knots, and kinks, which can distort audio signals and reduce sound clarity.
              t is typically worn on the head.
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\glasses.jpeg" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">Gaming Glasses</h3>
              <p className="card-text">
              If you're an avid gamer, you know the strain your eyes encounter the longer you stare at a screen; this is where gaming glasses come in handy.
               Gaming glasses use a lens to reduce eye strain.
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>


          <div className="card">
            <img src="public\cam.jpeg" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">Streaming Webcam</h3>
              <p className="card-text">
              They are primarily used in video telephony, live streaming and social media, and security. Webcams can be built-in computer hardware or peripheral devices,
               .
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>


          <div className="card">
            <img src="public\footPedal.webp" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">Gaming Foot Peda</h3>
              <p className="card-text">
              What is a foot pedal for gaming?
              Gaming pedals can launch attacks, reload/cycle weapons, take screenshots, or trigger powerful macros. 
              Foot pedals are also great for Body.
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

          <div className="card">
            <img src="public\router.jpg" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">Wifi Router</h3>
              <p className="card-text">
              Wireless routers are commonly found in homes -- they're the hardware devices that 
              Internet service providers use to connect you to their cable or xDSL Internet network.
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>


          <div className="card">
            <img src="public\earphones.jpeg" alt="Tech Image" className="card-img" />
            <div className="card-content">  
              <h3 className="card-title">Gaming Earphone</h3>
              <p className="card-text">
              Gaming headphones, in addition to stereo sound, usually offer
               surround sound through a 7.1 effect. This is achieved through signal processing.
               High-quality microphones for streaming or communication. 
              </p>
              <a href="/cart" className="card-button">Read more →</a>
            </div>
          </div>

      </div>



    </div>
  );
}

export default Product;
