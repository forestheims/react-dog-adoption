import React from 'react';
import { Link } from 'react-router-dom';
import './DogDetail.css';

export default function DogDetail({ dog, showDetail = false }) {
  const getClassName = () => {
    if (showDetail) {
      return 'big-dog';
    } else {
      return '';
    }
  };

  const getAgeString = () => {
    if (dog.age === 0) {
      return 'less than one';
    } else {
      return `${dog.age}`;
    }
  };

  return (
    <div className="detail">
      <h3>Meet {dog.name}</h3>
      <img className={getClassName()} alt="dog" src={dog.image} />
      <p>
        {dog.name} is a(n) {getAgeString()} year old {dog.breed}
      </p>
      <br />
      {showDetail && <span>{dog.bio}</span>}
      {showDetail && (
        <Link to={`/dogs/${dog.id}/edit`} className="button">
          Edit
        </Link>
      )}
      {showDetail && <button className="button">Delete</button>}
    </div>
  );
}
