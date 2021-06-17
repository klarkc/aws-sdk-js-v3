import { __extends } from "tslib";
import { HealthLakeClient } from "./HealthLakeClient";
import { CreateFHIRDatastoreCommand, } from "./commands/CreateFHIRDatastoreCommand";
import { DeleteFHIRDatastoreCommand, } from "./commands/DeleteFHIRDatastoreCommand";
import { DescribeFHIRDatastoreCommand, } from "./commands/DescribeFHIRDatastoreCommand";
import { DescribeFHIRExportJobCommand, } from "./commands/DescribeFHIRExportJobCommand";
import { DescribeFHIRImportJobCommand, } from "./commands/DescribeFHIRImportJobCommand";
import { ListFHIRDatastoresCommand, } from "./commands/ListFHIRDatastoresCommand";
import { StartFHIRExportJobCommand, } from "./commands/StartFHIRExportJobCommand";
import { StartFHIRImportJobCommand, } from "./commands/StartFHIRImportJobCommand";
/**
 * <p>Amazon HealthLake is a HIPAA eligibile service that allows customers to store,
 *          transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud.</p>
 */
var HealthLake = /** @class */ (function (_super) {
    __extends(HealthLake, _super);
    function HealthLake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HealthLake.prototype.createFHIRDatastore = function (args, optionsOrCb, cb) {
        var command = new CreateFHIRDatastoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    HealthLake.prototype.deleteFHIRDatastore = function (args, optionsOrCb, cb) {
        var command = new DeleteFHIRDatastoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    HealthLake.prototype.describeFHIRDatastore = function (args, optionsOrCb, cb) {
        var command = new DescribeFHIRDatastoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    HealthLake.prototype.describeFHIRExportJob = function (args, optionsOrCb, cb) {
        var command = new DescribeFHIRExportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    HealthLake.prototype.describeFHIRImportJob = function (args, optionsOrCb, cb) {
        var command = new DescribeFHIRImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    HealthLake.prototype.listFHIRDatastores = function (args, optionsOrCb, cb) {
        var command = new ListFHIRDatastoresCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    HealthLake.prototype.startFHIRExportJob = function (args, optionsOrCb, cb) {
        var command = new StartFHIRExportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    HealthLake.prototype.startFHIRImportJob = function (args, optionsOrCb, cb) {
        var command = new StartFHIRImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return HealthLake;
}(HealthLakeClient));
export { HealthLake };
//# sourceMappingURL=HealthLake.js.map