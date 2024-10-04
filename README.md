# AiraloTest

## General comments
Tools stack used for task implementation: JavaScript + Playwright.
Tests are executed within GitHub Action CI workflow.
Tests are executed within pre-generated Docker container to save execution time.
    
### Tools selection justification
An interpreted programming language was chosen to avoid the compilation step, reducing complexity and saving execution time.
Playwright is a free, open-source tool with strong community support, high performance, and exceptional parallelization capabilities.

## Instructions on how to run test
Tests will run on push or pull request on branches main/master. The workflow will download Docker container with pre-installed environment, install dependencies and then run the tests. The detailed configuration is stored in .github/workflows/playwright.yml.

Test execution can be triggered manually from the GitHub "Actions" tab by selecting the last workflow run and clicking the "Re-run all jobs" button.

## Report
An HTML report is generated in the "Artifacts" section when selecting a specific workflow run in the GitHub "Actions" tab.

## Tests
Tests are stored in the /tests folder, which contains API and UI subfolders, in line with the scope defined in the coding task.

UI test is implemented using Page Object Pattern to increase code mantainability and avoid code duplacation.
Page Objecs are stored in /src/pages/.

## Implementation status
### UI
Structurally, the UI framework is in good shape. Future steps include extending Page Object coverage.

### API
Some data structures (like the request body) have been moved to a dedicated folder (/src/requestBody).
Necessary improvements: move endpoint constants and HTTP methods into separate files to further refine the framework structure. In the files where tests are stored, only more compact, high-level functions should be used.






API

