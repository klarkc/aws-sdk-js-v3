"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Athena = void 0;
const AthenaClient_1 = require("./AthenaClient");
const BatchGetNamedQueryCommand_1 = require("./commands/BatchGetNamedQueryCommand");
const BatchGetQueryExecutionCommand_1 = require("./commands/BatchGetQueryExecutionCommand");
const CreateDataCatalogCommand_1 = require("./commands/CreateDataCatalogCommand");
const CreateNamedQueryCommand_1 = require("./commands/CreateNamedQueryCommand");
const CreatePreparedStatementCommand_1 = require("./commands/CreatePreparedStatementCommand");
const CreateWorkGroupCommand_1 = require("./commands/CreateWorkGroupCommand");
const DeleteDataCatalogCommand_1 = require("./commands/DeleteDataCatalogCommand");
const DeleteNamedQueryCommand_1 = require("./commands/DeleteNamedQueryCommand");
const DeletePreparedStatementCommand_1 = require("./commands/DeletePreparedStatementCommand");
const DeleteWorkGroupCommand_1 = require("./commands/DeleteWorkGroupCommand");
const GetDataCatalogCommand_1 = require("./commands/GetDataCatalogCommand");
const GetDatabaseCommand_1 = require("./commands/GetDatabaseCommand");
const GetNamedQueryCommand_1 = require("./commands/GetNamedQueryCommand");
const GetPreparedStatementCommand_1 = require("./commands/GetPreparedStatementCommand");
const GetQueryExecutionCommand_1 = require("./commands/GetQueryExecutionCommand");
const GetQueryResultsCommand_1 = require("./commands/GetQueryResultsCommand");
const GetTableMetadataCommand_1 = require("./commands/GetTableMetadataCommand");
const GetWorkGroupCommand_1 = require("./commands/GetWorkGroupCommand");
const ListDataCatalogsCommand_1 = require("./commands/ListDataCatalogsCommand");
const ListDatabasesCommand_1 = require("./commands/ListDatabasesCommand");
const ListEngineVersionsCommand_1 = require("./commands/ListEngineVersionsCommand");
const ListNamedQueriesCommand_1 = require("./commands/ListNamedQueriesCommand");
const ListPreparedStatementsCommand_1 = require("./commands/ListPreparedStatementsCommand");
const ListQueryExecutionsCommand_1 = require("./commands/ListQueryExecutionsCommand");
const ListTableMetadataCommand_1 = require("./commands/ListTableMetadataCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const ListWorkGroupsCommand_1 = require("./commands/ListWorkGroupsCommand");
const StartQueryExecutionCommand_1 = require("./commands/StartQueryExecutionCommand");
const StopQueryExecutionCommand_1 = require("./commands/StopQueryExecutionCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateDataCatalogCommand_1 = require("./commands/UpdateDataCatalogCommand");
const UpdatePreparedStatementCommand_1 = require("./commands/UpdatePreparedStatementCommand");
const UpdateWorkGroupCommand_1 = require("./commands/UpdateWorkGroupCommand");
/**
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL to
 *             analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and
 *             run ad-hoc queries and get results in seconds. Athena is serverless, so there is no
 *             infrastructure to set up or manage. You pay only for the queries you run. Athena scales
 *             automatically—executing queries in parallel—so results are fast, even with large
 *             datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon
 *                 Athena</a> in the <i>Amazon Athena User Guide</i>.</p>
 *         <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or
 *             later with the Amazon Athena API. Earlier version drivers do not support the API. For
 *             more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing
 *                 Amazon Athena with JDBC</a>.</p>
 *         <p>For code samples using the AWS SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 */
class Athena extends AthenaClient_1.AthenaClient {
  batchGetNamedQuery(args, optionsOrCb, cb) {
    const command = new BatchGetNamedQueryCommand_1.BatchGetNamedQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  batchGetQueryExecution(args, optionsOrCb, cb) {
    const command = new BatchGetQueryExecutionCommand_1.BatchGetQueryExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDataCatalog(args, optionsOrCb, cb) {
    const command = new CreateDataCatalogCommand_1.CreateDataCatalogCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createNamedQuery(args, optionsOrCb, cb) {
    const command = new CreateNamedQueryCommand_1.CreateNamedQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createPreparedStatement(args, optionsOrCb, cb) {
    const command = new CreatePreparedStatementCommand_1.CreatePreparedStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createWorkGroup(args, optionsOrCb, cb) {
    const command = new CreateWorkGroupCommand_1.CreateWorkGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteDataCatalog(args, optionsOrCb, cb) {
    const command = new DeleteDataCatalogCommand_1.DeleteDataCatalogCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteNamedQuery(args, optionsOrCb, cb) {
    const command = new DeleteNamedQueryCommand_1.DeleteNamedQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deletePreparedStatement(args, optionsOrCb, cb) {
    const command = new DeletePreparedStatementCommand_1.DeletePreparedStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteWorkGroup(args, optionsOrCb, cb) {
    const command = new DeleteWorkGroupCommand_1.DeleteWorkGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDatabase(args, optionsOrCb, cb) {
    const command = new GetDatabaseCommand_1.GetDatabaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDataCatalog(args, optionsOrCb, cb) {
    const command = new GetDataCatalogCommand_1.GetDataCatalogCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getNamedQuery(args, optionsOrCb, cb) {
    const command = new GetNamedQueryCommand_1.GetNamedQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getPreparedStatement(args, optionsOrCb, cb) {
    const command = new GetPreparedStatementCommand_1.GetPreparedStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getQueryExecution(args, optionsOrCb, cb) {
    const command = new GetQueryExecutionCommand_1.GetQueryExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getQueryResults(args, optionsOrCb, cb) {
    const command = new GetQueryResultsCommand_1.GetQueryResultsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getTableMetadata(args, optionsOrCb, cb) {
    const command = new GetTableMetadataCommand_1.GetTableMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getWorkGroup(args, optionsOrCb, cb) {
    const command = new GetWorkGroupCommand_1.GetWorkGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDatabases(args, optionsOrCb, cb) {
    const command = new ListDatabasesCommand_1.ListDatabasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listDataCatalogs(args, optionsOrCb, cb) {
    const command = new ListDataCatalogsCommand_1.ListDataCatalogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listEngineVersions(args, optionsOrCb, cb) {
    const command = new ListEngineVersionsCommand_1.ListEngineVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listNamedQueries(args, optionsOrCb, cb) {
    const command = new ListNamedQueriesCommand_1.ListNamedQueriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listPreparedStatements(args, optionsOrCb, cb) {
    const command = new ListPreparedStatementsCommand_1.ListPreparedStatementsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listQueryExecutions(args, optionsOrCb, cb) {
    const command = new ListQueryExecutionsCommand_1.ListQueryExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTableMetadata(args, optionsOrCb, cb) {
    const command = new ListTableMetadataCommand_1.ListTableMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listTagsForResource(args, optionsOrCb, cb) {
    const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listWorkGroups(args, optionsOrCb, cb) {
    const command = new ListWorkGroupsCommand_1.ListWorkGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  startQueryExecution(args, optionsOrCb, cb) {
    const command = new StartQueryExecutionCommand_1.StartQueryExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  stopQueryExecution(args, optionsOrCb, cb) {
    const command = new StopQueryExecutionCommand_1.StopQueryExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagResource(args, optionsOrCb, cb) {
    const command = new TagResourceCommand_1.TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagResource(args, optionsOrCb, cb) {
    const command = new UntagResourceCommand_1.UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateDataCatalog(args, optionsOrCb, cb) {
    const command = new UpdateDataCatalogCommand_1.UpdateDataCatalogCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updatePreparedStatement(args, optionsOrCb, cb) {
    const command = new UpdatePreparedStatementCommand_1.UpdatePreparedStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateWorkGroup(args, optionsOrCb, cb) {
    const command = new UpdateWorkGroupCommand_1.UpdateWorkGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.Athena = Athena;
//# sourceMappingURL=Athena.js.map
