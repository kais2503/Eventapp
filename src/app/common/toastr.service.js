"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ToastService = (function () {
    function ToastService() {
    }
    ToastService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    return ToastService;
}());
ToastService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ToastService);
exports.ToastService = ToastService;
//# sourceMappingURL=toastr.service.js.map