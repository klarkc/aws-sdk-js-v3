import { __extends } from "tslib";
import { RDSDataClient } from "./RDSDataClient";
import { BatchExecuteStatementCommand, } from "./commands/BatchExecuteStatementCommand";
import { BeginTransactionCommand, } from "./commands/BeginTransactionCommand";
import { CommitTransactionCommand, } from "./commands/CommitTransactionCommand";
import { ExecuteSqlCommand } from "./commands/ExecuteSqlCommand";
import { ExecuteStatementCommand, } from "./commands/ExecuteStatementCommand";
import { RollbackTransactionCommand, } from "./commands/RollbackTransactionCommand";
/**
 * <fullname>Amazon RDS Data Service</fullname>
 *         <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora
 *             Serverless DB cluster. To run these statements, you work with the Data Service
 *             API.</p>
 *         <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora
 *                 Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
var RDSData = /** @class */ (function (_super) {
    __extends(RDSData, _super);
    function RDSData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RDSData.prototype.batchExecuteStatement = function (args, optionsOrCb, cb) {
        var command = new BatchExecuteStatementCommand(args);
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
    RDSData.prototype.beginTransaction = function (args, optionsOrCb, cb) {
        var command = new BeginTransactionCommand(args);
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
    RDSData.prototype.commitTransaction = function (args, optionsOrCb, cb) {
        var command = new CommitTransactionCommand(args);
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
    RDSData.prototype.executeSql = function (args, optionsOrCb, cb) {
        var command = new ExecuteSqlCommand(args);
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
    RDSData.prototype.executeStatement = function (args, optionsOrCb, cb) {
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
    RDSData.prototype.rollbackTransaction = function (args, optionsOrCb, cb) {
        var command = new RollbackTransactionCommand(args);
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
    return RDSData;
}(RDSDataClient));
export { RDSData };
//# sourceMappingURL=RDSData.js.map