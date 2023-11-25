import React from "react";
import HomeScreen from "./HomeScreen";
import { render, fireEvent } from "@testing-library/react-native";


describe("HomeScreen", () => {
  it(`renders "Today's weather" as a text correctly`, () => {
    const { getByText } = render(<HomeScreen navigation={{}} />);

    const todaysWeatherElement = getByText("Today's weather");

    // Assert
    expect(todaysWeatherElement).toBeTruthy();
  });

  it('renders "loading...." you if the data NOT loaded', () => {
    const { getByText } = render(<HomeScreen navigation={{}} />);

    const outputElement = getByText("loading....", { exact: false });
    expect(outputElement).toBeTruthy();
  });

  it("renders weather data if request succeeds", async () => {
    const mockData = { key: "value" };

    // Mock the fetch function
    jest.spyOn(window, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(mockData), {
        status: 200,
        headers: { "Content-type": "application/json" },
      })
    );

    const { getByText } = await render(<HomeScreen navigation={{}} />);

    const outputElement =  getByText("Date");
    expect(outputElement).toBeTruthy();
  });

  it('does not render "loading...." you if the data loaded', async () => {
    const mockData = { key: "value" };

    // Mock the fetch function
    jest.spyOn(window, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(async () => [{mockData}]), {
        status: 200,
        headers: { "Content-type": "application/json" },
      })
    );

    const { queryByText } = render(<HomeScreen navigation={{}} />);
    // Assert
    const outputElement = await queryByText("loading....", {
      exact: false,
    });
    expect(outputElement).toBeNull();
    
  });
});
