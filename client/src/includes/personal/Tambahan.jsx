// import React from "react";
import "./tambahan.css";
// import data hobby
import { hobbyData } from "../../data/database";

const Hobi = ({ hobby }) => {
  return (
    <li>
      {hobby.icon}
      <span>{hobby.text}</span>
    </li>
  );
};

// Diubah menjadi PascalCase (Tambahan)
const Tambahan = () => {
  return (
    <div id="personal" className="container">
      <section className="personal">
        <div className="hobi">
          <h1>Hobbies</h1>
          <p>
            Ketika aku tidak sedang coding, biasanya aku membaca novel, menonton
            film atau mendengarkan musik.
          </p>
          <ul>
            {hobbyData.map((data) => (
              <Hobi key={data.id} hobby={data} />
            ))}
          </ul>
        </div>
        <div className="goals">
          <h1>Goals</h1>
          <p>
            Tujuan ku adalah menjadi full-stack developer yang mampu membangun
            aplikasi web yang aman, dan game developer dengan game play yang
            menarik.
          </p>
          <br />
          <p>
            Untuk saat ini aku sedang fokus lebih mendalami fundamental
            JavaScript, Reactjs, dan Nodejs, dan juga berencana membangun sebuah
            website blog atau artikel dengan content yang ku minati.
          </p>
          <br />
          <p>
            Untuk game, aku akan memulainya dengan membuat Visual Novel
            menggunakan RenPy, aku juga sudah memikirkan sebuah konsep game
            sederhana, namun asetku terbatas 😓️.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tambahan;
