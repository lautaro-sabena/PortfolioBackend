# Delta for UI (i18n + Theme)

## ADDED Requirements

### Requirement: Language Toggle

The system SHALL provide a language toggle in the header that allows switching between English and Spanish.

#### Scenario: Switch from English to Spanish

- GIVEN the site is loaded in English
- WHEN the user clicks the language toggle or selects "ES"
- THEN all translatable text on the page SHALL immediately update to Spanish
- AND the language preference SHALL be saved to localStorage

#### Scenario: Switch from Spanish to English

- GIVEN the site is loaded in Spanish
- WHEN the user clicks the language toggle or selects "EN"
- THEN all translatable text on the page SHALL immediately update to English
- AND the language preference SHALL be saved to localStorage

#### Scenario: Restore language on reload

- GIVEN the user previously selected a language
- WHEN the user reloads the page
- THEN the site SHALL display in the previously selected language
- AND the language preference SHALL be read from localStorage

#### Scenario: Default language on first visit

- GIVEN the user visits the site for the first time (no localStorage)
- WHEN the page loads
- THEN the site SHALL display in English by default

### Requirement: Theme Toggle

The system SHALL provide a theme toggle in the header that allows switching between Light and Dark modes.

#### Scenario: Switch from Light to Dark

- GIVEN the site is in Light mode
- WHEN the user clicks the theme toggle
- THEN the theme SHALL transition smoothly to Dark mode
- AND the color palette SHALL update to dark values
- AND the theme preference SHALL be saved to localStorage

#### Scenario: Switch from Dark to Light

- GIVEN the site is in Dark mode
- WHEN the user clicks the theme toggle
- THEN the theme SHALL transition smoothly to Light mode
- AND the color palette SHALL update to light values
- AND the theme preference SHALL be saved to localStorage

#### Scenario: Restore theme on reload

- GIVEN the user previously selected a theme
- WHEN the user reloads the page
- THEN the site SHALL display in the previously selected theme
- AND the theme preference SHALL be read from localStorage

#### Scenario: Smooth theme transition

- GIVEN the user is viewing the site
- WHEN the user toggles the theme
- THEN the transition SHALL complete within approximately 300ms
- AND there SHALL be no visible flash or flicker

### Requirement: Translation Structure

The system SHALL store translations in JSON files with the following structure:

- `src/data/translations/en.json` for English
- `src/data/translations/es.json` for Spanish

#### Scenario: Translation file exists

- GIVEN the translation files are properly structured
- WHEN the language toggle is activated
- THEN the system SHALL load the corresponding JSON file
- AND replace all translation keys with the appropriate values

### Requirement: Accessibility

The theme toggle button MUST include an `aria-label` attribute describing its action.

#### Scenario: Theme toggle accessibility

- GIVEN the theme toggle button is rendered
- WHEN a screen reader user focuses on the button
- THEN the aria-label SHALL announce "Toggle dark mode" or "Toggle light mode" depending on current state

### Requirement: Header Toggle Placement

The language and theme toggles SHALL be placed in the header without disrupting the existing layout.

#### Scenario: Toggles visible in header

- GIVEN the page is loaded
- WHEN the user views the header
- THEN both language (EN/ES) and theme (sun/moon) toggles SHALL be visible
- AND they SHALL not cause layout overflow or wrapping issues

## MODIFIED Requirements

### Requirement: Header Navigation

The header component SHALL now include language and theme toggles alongside existing navigation.

(Previously: Header contained only nav links and CV button)

#### Scenario: Header with toggles

- GIVEN the page is loaded
- WHEN the user views the header
- THEN they SHALL see: Logo/Name, Navigation Links, CV Button, GitHub, LinkedIn, Language Toggle, Theme Toggle
