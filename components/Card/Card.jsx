import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeProvider";

const Card = ({ header, children }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className="card">
      <div className="cardHeader">{header}</div>
      <div className="cardBody">{children}</div>
      <style jsx global>{`
        .card {
          display: grid;
          grid-template-rows: 30px 1fr;
          justify-items: stretch;
          min-height: 100px;
          margin: 10px;
        }

        .cardHeader {
          grid-row-start: 1;
          grid-row-end: 1;
          background: ${theme.colors.card.primary.header.background};
          color: ${theme.colors.card.primary.header.text};
        }

        .cardBody {
          grid-row-start: 2;
          grid-row-end: 2;
          background: ${theme.colors.card.primary.body.background};
          color: ${theme.colors.card.primary.body.text};
        }
      `}</style>
    </div>
  );
};

export default Card;
