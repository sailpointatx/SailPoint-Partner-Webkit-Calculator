"use strict";

// Define default variables
if (typeof defaultAppsCount == 'undefined') { var defaultAppsCount = 10; }
if (typeof defaultUsersCount == 'undefined') { var defaultUsersCount = 1500; }
if (typeof defaultIndustry == 'undefined') { var defaultIndustry = 1; } // Default industry here should match the default value selected in the form.

if (typeof colorProvisioning == 'undefined') { var colorProvisioning = "#753BBD"; }
var textProvisioning = "Access Provisioning";
var descProvisioning = "Speed provisioning with automated approvals based on user roles.";

if (typeof colorRequests == 'undefined') { var colorRequests = "#F2A900"; }
var textRequests = "Access Requests";
var descRequests = "Move to self-service for faster access to applications and data.";

if (typeof colorPasswordResets == 'undefined') { var colorPasswordResets = "#00B5E2"; }
var textPasswordResets = "Password Resets";
var descPasswordResets = "Empower users by shifting from IT helpdesk to self-service.";

if (typeof colorCertification == 'undefined') { var colorCertification = "#00B140"; }
var textCertification = "Access Certification";
var descCertification = "Automate access certification of all users — including bots.";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }
function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function itemCaptionActivate(color) {
    document.getElementById('caption').style.opacity = 1;
    document.getElementById('main-chart-label').style.opacity = 1;
    document.getElementById('main-chart-label-save').style.opacity = 1;
    document.getElementById('main-chart-label-save').style.color = color;
    document.getElementById('main-chart-label-value').style.opacity = 1;
    document.getElementById('main-chart-label-value').style.color = color;

    switch (color) {
        // Access Provisioning
        case colorProvisioning.toLowerCase():
            document.getElementById('caption').innerText = descProvisioning;
            break;

        // Access Requests
        case colorRequests.toLowerCase():
            document.getElementById('caption').innerText = descRequests;
            break;

        // Password Resets
        case colorPasswordResets.toLowerCase():
            document.getElementById('caption').innerText = descPasswordResets;
            break;

        // Access Certification
        case colorCertification.toLowerCase():
            document.getElementById('caption').innerText = descCertification;
            break;

        default:
    }
}

function am4themes_SailPointTheme(target) {
    if (_instanceof(target, am4core.ColorSet)) {
        target.list = [am4core.color(colorProvisioning.toLowerCase()), am4core.color(colorRequests.toLowerCase()), am4core.color(colorPasswordResets.toLowerCase()), am4core.color(colorCertification.toLowerCase())];
    }
}

var CalcROI = /*#__PURE__*/function () {
    function CalcROI() {
        _classCallCheck(this, CalcROI);

        this.appsCount = defaultAppsCount;
        this.usersCount = defaultUsersCount;
        this.industry = defaultIndustry; // Default industry here should match the default value selected in the form.
        // Because "selected" doesn't always work, for example, if the user chooses an industry and then reloads the page.

        document.getElementById("industry").selectedIndex = 0;
        this.calculate();
    }

    _createClass(CalcROI, [{
        key: "setAppsCount",
        value: function setAppsCount(apps) {
            this.appsCount = apps;
            this.calculate();
        }
    }, {
        key: "setUsersCount",
        value: function setUsersCount(users) {
            // Note, this value is rounded to the nearest 100 by the jQuery code calling this method.
            this.usersCount = users;
            this.calculate();
        }
    }, {
        key: "setIndustry",
        value: function setIndustry(industry) {
            this.industry = industry;
            this.calculate();
        }
    }, {
        key: "calculate",
        value: function calculate() {
            /* These rounded rates are "formatted" and give slightly different results, actual rates below...
            let rates = [
                [0, 0, 0, 0, 0],
                [48.68, 77.88, 58.41, 63.28, 5860000], // Banking
                [48.68, 77.88, 58.41, 63.28, 5200000], // Biotech
                [33.75, 50.63, 37.97, 42.19, 3875882], // Construction
                [41.38, 66.20, 49.65, 53.79, 4620000], // Consulting & Services
                [33.75, 50.63, 37.97, 42.19, 4770000], // Education
                [36.35, 54.52, 40.89, 45.43, 4320000], // Entertainment & Media
                [46.41, 78.53, 64.25, 62.47, 1290000], // Fed Government
                [41.38, 66.20, 49.65, 53.79, 5860000], // Finance
                [33.75, 50.63, 37.97, 42.19, 6450000], // Healthcare
                [46.24, 73.99, 55.49, 60.12, 3875882], // Insurance
                [34.40, 51.60, 38.70, 43.00, 5200000], // Manufacturing
                [23.37, 35.05, 26.29, 29.21, 1290000], // NPOs
                [34.07, 54.52, 40.89, 44.30, 5600000], // Oil & Gas & Energy
                [38.94, 62.31, 46.73, 50.63, 3875882], // Other
                [39.75, 63.61, 47.70, 51.68, 1840000], // Retail
                [43.20, 69.12, 51.84, 56.16, 5050000], // Software
                [31.15, 46.73, 35.05, 38.94, 3770000], // Transportation
                [33.75, 50.63, 37.97, 42.19, 3875882] // Utilities
            ]; */
            var rates = [[0, 0, 0, 0, 0], [48.6778846153846, 77.8846153846154, 58.4134615384616, 63.28125, 5860000], [48.6778846153846, 77.8846153846154, 58.4134615384616, 63.28125, 5200000], [33.75, 50.625, 37.96875, 42.1875, 3875882.35294118], [41.3762019230769, 66.2019230769231, 49.6514423076923, 53.7890625, 4620000], [33.75, 50.625, 37.96875, 42.1875, 4770000], [36.3461538461538, 54.5192307692308, 40.8894230769231, 45.4326923076923, 4320000], [46.40625, 78.5336538461539, 64.2548076923077, 62.4699519230769, 1290000], [41.3762019230769, 66.2019230769231, 49.6514423076923, 53.7890625, 5860000], [33.75, 50.625, 37.96875, 42.1875, 6450000], [46.2439903846154, 73.9903846153846, 55.4927884615385, 60.1171875, 3875882.35294118], [34.3990384615385, 51.5985576923077, 38.6989182692308, 42.9987980769231, 5200000], [23.3653846153846, 35.0480769230769, 26.2860576923077, 29.2067307692308, 1290000], [34.0745192307692, 54.5192307692308, 40.8894230769231, 44.296875, 5600000], [38.9423076923077, 62.3076923076923, 46.7307692307692, 50.625, 3875882.35294118], [39.7536057692308, 63.6057692307692, 47.7043269230769, 51.6796875, 1840000], [43.2016225961539, 69.1225961538462, 51.8419471153846, 56.162109375, 5050000], [31.1538461538462, 46.7307692307692, 35.0480769230769, 38.9423076923077, 3770000], [33.75, 50.625, 37.96875, 42.1875, 3875882.35294118]];
            var b21 = rates[this.industry][0]; // Helpdesk
            var b22 = rates[this.industry][1]; // Management
            // Note: order is flipped
            var b23 = rates[this.industry][3]; // Define/Approve
            var b24 = rates[this.industry][2]; // Business user
            var b25 = rates[this.industry][4]; // Breach Cost

            var modifier;

            switch (true) {
                case this.usersCount <= 2500:
                    modifier = .7;
                    break;

                case this.usersCount <= 5000:
                    modifier = 0.75;
                    break;

                case this.usersCount <= 7500:
                    modifier = 0.90;
                    break;

                case this.usersCount <= 10000:
                    modifier = 1.0;
                    break;
            }

            var riskReduction = .25 * modifier * b25; // Calculate User Productivity
            var passResetHours = this.usersCount * (this.appsCount / 4 * 10 / 60);
            var jmHours = 8 * (this.usersCount * 0.15 + this.usersCount * 0.075);
            var arw = this.usersCount * 4;
            var lostProductivity = (jmHours + arw + passResetHours) * b24 * 0.05; // Calculate "Certification Total"

            var cert1Rate = 1.1 * b24;
            var cert2Rate = b22;
            var cert3Rate = b21;
            var cert1Hrs = (0.7 + this.appsCount * 0.015) * 0.3 * (0.75 * this.usersCount);
            var cert2Hrs = (0.7 + this.appsCount * 0.015) * 0.5 * (0.75 * this.usersCount);
            var cert3Hrs = (0.7 + this.appsCount * 0.015) * 0.2 * (0.75 * this.usersCount);
            var mlCost1 = cert1Rate * cert1Hrs * 0.9;
            var mlCost2 = cert2Rate * cert2Hrs * 0.5;
            var mlCost3 = cert3Rate * cert3Hrs * 0.9;
            var certCost = mlCost1 + mlCost2 + mlCost3; // To get the total cost savings, we don't round this till the end.

            // LCM - Identify & Approve
            var lcm1Rate = b23;
            var lcm1Hrs = (5 + 2 * this.appsCount) * (0.375 * this.usersCount) / 60;
            var lcm1Cost = lcm1Rate * lcm1Hrs * 0.833; // Access Request

            var arRate = b23;
            var arHrs = (0.75 + 0.25 / 15 * this.appsCount) * this.usersCount * 10 / 60;
            var arCost = arRate * arHrs * 0.7; // LCM2 - Create, Modify, Delete Accounts & Entitlements

            var lcm2Rate = b21;
            var lcm2Hrs = (0.15 * this.usersCount * 0.85 * this.appsCount + 0.075 * this.usersCount * this.appsCount + 0.15 * this.usersCount * this.appsCount + this.usersCount) * 6 / 60;
            var lcm2Cost = lcm2Rate * lcm2Hrs * 0.9; // PW Reset

            var pwrRate = b21;
            var pwrHrs = this.usersCount * (this.appsCount / 4 * 10 / 60);
            var pwrCost = pwrRate * pwrHrs * 0.8;

            /* For testing purposes...
            jQuery("div#show-math2").html(
                "lcm1Cost: "+ lcm1Cost +"<br />"+
                "arCost: "+ arCost +"<br />"+
                "lcm2Cost: "+ lcm2Cost +"<br />"+
                "pwrCost: "+ pwrCost +"<br />"+
                "certCost: "+ certCost
            ); */

            var annualSavings = lcm1Cost + arCost + lcm2Cost + pwrCost + certCost;
            // jQuery("#lcm1Cost").html( Math.round(lcm1Cost).toLocaleString('en', {useGrouping:true}));
            // jQuery("#arCost").html( Math.round(arCost).toLocaleString('en', {useGrouping:true}));
            // jQuery("#lcm2Cost").html( Math.round(lcm2Cost).toLocaleString('en', {useGrouping:true}));
            // jQuery("#pwrCost").html( Math.round(pwrCost).toLocaleString('en', {useGrouping:true}));

            this.draw(riskReduction, lostProductivity, annualSavings); // Chart script

            am4core.ready(function () {
                // Themes begin
                am4core.useTheme(am4themes_animated);

                // Auto dispose of old charts
                am4core.options.autoDispose = true;

                var chart = am4core.create("chartdiv", am4charts.PieChart);
                chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

                chart.data = [{
                    laborType: textProvisioning,
                    value: Math.round(lcm2Cost).toLocaleString('en', {
                        useGrouping: true
                    }),
                    config: {
                        "isActive": true
                    }
                }, {
                    laborType: textRequests,
                    value: Math.round(lcm1Cost + arCost).toLocaleString('en', {
                        useGrouping: true
                    })
                }, {
                    laborType: textPasswordResets,
                    value: Math.round(pwrCost).toLocaleString('en', {
                        useGrouping: true
                    })
                }, {
                    laborType: textCertification,
                    value: Math.round(certCost).toLocaleString('en', {
                        useGrouping: true
                    })
                }];
                chart.radius = am4core.percent(80);
                chart.innerRadius = am4core.percent(60);
                chart.startAngle = 180;
                chart.endAngle = 360;
                chart.customLegend = document.getElementById('main-chart-label');

                var series = chart.series.push(new am4charts.PieSeries());
                series.dataFields.value = "value";
                series.dataFields.category = "laborType";
                series.slices.template.cornerRadius = 0;
                series.slices.template.innerCornerRadius = 0;
                series.slices.template.draggable = false;
                series.slices.template.inert = true;
                series.slices.template.showTooltipOn = false;
                series.labels.template.disabled = true;
                series.ticks.template.disabled = true;
                series.alignLabels = false;
                series.hiddenState.properties.startAngle = 90;
                series.hiddenState.properties.endAngle = 90;
                series.slices.template.configField = "config";
                series.slices.template.events.on("ready", function (ev) {
                    itemCaptionActivate(series.slices.values[0].fill.hex);
                    document.getElementById('main-chart-label-value').innerText = series.slices.values[0].dataItem.value.toLocaleString('en', {
                        useGrouping: true
                    });
                    chart.customLegend.innerText = series.slices.values[0].dataItem.category;
                });
                series.slices.template.events.on("over", function (ev) {
                    var series = ev.target.dataItem.component; // limit active slices to one

                    series.slices.each(function (item) {
                    if (item.isActive && item != ev.target) {
                        item.isActive = false;
                    }

                    ev.target.setState('active');
                    var activeItemColor = ev.target.dataItem.slice.fill.hex;
                    itemCaptionActivate(activeItemColor); // change active slice legend values

                    document.getElementById('main-chart-label-value').innerText = ev.target.dataItem.value.toLocaleString('en', {
                        useGrouping: true
                    });
                    chart.customLegend.innerText = ev.target.dataItem.properties.category;
                    });
                });
                // chart.legend = new am4charts.Legend();
            }); // end am4core.ready()
            // end chart script
        }
    }, {
        key: "draw",
        value: function draw(riskReduction, lostProductivity, annualSavings) {
            /* For testing purposes...
            jQuery("div#show-math").html(
                "Users: "+ this.usersCount +"<br />Apps: "+ this.appsCount +"<br />Industry: "+ this.industry +"<br /><br />"
            ); */
            var costSavingsTotal = Math.round(annualSavings).toLocaleString('en', {
                useGrouping: true
            });
            document.getElementById("cost-savings").innerText = costSavingsTotal;

            // var reducedRisk = Math.round(riskReduction).toLocaleString('en', {
            //     useGrouping: true
            // });
            // document.getElementById("reduced-risk").innerText = reducedRisk;

            // var userProd = Math.round(lostProductivity).toLocaleString('en', {
            //     useGrouping: true
            // });
            // document.getElementById("user-prod").innerText = userProd;
        }
    }]);

    return CalcROI;
}(); // CalcROI

jQuery(document).ready(function ($) {
    document.documentElement.setAttribute('data-useragent', navigator.userAgent);
    am4core.useTheme(am4themes_SailPointTheme);

    var c = new CalcROI();

    jQuery("#slider-users").slider({
        range: "max",
        min: 500,
        max: 10000,
        step: 100,
        value: c.usersCount,
        slide: function slide(event, ui) {
            jQuery("input#users").val(ui.value.toLocaleString('en', {
                    useGrouping: true
                }) // adds commas like 1,500
            );
            //c.setUsersCount(ui.value);
        }
    });
    jQuery("input#users").val(c.usersCount.toLocaleString('en', {
        useGrouping: true
    }));

    jQuery("#slider-apps").slider({
        range: "max",
        min: 5,
        max: 50,
        value: c.appsCount,
        slide: function slide(event, ui) {
            jQuery("input#apps").val(ui.value);
            //c.setAppsCount(ui.value);
        }
    });
    jQuery("input#apps").val(jQuery("#slider-apps").slider("value"));

    // jQuery("select#industry").on('change', function (e) {
    //     c.setIndustry(this.value);
    // });

    jQuery("#calculateSavings").on("click", function(event) {
        event.preventDefault();
        c.setUsersCount( parseInt( jQuery("input#users").val().replace(',','') ) );
        c.setAppsCount( jQuery("input#apps").val() );
        c.setIndustry( jQuery("select#industry").val() );
    });
});