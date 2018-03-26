angular.module('app.controllers', [])

.controller('AppCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {
    	$(document).ready(function() {
            $('body').addClass('loaded');
            $('.button-collapse').sideNav({closeOnClick: true});
        });
    }])

.controller('homeCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {
    	$(document).ready(function() {
            $('body').addClass('loaded');
            var player = videojs('example-video');
            player.src({
              src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
              type: 'application/x-mpegURL'
            });
            // player.play();
        });
        var gauge;
        var gaugeOptions = {
            renderTo: 'gauge',
            minValue: 0,
            maxValue: 360,
            majorTicks: [
                "N",
                "NE",
                "E",
                "SE",
                "S",
                "SW",
                "W",
                "NW",
                "N"
            ],
            minorTicks: 22,
            ticksAngle: 360,
            startAngle: 180,
            strokeTicks: false,
            highlights: false,
            colorPlate: "#33a",
            colorMajorTicks: "#f5f5f5",
            colorMinorTicks: "#ddd",
            colorNumbers: "#ccc",
            colorNeedle: "rgba(240, 128, 128, 1)",
            colorNeedleEnd: "rgba(255, 160, 122, .9)",
            valueBox: true,
            valueTextShadow: false,
            colorCircleInner: "#fff",
            colorNeedleCircleOuter: "#ccc",
            needleCircleSize: 15,
            needleCircleOuter: false,
            animationRule: "linear",
            needleType: "line",
            needleStart: 75,
            needleEnd: 99,
            needleWidth: 3,
            borders: true,
            borderInnerWidth: 0,
            borderMiddleWidth: 0,
            borderOuterWidth: 10,
            colorBorderOuter: "#ccc",
            colorBorderOuterEnd: "#ccc",
            colorNeedleShadowDown: "#222",
            borderShadowWidth: 0,
            animationTarget: "plate",
            units: "ᵍ",
            title: "DIRECTION",
            fontTitleSize: 19,
            colorTitle: "#f5f5f5",
            animationDuration: 1500
        }

        $scope.drawGauge = function(value) {
          gaugeOptions.value = value;
          gauge = new RadialGauge(gaugeOptions).draw();
        }
        $scope.drawGauge((Math.random()*1000)%360)

        $scope.triggerVehicleMotion = function(direction) {
          switch (direction) {
            case 'fwd':
              Materialize.toast("Forward Fired!", 3000);
              // Handle Forward Motion Here
              break;

            case 'bck':
              Materialize.toast("Backwards Fired!", 3000);
              // Handle Backward Motion Here
              break;

            case 'left':
              Materialize.toast("Left Fired!", 3000);
              // Handle Left Turn Here
              break;

            case 'right':
              Materialize.toast("Right Fired!", 3000);
              // Handle Right Turn Here
              break;
            default:

          }
        }

        $scope.triggerCameraMotion = function(action) {
          switch (action) {
            case 'pan-left':
              Materialize.toast("Pan Left Fired!", 3000);
              // Handle Pan camera left here
              break;

            case 'pan-right':
              Materialize.toast("Pan Right Fired!", 3000);
              // Handle Pan camera right here
              break;

            case 'tilt-up':
              Materialize.toast("Tilt Up Fired!", 3000);
              // Handle Tilt camera up here
              break;

            case 'tilt-down':
              Materialize.toast("Tilt Down Fired!", 3000);
              // Handle Tilt camera down here
              break;
            default:

          }

        }
    }])

.controller('loginCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {
    	$(document).ready(function() {
            $('body').addClass('loaded');
        });
    }])
