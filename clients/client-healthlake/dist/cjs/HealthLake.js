"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthLake = void 0;
const HealthLakeClient_1 = require("./HealthLakeClient");
const CreateFHIRDatastoreCommand_1 = require("./commands/CreateFHIRDatastoreCommand");
const DeleteFHIRDatastoreCommand_1 = require("./commands/DeleteFHIRDatastoreCommand");
const DescribeFHIRDatastoreCommand_1 = require("./commands/DescribeFHIRDatastoreCommand");
const DescribeFHIRExportJobCommand_1 = require("./commands/DescribeFHIRExportJobCommand");
const DescribeFHIRImportJobCommand_1 = require("./commands/DescribeFHIRImportJobCommand");
const ListFHIRDatastoresCommand_1 = require("./commands/ListFHIRDatastoresCommand");
const StartFHIRExportJobCommand_1 = require("./commands/StartFHIRExportJobCommand");
const StartFHIRImportJobCommand_1 = require("./commands/StartFHIRImportJobCommand");
/**
 * <p>Amazon HealthLake is a HIPAA eligibile service that allows customers to store,
 *          transform, query, and analyze their FHIR-formatted data in a consistent fashion in the cloud.</p>
 */
class HealthLake extends HealthLakeClient_1.HealthLakeClient {
    createFHIRDatastore(args, optionsOrCb, cb) {
        const command = new CreateFHIRDatastoreCommand_1.CreateFHIRDatastoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFHIRDatastore(args, optionsOrCb, cb) {
        const command = new DeleteFHIRDatastoreCommand_1.DeleteFHIRDatastoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFHIRDatastore(args, optionsOrCb, cb) {
        const command = new DescribeFHIRDatastoreCommand_1.DescribeFHIRDatastoreCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFHIRExportJob(args, optionsOrCb, cb) {
        const command = new DescribeFHIRExportJobCommand_1.DescribeFHIRExportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFHIRImportJob(args, optionsOrCb, cb) {
        const command = new DescribeFHIRImportJobCommand_1.DescribeFHIRImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFHIRDatastores(args, optionsOrCb, cb) {
        const command = new ListFHIRDatastoresCommand_1.ListFHIRDatastoresCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startFHIRExportJob(args, optionsOrCb, cb) {
        const command = new StartFHIRExportJobCommand_1.StartFHIRExportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startFHIRImportJob(args, optionsOrCb, cb) {
        const command = new StartFHIRImportJobCommand_1.StartFHIRImportJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.HealthLake = HealthLake;
//# sourceMappingURL=HealthLake.js.map