"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedshiftData = void 0;
const RedshiftDataClient_1 = require("./RedshiftDataClient");
const CancelStatementCommand_1 = require("./commands/CancelStatementCommand");
const DescribeStatementCommand_1 = require("./commands/DescribeStatementCommand");
const DescribeTableCommand_1 = require("./commands/DescribeTableCommand");
const ExecuteStatementCommand_1 = require("./commands/ExecuteStatementCommand");
const GetStatementResultCommand_1 = require("./commands/GetStatementResultCommand");
const ListDatabasesCommand_1 = require("./commands/ListDatabasesCommand");
const ListSchemasCommand_1 = require("./commands/ListSchemasCommand");
const ListStatementsCommand_1 = require("./commands/ListStatementsCommand");
const ListTablesCommand_1 = require("./commands/ListTablesCommand");
/**
 * <p>You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You
 *       can run individual SQL statements, which are committed if the statement succeeds. </p>
 *          <p>For more information about the Amazon Redshift Data API, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
class RedshiftData extends RedshiftDataClient_1.RedshiftDataClient {
    cancelStatement(args, optionsOrCb, cb) {
        const command = new CancelStatementCommand_1.CancelStatementCommand(args);
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
    describeStatement(args, optionsOrCb, cb) {
        const command = new DescribeStatementCommand_1.DescribeStatementCommand(args);
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
    describeTable(args, optionsOrCb, cb) {
        const command = new DescribeTableCommand_1.DescribeTableCommand(args);
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
    getStatementResult(args, optionsOrCb, cb) {
        const command = new GetStatementResultCommand_1.GetStatementResultCommand(args);
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
    listDatabases(args, optionsOrCb, cb) {
        const command = new ListDatabasesCommand_1.ListDatabasesCommand(args);
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
    listSchemas(args, optionsOrCb, cb) {
        const command = new ListSchemasCommand_1.ListSchemasCommand(args);
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
    listStatements(args, optionsOrCb, cb) {
        const command = new ListStatementsCommand_1.ListStatementsCommand(args);
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
}
exports.RedshiftData = RedshiftData;
//# sourceMappingURL=RedshiftData.js.map