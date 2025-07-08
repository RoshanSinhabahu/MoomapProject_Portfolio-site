import Limitation from './Limitation';
import LoraInfo from './LoraInfo';

function Solution() {
  return (
    <section id="solution" className="py-5 solution-bg">
      <div className="container">
        <div className="row align-items-center">
          <Limitation />
          <LoraInfo />
        </div>
      </div>
    </section>
  );
}

export default Solution;
