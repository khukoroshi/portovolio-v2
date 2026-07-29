// import React from 'react'

const setivikatData = [
  {
    name: "MDL-504",
    url: "/testing1",
  },
  {
    name: "MDL-566",
    url: "/testing2",
  },
  {
    name: "MDL-567",
    url: "/testing3",
  },
  {
    name: "hacyiv8",
    url: "/testing4",
  },
  {
    name: "ALM-COURSE_4058918",
    url: "/testing5",
  },
  {
    name: "Introduction to Financial Literacy",
    url: "/testing6",
  },
];

const ImgCard = ({ imgData }) => {
  return (
    <div className="img-card">
      <img src={imgData.url} alt={imgData.name} />
    </div>
  );
};

const ContentSertivikat = () => {
  return (
    <div className="content-serti">
      <div className="cour-2" style="gap: 1em">
        {setivikatData.map((data) => (
          <ImgCard imgData={data} />
        ))}
      </div>
    </div>
  );
};

export default ContentSertivikat;
