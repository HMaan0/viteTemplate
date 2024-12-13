import "./card.scss"

const Card = () => {
  return (<>
  <div className="cols">
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <p className="title">Programming</p>
          
        </div>

        <div className="backSide">
          <button className="title">JavaScript</button>
          <button className="title">PYTHON</button>
          <button className="title">C#</button>
          <p className="title">ASP.NET</p>
          <p className="title">.NET</p>
        </div>
      </div>
    </div>
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <p className="title">Frontend</p>
          
        </div>

        <div className="backSide">
          <p className="title">HTML</p>
          <p className="title">CSS</p>
          <button className="title">tailwind</button>
          <button className="title">React Js</button>
          <p className="title">Next Js</p>
        </div>
      </div>
    </div>
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <p className="title">Backend</p>
          
        </div>

        <div className="backSide">
          <button className="title">Node Js</button>
          <button className="title">Express Js</button>
          <p className="title">Next Auth</p>
        </div>
      </div>
    </div>
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <p className="title">Database</p>
          
        </div>

        <div className="backSide">
          <button className="title">MySQL</button>
          <button className="title">MongoDB</button>
        </div>
      </div>
    </div>
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <p className="title">DevOps</p>
          
        </div>

        <div className="backSide">
          <button className="title">Docker</button>
          <p className="title">Kubernetes</p>
          <button className="title">GIT</button>
          <p className="title">Azure</p>
          <p className="title">VM</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Card
