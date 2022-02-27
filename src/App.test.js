import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "./routes/routes-pages";
import { BrowserRouter } from "react-router-dom";
import { mockWindow } from "./helper/rtl";
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

  it("should render about after click on home button", () => {
    mockWindow();
    renderWithRouter(<Component />);
    const homeText = screen.getByRole("heading", { name: "Home page" });
    expect(homeText).toBeInTheDocument();

    const homeButton = screen.getByRole("button", {
      name: /click here to load page/i,
    });
    fireEvent.click(homeButton);

    expect(window.location.assign).toBeCalledWith("/about");
  });
});

// https://github.com/M-Media-Group/Covid-19-API/?ref=devresourc.es
