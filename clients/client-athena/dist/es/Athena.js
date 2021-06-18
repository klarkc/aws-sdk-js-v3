import { __extends } from "tslib";
import { AthenaClient } from "./AthenaClient";
import { BatchGetNamedQueryCommand } from "./commands/BatchGetNamedQueryCommand";
import { BatchGetQueryExecutionCommand } from "./commands/BatchGetQueryExecutionCommand";
import { CreateDataCatalogCommand } from "./commands/CreateDataCatalogCommand";
import { CreateNamedQueryCommand } from "./commands/CreateNamedQueryCommand";
import { CreatePreparedStatementCommand } from "./commands/CreatePreparedStatementCommand";
import { CreateWorkGroupCommand } from "./commands/CreateWorkGroupCommand";
import { DeleteDataCatalogCommand } from "./commands/DeleteDataCatalogCommand";
import { DeleteNamedQueryCommand } from "./commands/DeleteNamedQueryCommand";
import { DeletePreparedStatementCommand } from "./commands/DeletePreparedStatementCommand";
import { DeleteWorkGroupCommand } from "./commands/DeleteWorkGroupCommand";
import { GetDataCatalogCommand } from "./commands/GetDataCatalogCommand";
import { GetDatabaseCommand } from "./commands/GetDatabaseCommand";
import { GetNamedQueryCommand } from "./commands/GetNamedQueryCommand";
import { GetPreparedStatementCommand } from "./commands/GetPreparedStatementCommand";
import { GetQueryExecutionCommand } from "./commands/GetQueryExecutionCommand";
import { GetQueryResultsCommand } from "./commands/GetQueryResultsCommand";
import { GetTableMetadataCommand } from "./commands/GetTableMetadataCommand";
import { GetWorkGroupCommand } from "./commands/GetWorkGroupCommand";
import { ListDataCatalogsCommand } from "./commands/ListDataCatalogsCommand";
import { ListDatabasesCommand } from "./commands/ListDatabasesCommand";
import { ListEngineVersionsCommand } from "./commands/ListEngineVersionsCommand";
import { ListNamedQueriesCommand } from "./commands/ListNamedQueriesCommand";
import { ListPreparedStatementsCommand } from "./commands/ListPreparedStatementsCommand";
import { ListQueryExecutionsCommand } from "./commands/ListQueryExecutionsCommand";
import { ListTableMetadataCommand } from "./commands/ListTableMetadataCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListWorkGroupsCommand } from "./commands/ListWorkGroupsCommand";
import { StartQueryExecutionCommand } from "./commands/StartQueryExecutionCommand";
import { StopQueryExecutionCommand } from "./commands/StopQueryExecutionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateDataCatalogCommand } from "./commands/UpdateDataCatalogCommand";
import { UpdatePreparedStatementCommand } from "./commands/UpdatePreparedStatementCommand";
import { UpdateWorkGroupCommand } from "./commands/UpdateWorkGroupCommand";
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
var Athena = /** @class */ (function (_super) {
  __extends(Athena, _super);
  function Athena() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Athena.prototype.batchGetNamedQuery = function (args, optionsOrCb, cb) {
    var command = new BatchGetNamedQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.batchGetQueryExecution = function (args, optionsOrCb, cb) {
    var command = new BatchGetQueryExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.createDataCatalog = function (args, optionsOrCb, cb) {
    var command = new CreateDataCatalogCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.createNamedQuery = function (args, optionsOrCb, cb) {
    var command = new CreateNamedQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.createPreparedStatement = function (args, optionsOrCb, cb) {
    var command = new CreatePreparedStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.createWorkGroup = function (args, optionsOrCb, cb) {
    var command = new CreateWorkGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.deleteDataCatalog = function (args, optionsOrCb, cb) {
    var command = new DeleteDataCatalogCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.deleteNamedQuery = function (args, optionsOrCb, cb) {
    var command = new DeleteNamedQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.deletePreparedStatement = function (args, optionsOrCb, cb) {
    var command = new DeletePreparedStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.deleteWorkGroup = function (args, optionsOrCb, cb) {
    var command = new DeleteWorkGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.getDatabase = function (args, optionsOrCb, cb) {
    var command = new GetDatabaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.getDataCatalog = function (args, optionsOrCb, cb) {
    var command = new GetDataCatalogCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.getNamedQuery = function (args, optionsOrCb, cb) {
    var command = new GetNamedQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.getPreparedStatement = function (args, optionsOrCb, cb) {
    var command = new GetPreparedStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.getQueryExecution = function (args, optionsOrCb, cb) {
    var command = new GetQueryExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.getQueryResults = function (args, optionsOrCb, cb) {
    var command = new GetQueryResultsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.getTableMetadata = function (args, optionsOrCb, cb) {
    var command = new GetTableMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.getWorkGroup = function (args, optionsOrCb, cb) {
    var command = new GetWorkGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.listDatabases = function (args, optionsOrCb, cb) {
    var command = new ListDatabasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.listDataCatalogs = function (args, optionsOrCb, cb) {
    var command = new ListDataCatalogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.listEngineVersions = function (args, optionsOrCb, cb) {
    var command = new ListEngineVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.listNamedQueries = function (args, optionsOrCb, cb) {
    var command = new ListNamedQueriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.listPreparedStatements = function (args, optionsOrCb, cb) {
    var command = new ListPreparedStatementsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.listQueryExecutions = function (args, optionsOrCb, cb) {
    var command = new ListQueryExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.listTableMetadata = function (args, optionsOrCb, cb) {
    var command = new ListTableMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
    var command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.listWorkGroups = function (args, optionsOrCb, cb) {
    var command = new ListWorkGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.startQueryExecution = function (args, optionsOrCb, cb) {
    var command = new StartQueryExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.stopQueryExecution = function (args, optionsOrCb, cb) {
    var command = new StopQueryExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.updateDataCatalog = function (args, optionsOrCb, cb) {
    var command = new UpdateDataCatalogCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.updatePreparedStatement = function (args, optionsOrCb, cb) {
    var command = new UpdatePreparedStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  Athena.prototype.updateWorkGroup = function (args, optionsOrCb, cb) {
    var command = new UpdateWorkGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return Athena;
})(AthenaClient);
export { Athena };
//# sourceMappingURL=Athena.js.map
