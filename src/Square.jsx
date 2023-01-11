import React from "react";

const Square = ({
  index,
  squareValue,
  squares,
  setSquares,
  player,
  setPlayer,
}) => {
  const handleClick = () => {
    if (!squareValue) {
      if (player) {
        squares.splice(index, 1, "X");
        setSquares(squares);
        setPlayer(!player);
      } else {
        squares.splice(index, 1, "O");
        setSquares(squares);
        setPlayer(!player);
      }
    }
  };
  return (
    <div className="square" onClick={handleClick}>
      {squareValue === "O" ? (
        <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" />
      ) : (
        squareValue
      )}
    </div>
  );
};

export default Square;
