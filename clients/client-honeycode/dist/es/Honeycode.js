import { __extends } from "tslib";
import { HoneycodeClient } from "./HoneycodeClient";
import { BatchCreateTableRowsCommand, } from "./commands/BatchCreateTableRowsCommand";
import { BatchDeleteTableRowsCommand, } from "./commands/BatchDeleteTableRowsCommand";
import { BatchUpdateTableRowsCommand, } from "./commands/BatchUpdateTableRowsCommand";
import { BatchUpsertTableRowsCommand, } from "./commands/BatchUpsertTableRowsCommand";
import { DescribeTableDataImportJobCommand, } from "./commands/DescribeTableDataImportJobCommand";
import { GetScreenDataCommand, } from "./commands/GetScreenDataCommand";
import { InvokeScreenAutomationCommand, } from "./commands/InvokeScreenAutomationCommand";
import { ListTableColumnsCommand, } from "./commands/ListTableColumnsCommand";
import { ListTableRowsCommand, } from "./commands/ListTableRowsCommand";
import { ListTablesCommand } from "./commands/ListTablesCommand";
import { QueryTableRowsCommand, } from "./commands/QueryTableRowsCommand";
import { StartTableDataImportJobCommand, } from "./commands/StartTableDataImportJobCommand";
/**
 * <p>
 *       Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without
 *       programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals,
 *       resources, and even your team.
 *     </p>
 */
var Honeycode = /** @class */ (function (_super) {
    __extends(Honeycode, _super);
    function Honeycode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Honeycode.prototype.batchCreateTableRows = function (args, optionsOrCb, cb) {
        var command = new BatchCreateTableRowsCommand(args);
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
    Honeycode.prototype.batchDeleteTableRows = function (args, optionsOrCb, cb) {
        var command = new BatchDeleteTableRowsCommand(args);
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
    Honeycode.prototype.batchUpdateTableRows = function (args, optionsOrCb, cb) {
        var command = new BatchUpdateTableRowsCommand(args);
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
    Honeycode.prototype.batchUpsertTableRows = function (args, optionsOrCb, cb) {
        var command = new BatchUpsertTableRowsCommand(args);
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
    Honeycode.prototype.describeTableDataImportJob = function (args, optionsOrCb, cb) {
        var command = new DescribeTableDataImportJobCommand(args);
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
    Honeycode.prototype.getScreenData = function (args, optionsOrCb, cb) {
        var command = new GetScreenDataCommand(args);
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
    Honeycode.prototype.invokeScreenAutomation = function (args, optionsOrCb, cb) {
        var command = new InvokeScreenAutomationCommand(args);
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
    Honeycode.prototype.listTableColumns = function (args, optionsOrCb, cb) {
        var command = new ListTableColumnsCommand(args);
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
    Honeycode.prototype.listTableRows = function (args, optionsOrCb, cb) {
        var command = new ListTableRowsCommand(args);
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
    Honeycode.prototype.listTables = function (args, optionsOrCb, cb) {
        var command = new ListTablesCommand(args);
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
    Honeycode.prototype.queryTableRows = function (args, optionsOrCb, cb) {
        var command = new QueryTableRowsCommand(args);
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
    Honeycode.prototype.startTableDataImportJob = function (args, optionsOrCb, cb) {
        var command = new StartTableDataImportJobCommand(args);
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
    return Honeycode;
}(HoneycodeClient));
export { Honeycode };
//# sourceMappingURL=Honeycode.js.map