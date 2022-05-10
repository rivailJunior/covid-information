/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./routes/routes-pages";
// import { mockWindow } from "./helper/rtl";
import HeaderAppBar from "./components/header/header";

afterEach(cleanup);

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const Component = () => (
  <>
    <HeaderAppBar />
    <App />
  </>
);

describe("Home", () => {
  it.each([
    [/Home/i, /Home page/i],
    [/About/i, /About page/i],
    [/Dashboard/i, /Dashboard page/i],
  ])(
    "after click on link %s should render right container %s",
    (link, container) => {
      renderWithRouter(<Component />);

      const homeText = screen.getByRole("heading", { name: "Home page" });
      expect(homeText).toBeInTheDocument();

      const pageLink = screen.getByRole("link", { name: link });
      fireEvent.click(pageLink);

      const textContainer = screen.getByRole("heading", { name: container });
      expect(textContainer).toBeInTheDocument();
    }
  );

  // it("should render about after click on home button", () => {
  //   mockWindow();
  //   renderWithRouter(<Component />);
  //   const homeText = screen.getByRole("heading", { name: "Home page" });
  //   expect(homeText).toBeInTheDocument();

  //   const homeButton = screen.getByRole("button", {
  //     name: /click here to load page/i,
  //   });
  //   fireEvent.click(homeButton);

  //   expect(window.location.assign).toBeCalledWith("/about");
  // });

  it("should render map properly", () => {
    const { container } = renderWithRouter(<Component />);
    const map = container.querySelector(".leaflet-container");
    expect(map).toBeInTheDocument();
    const zoomIn = screen.getByRole("button", {
      name: /zoom in/i,
    });

    const zoomOut = screen.getByRole("button", {
      name: /zoom out/i,
    });

    expect(zoomIn).toBeInTheDocument();
    expect(zoomOut).toBeInTheDocument();

    expect(screen.getByRole("presentation")).toHaveProperty(
      "src",
      expect.stringContaining(
        "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/13/4093/2724?access_token="
      )
    );
  });
});

// https://github.com/M-Media-Group/Covid-19-API/?ref=devresourc.es
