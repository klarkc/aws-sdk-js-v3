"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCostProfiler = void 0;
const ApplicationCostProfilerClient_1 = require("./ApplicationCostProfilerClient");
const DeleteReportDefinitionCommand_1 = require("./commands/DeleteReportDefinitionCommand");
const GetReportDefinitionCommand_1 = require("./commands/GetReportDefinitionCommand");
const ImportApplicationUsageCommand_1 = require("./commands/ImportApplicationUsageCommand");
const ListReportDefinitionsCommand_1 = require("./commands/ListReportDefinitionsCommand");
const PutReportDefinitionCommand_1 = require("./commands/PutReportDefinitionCommand");
const UpdateReportDefinitionCommand_1 = require("./commands/UpdateReportDefinitionCommand");
/**
 * <p>This reference provides descriptions of the AWS Application Cost Profiler API.</p>
 *          <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete
 *       application cost report definitions, as well as to import your usage data into the Application Cost Profiler
 *       service.</p>
 *          <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost
 *         Profiler User Guide</a>.</p>
 */
class ApplicationCostProfiler extends ApplicationCostProfilerClient_1.ApplicationCostProfilerClient {
  deleteReportDefinition(args, optionsOrCb, cb) {
    const command = new DeleteReportDefinitionCommand_1.DeleteReportDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getReportDefinition(args, optionsOrCb, cb) {
    const command = new GetReportDefinitionCommand_1.GetReportDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  importApplicationUsage(args, optionsOrCb, cb) {
    const command = new ImportApplicationUsageCommand_1.ImportApplicationUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  listReportDefinitions(args, optionsOrCb, cb) {
    const command = new ListReportDefinitionsCommand_1.ListReportDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putReportDefinition(args, optionsOrCb, cb) {
    const command = new PutReportDefinitionCommand_1.PutReportDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateReportDefinition(args, optionsOrCb, cb) {
    const command = new UpdateReportDefinitionCommand_1.UpdateReportDefinitionCommand(args);
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
exports.ApplicationCostProfiler = ApplicationCostProfiler;
//# sourceMappingURL=ApplicationCostProfiler.js.map
