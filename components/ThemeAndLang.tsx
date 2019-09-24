import React, { SyntheticEvent, FunctionComponent } from "react";
import styled from "styled-components";
import Control from "./Control";

const LangPanel = styled.div`
  background: rgba(0, 0, 0, 0.67);
  color: white;
  border-radius: 10px;
  text-align: center;
  select {
      font-size: 1.5rem;
      padding: 1rem;
      width: 100%;
  }
`;
export type LangPaneProps = {
  current_language: string;
  handleLanguageChange(e: SyntheticEvent): void;
};

export const LangPane: FunctionComponent<LangPaneProps> = ({
  current_language,
  handleLanguageChange
}: LangPaneProps) => {
  const currentLangs = {
    en: "English",
    te: "తెలుగు",
    hi: "हिंदी",
    ur: "اردو"
  };
  return (
    <Control position="topleft">
      <LangPanel>
        <form>
          <select onChange={handleLanguageChange}>
            {Object.entries(currentLangs).map(([key, value]) => (
              <option
                key={key}
                defaultValue="English"
                value={key}
              >
                {value}
              </option>
            ))}
          </select>
        </form>
      </LangPanel>
    </Control>
  );
};

const ThemePanel = styled.div`
//   transform: translateX(10rem);
  background: rgba(0, 0, 0, 0.67);
  color: white;
  border-radius: 10px;
  text-align: center;
  select {
      font-size: 1.5rem;
      padding: 1rem;
      width: 100%;
  }
`;

export type ThemePaneProps = {
  current_theme_name: string;
  handleThemeChange(e: SyntheticEvent): void;
};
export const ThemePane: FunctionComponent<ThemePaneProps> = ({
  current_theme_name,
  handleThemeChange
}: ThemePaneProps) => {
  return (
    <Control position="topleft">
      <ThemePanel>
        <form>
          <fieldset>
            <input
              type="radio"
              id="light"
              checked={current_theme_name === "light"}
              onChange={handleThemeChange}
            />
            <label htmlFor="light">light</label>
          </fieldset>
          <fieldset>
            <input
              type="radio"
              id="dark"
              checked={current_theme_name === "dark"}
              onChange={handleThemeChange}
            />
            <label htmlFor="dark">dark</label>
          </fieldset>
        </form>
      </ThemePanel>
    </Control>
  );
};
