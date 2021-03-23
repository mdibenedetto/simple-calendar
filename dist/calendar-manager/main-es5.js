function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _core_components_calendar_event_calendar_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/components/calendar-event/calendar-event.component */
    "./src/app/core/components/calendar-event/calendar-event.component.ts");

    function AppComponent_option_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var month_r2 = ctx.$implicit;
        var index_r3 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", index_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", month_r2, " ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'calendar-manager';
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.selectedMonth = new Date().getMonth() + 1;
        this.selectedYear = new Date().getFullYear();
        this.dummyEvents = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createDummyEvents();
        }
      }, {
        key: "createDummyEvents",
        value: function createDummyEvents() {
          var year = 2021;
          var month = new Date().getMonth();

          for (var i = 0; i < 30; i += 8) {
            var day = i;
            var date = new Date(year, month, day);
            this.dummyEvents.push({
              date: date,
              description: "Event " + i
            });
          }
        }
      }, {
        key: "onMonthChange",
        value: function onMonthChange(e) {
          this.selectedMonth = e.currentTarget.selectedIndex;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 6,
      consts: [[1, "date-container"], ["name", "selMonth", 3, "ngModel", "ngModelChange"], ["selMonth", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "year"], [3, "year", "monthIndex", "events"], [3, "value"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_1_listener($event) {
            return ctx.selectedMonth = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_option_3_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "calendar-event", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMonth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.monthNames);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedYear);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("year", ctx.selectedYear)("monthIndex", ctx.selectedMonth)("events", ctx.dummyEvents);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _core_components_calendar_event_calendar_event_component__WEBPACK_IMPORTED_MODULE_3__["CalendarEventComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".date-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 268px;\n  margin-bottom: 10px;\n}\n.date-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 30px;\n  background-color: white;\n}\n.date-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.date-container[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  border: 1px solid;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQveF9kZXZzL19naXRodWIvQW5ndWxhcl9Qcm9qZWN0cy9wYWNrYWdlcy9jYWxlbmRhci1tYW5hZ2VyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0FDQUY7QURFRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDI2OHB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgJiA+ICoge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHNlbGVjdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLnllYXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiLmRhdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDI2OHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmRhdGUtY29udGFpbmVyID4gKiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZGF0ZS1jb250YWluZXIgc2VsZWN0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmRhdGUtY29udGFpbmVyIC55ZWFyIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_components_calendar_event_calendar_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/components/calendar-event/calendar-event.component */
    "./src/app/core/components/calendar-event/calendar-event.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _core_components_calendar_event_calendar_event_component__WEBPACK_IMPORTED_MODULE_3__["CalendarEventComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _core_components_calendar_event_calendar_event_component__WEBPACK_IMPORTED_MODULE_3__["CalendarEventComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/calendar-event/calendar-event.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/core/components/calendar-event/calendar-event.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CalendarEventComponent */

  /***/
  function srcAppCoreComponentsCalendarEventCalendarEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarEventComponent", function () {
      return CalendarEventComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_date_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/date-helpers */
    "./src/app/core/shared/date-helpers.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CalendarEventComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dayName_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dayName_r2, " ");
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        "prev-month": a0,
        "has-event": a1,
        today: a2
      };
    };

    function CalendarEventComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var day_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", day_r3.event == null ? null : day_r3.event.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, day_r3.isPrevMonth, !!day_r3.event, day_r3.isToday));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", day_r3.value, " ");
      }
    }

    var CalendarEventComponent = /*#__PURE__*/function () {
      function CalendarEventComponent() {
        _classCallCheck(this, CalendarEventComponent);

        this.calendarDays = [];
        this.weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
      }

      _createClass(CalendarEventComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.setCalendar();
        }
      }, {
        key: "setCalendar",
        value: function setCalendar() {
          var _this = this;

          this.calendarDays = [];
          var MONDAY = 1;
          var daysInMonth = Object(_shared_date_helpers__WEBPACK_IMPORTED_MODULE_1__["getDaysInMonth"])({
            month: this.monthIndex
          });
          var firstDayWeek = Object(_shared_date_helpers__WEBPACK_IMPORTED_MODULE_1__["getFirstDayOfWeek"])({
            month: this.monthIndex
          }); // build the previous month left days

          if (firstDayWeek > MONDAY) {
            debugger;
            var daysInPrevMont = Object(_shared_date_helpers__WEBPACK_IMPORTED_MODULE_1__["getDaysInMonth"])({
              month: this.monthIndex - 1
            });
            var startPrevMonth = daysInPrevMont - (firstDayWeek - 2);

            for (var value = startPrevMonth; value <= daysInPrevMont; value++) {
              this.calendarDays.push({
                value: value,
                isPrevMonth: true
              });
            }
          } // build the current month


          for (var dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {
            var day = {
              value: dayIndex,
              event: this.attachEvent(dayIndex)
            };
            this.calendarDays.push(day);
          } // set current day


          var calendarToday = this.calendarDays.find(function (d) {
            return Object(_shared_date_helpers__WEBPACK_IMPORTED_MODULE_1__["isToday"])({
              day: d.value,
              month: _this.monthIndex,
              year: _this.year
            });
          });
          calendarToday && (calendarToday.isToday = true);
        }
      }, {
        key: "attachEvent",
        value: function attachEvent(dayIndex) {
          var makeStringDate = function makeStringDate(d) {
            return "".concat(d.getFullYear(), "-").concat(d.getMonth(), "-").concat(d.getDay());
          };

          var strDateCalendar = makeStringDate(new Date(2021, this.monthIndex, dayIndex));
          var event = this.events.find(function (e) {
            var strDateEvent = makeStringDate(e.date);
            return strDateEvent === strDateCalendar;
          });
          return event;
        }
      }]);

      return CalendarEventComponent;
    }();

    CalendarEventComponent.ɵfac = function CalendarEventComponent_Factory(t) {
      return new (t || CalendarEventComponent)();
    };

    CalendarEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarEventComponent,
      selectors: [["calendar-event"]],
      inputs: {
        year: "year",
        monthIndex: "monthIndex",
        events: "events"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 9,
      vars: 5,
      consts: [[1, "calendar"], ["class", "day day-header", 4, "ngFor", "ngForOf"], ["class", "day", 3, "ngClass", "title", 4, "ngFor", "ngForOf"], [1, "day", "day-header"], [1, "day", 3, "ngClass", "title"]],
      template: function CalendarEventComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CalendarEventComponent_span_1_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CalendarEventComponent_span_2_Template, 2, 7, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dummy event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weekDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calendarDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("  ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.events), "\n");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]],
      styles: ["[_nghost-%COMP%] {\n  --column-conuter: 7;\n}\n\n.calendar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(var(--column-conuter), auto);\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  background-color: #fffeff;\n  padding: 10px;\n}\n\n.calendar[_ngcontent-%COMP%]   .day-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.calendar[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.calendar[_ngcontent-%COMP%]   .day.prev-month[_ngcontent-%COMP%] {\n  color: #cbcacc;\n}\n\n.calendar[_ngcontent-%COMP%]   .day.has-event[_ngcontent-%COMP%] {\n  background-color: #eaebf8;\n  border-radius: 50%;\n}\n\n.calendar[_ngcontent-%COMP%]   .day.today[_ngcontent-%COMP%] {\n  background-color: #1a73e8;\n  color: #fff;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQveF9kZXZzL19naXRodWIvQW5ndWxhcl9Qcm9qZWN0cy9wYWNrYWdlcy9jYWxlbmRhci1tYW5hZ2VyL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2NhbGVuZGFyLWV2ZW50L2NhbGVuZGFyLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvY2FsZW5kYXItZXZlbnQvY2FsZW5kYXItZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDBEQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVJO0VBQ0UsY0FBQTtBQ0FOOztBREdJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0ROOztBRElJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDRk47O0FET0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2NhbGVuZGFyLWV2ZW50L2NhbGVuZGFyLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWNvbHVtbi1jb251dGVyOiA3O1xufVxuXG4uY2FsZW5kYXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1jb2x1bW4tY29udXRlciksIGF1dG8pO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZmO1xuICBwYWRkaW5nOiAxMHB4O1xuXG4gIC5kYXktaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kYXkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYucHJldi1tb250aCB7XG4gICAgICBjb2xvcjogI2NiY2FjYztcbiAgICB9XG5cbiAgICAmLmhhcy1ldmVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYmY4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cblxuICAgICYudG9kYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzNlODtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iLCI6aG9zdCB7XG4gIC0tY29sdW1uLWNvbnV0ZXI6IDc7XG59XG5cbi5jYWxlbmRhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWNvbHVtbi1jb251dGVyKSwgYXV0byk7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZlZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2FsZW5kYXIgLmRheS1oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYWxlbmRhciAuZGF5IHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FsZW5kYXIgLmRheS5wcmV2LW1vbnRoIHtcbiAgY29sb3I6ICNjYmNhY2M7XG59XG4uY2FsZW5kYXIgLmRheS5oYXMtZXZlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYmY4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2FsZW5kYXIgLmRheS50b2RheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTczZTg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'calendar-event',
          templateUrl: 'calendar-event.component.html',
          styleUrls: ['calendar-event.component.scss']
        }]
      }], null, {
        year: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        monthIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/shared/date-helpers.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/shared/date-helpers.ts ***!
    \*********************************************/

  /*! exports provided: getDaysInMonth, getFirstDayOfWeek, isToday */

  /***/
  function srcAppCoreSharedDateHelpersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function () {
      return getDaysInMonth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFirstDayOfWeek", function () {
      return getFirstDayOfWeek;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isToday", function () {
      return isToday;
    });

    var currentYear = new Date().getFullYear();

    function getDaysInMonth(_ref) {
      var _ref$year = _ref.year,
          year = _ref$year === void 0 ? currentYear : _ref$year,
          month = _ref.month;
      return new Date(+year, +month + 1, 0).getDate();
    }

    function getFirstDayOfWeek(_ref2) {
      var _ref2$year = _ref2.year,
          year = _ref2$year === void 0 ? currentYear : _ref2$year,
          month = _ref2.month;
      return new Date(+year, +month, 1).getDay();
    }

    function isToday(_ref3) {
      var _ref3$year = _ref3.year,
          year = _ref3$year === void 0 ? currentYear : _ref3$year,
          month = _ref3.month,
          day = _ref3.day;
      var today = new Date();
      var dt = new Date(+year, +month, +day);
      return dt.getDate() === today.getDate() && dt.getMonth() === today.getMonth() && dt.getFullYear() === today.getFullYear();
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/Shared/x_devs/_github/Angular_Projects/packages/calendar-manager/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map