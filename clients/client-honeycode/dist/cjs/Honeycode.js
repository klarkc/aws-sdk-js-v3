"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Honeycode = void 0;
const HoneycodeClient_1 = require("./HoneycodeClient");
const BatchCreateTableRowsCommand_1 = require("./commands/BatchCreateTableRowsCommand");
const BatchDeleteTableRowsCommand_1 = require("./commands/BatchDeleteTableRowsCommand");
const BatchUpdateTableRowsCommand_1 = require("./commands/BatchUpdateTableRowsCommand");
const BatchUpsertTableRowsCommand_1 = require("./commands/BatchUpsertTableRowsCommand");
const DescribeTableDataImportJobCommand_1 = require("./commands/DescribeTableDataImportJobCommand");
const GetScreenDataCommand_1 = require("./commands/GetScreenDataCommand");
const InvokeScreenAutomationCommand_1 = require("./commands/InvokeScreenAutomationCommand");
const ListTableColumnsCommand_1 = require("./commands/ListTableColumnsCommand");
const ListTableRowsCommand_1 = require("./commands/ListTableRowsCommand");
const ListTablesCommand_1 = require("./commands/ListTablesCommand");
const QueryTableRowsCommand_1 = require("./commands/QueryTableRowsCommand");
const StartTableDataImportJobCommand_1 = require("./commands/StartTableDataImportJobCommand");
/**
 * <p>
 *       Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without
 *       programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals,
 *       resources, and even your team.
 *     </p>
 */
class Honeycode extends HoneycodeClient_1.HoneycodeClient {
    batchCreateTableRows(args, optionsOrCb, cb) {
        const command = new BatchCreateTableRowsCommand_1.BatchCreateTableRowsCommand(args);
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
    batchDeleteTableRows(args, optionsOrCb, cb) {
        const command = new BatchDeleteTableRowsCommand_1.BatchDeleteTableRowsCommand(args);
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
    batchUpdateTableRows(args, optionsOrCb, cb) {
        const command = new BatchUpdateTableRowsCommand_1.BatchUpdateTableRowsCommand(args);
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
    batchUpsertTableRows(args, optionsOrCb, cb) {
        const command = new BatchUpsertTableRowsCommand_1.BatchUpsertTableRowsCommand(args);
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
    describeTableDataImportJob(args, optionsOrCb, cb) {
        const command = new DescribeTableDataImportJobCommand_1.DescribeTableDataImportJobCommand(args);
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
    getScreenData(args, optionsOrCb, cb) {
        const command = new GetScreenDataCommand_1.GetScreenDataCommand(args);
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
    invokeScreenAutomation(args, optionsOrCb, cb) {
        const command = new InvokeScreenAutomationCommand_1.InvokeScreenAutomationCommand(args);
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
    listTableColumns(args, optionsOrCb, cb) {
        const command = new ListTableColumnsCommand_1.ListTableColumnsCommand(args);
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
    listTableRows(args, optionsOrCb, cb) {
        const command = new ListTableRowsCommand_1.ListTableRowsCommand(args);
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
    listTables(args, optionsOrCb, cb) {
        const command = new ListTablesCommand_1.ListTablesCommand(args);
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
    queryTableRows(args, optionsOrCb, cb) {
        const command = new QueryTableRowsCommand_1.QueryTableRowsCommand(args);
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
    startTableDataImportJob(args, optionsOrCb, cb) {
        const command = new StartTableDataImportJobCommand_1.StartTableDataImportJobCommand(args);
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
exports.Honeycode = Honeycode;
//# sourceMappingURL=Honeycode.js.map