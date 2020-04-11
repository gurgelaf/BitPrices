const Css = () => (
  <style jsx>
    {`
      div {
        font-size: 30px;
        text-align: center;
      }

      h1 {
        color: #2e8fff;
        margin: 5px 15px;
      }

      p, span {
        color: #7e92a8;
        margin: 5px 25px;
      }

      a {
        color: #4297f5;
        text-decoration: none;
      }

      a:hover {
        color: #7ab9ff;
      }
      a:active {
        color: #478fde;
      }

      select option:first-child {
        color: #7e92a8;
      }

      select {
        color: #2e8fff;
        padding:15px 20%;
      }

      @media (max-width: 700px) {
        div {
            font-size: 25px;
          }
      }
      @media (max-width: 525px) {
        div {
            font-size: 20px;
          }
      }
    `}
  </style>
);

export default Css;