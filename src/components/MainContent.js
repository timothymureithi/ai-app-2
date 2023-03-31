import React from 'react';

function MainContent() {
  return (
    <section className="hg-content">
         <main className="msger-chat">
    <div className="msg left-msg">
      <div
       className="msg-img"
       style={{backgroundImage: 'url(https://image.flaticon.com/icons/svg/327/327779.svg)'}}
      ></div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">Zuro</div>
        </div>

        <div className="msg-text">
          Hi, welcome to Zuro
        </div>
      </div>
    </div>

    <div className="msg right-msg">
      <div
       className="msg-img"
       style={{backgroundImage: 'url(https://image.flaticon.com/icons/svg/145/145867.svg)'}}
      ></div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">Timothy</div>
        </div>

        <div className="msg-text">
          Generate 10 intermediate JS questions
        </div>
      </div>
    </div>

    <div className="msg left-msg">
      <div
       className="msg-img"
       style={{backgroundImage: 'url(https://image.flaticon.com/icons/svg/327/327779.svg)'}}
      ></div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">Zuro</div>
        </div>

        <div className="msg-text">
          Hi, welcome to Zuro
        </div>
      </div>
    </div>

    <div className="msg right-msg">
      <div
       className="msg-img"
       style={{backgroundImage: 'url(https://image.flaticon.com/icons/svg/145/145867.svg)'}}
      ></div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">Timothy</div>
        </div>

        <div className="msg-text">
          Generate 10 intermediate JS questions
        </div>
      </div>
    </div>

    <div className="msg left-msg">
      <div
       className="msg-img"
       style={{backgroundImage: 'url(https://image.flaticon.com/icons/svg/327/327779.svg)'}}
      ></div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">Zuro</div>
        </div>

        <div className="msg-text">
          Hi, welcome to Zuro
        </div>
      </div>
    </div>

  

    

  </main>

  <form className="msger-inputarea">
    <input type="text" className="msger-input" placeholder="Enter your message..." />
    <button type="submit" className="msger-send-btn">Send</button>
  </form>
    </section>
  );
}

export default MainContent;
