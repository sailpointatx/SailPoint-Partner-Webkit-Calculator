# SailPoint Partner Webkit with Embeddable Identity Value Calculator

## Table of Contents
- <a href="#sailpoint-partner-webkit-with-identity-value-calculator">SailPoint Partner Webkit with Identity Value Calculator</a>
- <a href="#sailpoint-partner-webpage-content-template">SailPoint Partner Webpage Content Template</a>

&nbsp;  

## SailPoint Partner Webkit with Identity Value Calculator

The code within `/partner-webkit-calculator/index.html` is self contained within the DIV with an ID of `sp-partnerwebkit`. Besides the CSS & Javascript for the page and calculator, it requires the external libraries jQuery 3.5.1, jQuery UI 1.12, and amCharts 4.

Images such as the SailPoint logo and icons can be found in: `/partner-webkit-calculator/images/`.

External CSS files required include:
- `/partner-webkit-calculator/styles/sailpoint-webkit-calculator.min.css`
- `/partner-webkit-calculator/styles/jquery-ui.css`

Development versions of the CSS files (not minified) are located in `/partner-webkit-calculator/styles/development/`. These do not need to be included, they are only there in case you would like to do customizations to the existing styles. A separate css stylesheet can be created and loaded after the main styles for any type of customization.

External Javascript files required include:
- `/partner-webkit-calculator/scripts/sailpoint-calculator.js`
- `/partner-webkit-calculator/scripts/jquery.min.js`
- `/partner-webkit-calculator/scripts/jquery-ui.min.js`
- `/partner-webkit-calculator/scripts/amcharts4.js`

The calculator can be configured with the following variables to customize the default values for the form and colors used in the chart.
- *defaultAppsCount*     (default applications count, integer, range 5-50)
- *defaultUsersCount*    (default users count, integer, range 500-10000)
- *defaultIndustry*      (default industry, integer, range 1-18)
    - 1 - Banking
    - 2 - Biotechnology & Pharma
    - 3 - Construction & Building
    - 4 - Consulting & Services
    - 5 - Education
    - 6 - Entertainment & Media
    - 7 - Federal Government
    - 8 - Finance
    - 9 - Healthcare
    - 10 - Insurance
    - 11 - Manufacturing & Wholesale
    - 12 - NPO's & Associations
    - 13 - Oil & Gas & Energy
    - 14 - Other
    - 15 - Retail & Consumer
    - 16 - Software/Internet/Technology
    - 17 - Transportation
    - 18 - Utilities
- *colorProvisioning*    (provisioning chart color, hex code)
- *colorRequests*        (access requests chart color, hex code)
- *colorPasswordResets*  (password resets chart color, hex code)
- *colorCertification*   (certifications chart color, hex code)

&nbsp;  

## SailPoint Partner Webpage Content Template

We have provided the same content that is in the HTML documents in Word document form. They also include image assets and recommended SEO Meta Data for the webpage. We have several versions to choose from, depending on the region of the partner.

- `SailPoint Partner Webpage Content Template_021721.docx` - Americas based Partner
- `SailPoint Partner Webpage Content Template_021721_QueensEnglish.docx` - EMEA based Partner