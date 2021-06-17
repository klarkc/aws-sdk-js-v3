import { __extends } from "tslib";
import { RedshiftDataClient } from "./RedshiftDataClient";
import { CancelStatementCommand, } from "./commands/CancelStatementCommand";
import { DescribeStatementCommand, } from "./commands/DescribeStatementCommand";
import { DescribeTableCommand, } from "./commands/DescribeTableCommand";
import { ExecuteStatementCommand, } from "./commands/ExecuteStatementCommand";
import { GetStatementResultCommand, } from "./commands/GetStatementResultCommand";
import { ListDatabasesCommand, } from "./commands/ListDatabasesCommand";
import { ListSchemasCommand } from "./commands/ListSchemasCommand";
import { ListStatementsCommand, } from "./commands/ListStatementsCommand";
import { ListTablesCommand } from "./commands/ListTablesCommand";
/**
 * <p>You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You
 *       can run individual SQL statements, which are committed if the statement succeeds. </p>
 *          <p>For more information about the Amazon Redshift Data API, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
var RedshiftData = /** @class */ (function (_super) {
    __extends(RedshiftData, _super);
    function RedshiftData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedshiftData.prototype.cancelStatement = function (args, optionsOrCb, cb) {
        var command = new CancelStatementCommand(args);
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
    RedshiftData.prototype.describeStatement = function (args, optionsOrCb, cb) {
        var command = new DescribeStatementCommand(args);
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
    RedshiftData.prototype.describeTable = function (args, optionsOrCb, cb) {
        var command = new DescribeTableCommand(args);
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
    RedshiftData.prototype.executeStatement = function (args, optionsOrCb, cb) {
        var command = new ExecuteStatementCommand(args);
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
    RedshiftData.prototype.getStatementResult = function (args, optionsOrCb, cb) {
        var command = new GetStatementResultCommand(args);
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
    RedshiftData.prototype.listDatabases = function (args, optionsOrCb, cb) {
        var command = new ListDatabasesCommand(args);
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
    RedshiftData.prototype.listSchemas = function (args, optionsOrCb, cb) {
        var command = new ListSchemasCommand(args);
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
    RedshiftData.prototype.listStatements = function (args, optionsOrCb, cb) {
        var command = new ListStatementsCommand(args);
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
    RedshiftData.prototype.listTables = function (args, optionsOrCb, cb) {
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
    return RedshiftData;
}(RedshiftDataClient));
export { RedshiftData };
//# sourceMappingURL=RedshiftData.js.map