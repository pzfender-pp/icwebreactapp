import React from 'react';
import BackBtn from './BackBtn';
import Section5 from '../section/Section5';

import '../../style/subsection/CoffeeSection.css'

import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';
import img7 from '../../img/img7.jpg';
import img8 from '../../img/img8.jpg';

const CoffeeSection = () => {
  return (
    <React.Fragment>
      <section className="main">
        <BackBtn text="Coffee" />
        <div className="coffee-section">
          <div className="coffee-img">
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
          <h2>Heading 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            expedita, cum perferendis ad nisi deserunt quas ducimus eligendi!
            Minus molestias dolores a repellendus eveniet veritatis nihil
            ducimus neque fuga laudantium aliquid rerum sed rem doloremque
            deleniti voluptatum similique tempore quisquam voluptas repudiandae
            autem, distinctio nulla officia! Nisi ipsum quibusdam eligendi
            voluptates a exercitationem, repellat mollitia eaque deleniti quo
            nam dolorem.
          </p>
        </div>
        <div className="coffee-section">
          <img src={img7} alt="" />
          <h2>Heading 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eveniet
            dolores ut quae quam vitae reprehenderit? Impedit saepe deserunt,
            quos explicabo optio dignissimos quaerat vitae recusandae tempora id
            eaque possimus architecto, commodi totam libero facilis voluptatem
            accusantium veritatis asperiores a velit reprehenderit. Voluptates
            quis iste, omnis explicabo ipsam quisquam. Voluptas.
          </p>
        </div>
        <div className="coffee-section">
          <img src={img8} alt="" />
          <h2>Heading 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            voluptatum corporis aperiam sapiente dolorem quas laboriosam. Iure,
            et. Veritatis totam omnis unde! Porro, natus nostrum? Dicta
            reiciendis sunt saepe officiis quaerat repudiandae voluptatibus
            temporibus? Recusandae, dolores. Laudantium porro non dolore.
          </p>
        </div>
      </section>
      <Section5 />
    </React.Fragment>
  );
};

export default CoffeeSection;