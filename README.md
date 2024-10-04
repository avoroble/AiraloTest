# AiraloTest

## General comments
    Tools stack used for task implementation: JavaScript + Playwright.
    Tests are executed within GitHub Action CI workflow.
    Tests are executed within pre-generated Docker container to save execution time.
    
### Tools selection justification
    Interpreted programing language was chosen to avoid compilation step. This decreases compexity and save execution time.
    Playwright is free open-source tool with good community support and high performance.

## Instructions on how to run test
    Tests will run on push or pull request on branches main/master. The workflow will install all dependencies, install Playwright and then run the tests. The detailed configuration is stored in .github/workflows/playwright.yml.

    Test execution can be triggered manually from the GitHub "Actions" tab by selecting the last workflow run and clicking the "Re-run all jobs" button.

## Report
    An HTML report is generated in the "Artifacts" section when selecting a specific workflow run in the GitHub "Actions" tab.

## Tests
    Tests are stored in the /tests folder, which contains API and UI subfolders, in line with the scope defined in the coding task.

    UI test is implemented using Page Object Pattern to increase code mantainability and avoid code duplacation.
    Page Objecs are stored in /src/pages/.






