import NetworkProvider from "../components/Network/NetworkProvider";
import ThemeProvider, { ThemeContext } from "../components/Theme/ThemeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <NetworkProvider>
        <Component {...pageProps} />
        <ThemeContext.Consumer>
          {(theme) => (
            <style jsx global>{`
              .body {
                height: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: minmax(25px, 50px) 1fr;
                justify-items: stretch;
                background-color: ${theme.colors.neutral};
              }

              .navbar {
                grid-column-start: 1;
                grid-column-end: 4;
                background: ${theme.colors.primary.normal};
                color: ${theme.colors.primary.text.normal};
              }

              .sidebar {
                grid-column-start: 1;
                grid-column-end: 2;
                background: ${theme.colors.primary.light};
                color: ${theme.colors.primary.text.light};
              }

              .feed {
                grid-column-start: 2;
                grid-column-end: 4;
                background-color: ${theme.colors.neutral};
              }
            `}</style>
          )}
        </ThemeContext.Consumer>
      </NetworkProvider>
    </ThemeProvider>
  );
}

export default MyApp;
