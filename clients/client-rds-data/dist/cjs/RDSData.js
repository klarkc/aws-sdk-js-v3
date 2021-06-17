"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RDSData = void 0;
const RDSDataClient_1 = require("./RDSDataClient");
const BatchExecuteStatementCommand_1 = require("./commands/BatchExecuteStatementCommand");
const BeginTransactionCommand_1 = require("./commands/BeginTransactionCommand");
const CommitTransactionCommand_1 = require("./commands/CommitTransactionCommand");
const ExecuteSqlCommand_1 = require("./commands/ExecuteSqlCommand");
const ExecuteStatementCommand_1 = require("./commands/ExecuteStatementCommand");
const RollbackTransactionCommand_1 = require("./commands/RollbackTransactionCommand");
/**
 * <fullname>Amazon RDS Data Service</fullname>
 *         <p>Amazon RDS provides an HTTP endpoint to run SQL statements on an Amazon Aurora
 *             Serverless DB cluster. To run these statements, you work with the Data Service
 *             API.</p>
 *         <p>For more information about the Data Service API, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora
 *                 Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
class RDSData extends RDSDataClient_1.RDSDataClient {
    batchExecuteStatement(args, optionsOrCb, cb) {
        const command = new BatchExecuteStatementCommand_1.BatchExecuteStatementCommand(args);
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
    beginTransaction(args, optionsOrCb, cb) {
        const command = new BeginTransactionCommand_1.BeginTransactionCommand(args);
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
    commitTransaction(args, optionsOrCb, cb) {
        const command = new CommitTransactionCommand_1.CommitTransactionCommand(args);
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
    executeSql(args, optionsOrCb, cb) {
        const command = new ExecuteSqlCommand_1.ExecuteSqlCommand(args);
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
    executeStatement(args, optionsOrCb, cb) {
        const command = new ExecuteStatementCommand_1.ExecuteStatementCommand(args);
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
    rollbackTransaction(args, optionsOrCb, cb) {
        const command = new RollbackTransactionCommand_1.RollbackTransactionCommand(args);
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
exports.RDSData = RDSData;
//# sourceMappingURL=RDSData.js.map