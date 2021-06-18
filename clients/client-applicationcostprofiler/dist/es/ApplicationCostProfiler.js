import { __extends } from "tslib";
import { ApplicationCostProfilerClient } from "./ApplicationCostProfilerClient";
import { DeleteReportDefinitionCommand } from "./commands/DeleteReportDefinitionCommand";
import { GetReportDefinitionCommand } from "./commands/GetReportDefinitionCommand";
import { ImportApplicationUsageCommand } from "./commands/ImportApplicationUsageCommand";
import { ListReportDefinitionsCommand } from "./commands/ListReportDefinitionsCommand";
import { PutReportDefinitionCommand } from "./commands/PutReportDefinitionCommand";
import { UpdateReportDefinitionCommand } from "./commands/UpdateReportDefinitionCommand";
/**
 * <p>This reference provides descriptions of the AWS Application Cost Profiler API.</p>
 *          <p>The AWS Application Cost Profiler API provides programmatic access to view, create, update, and delete
 *       application cost report definitions, as well as to import your usage data into the Application Cost Profiler
 *       service.</p>
 *          <p>For more information about using this service, see the <a href="https://docs.aws.amazon.com/application-cost-profiler/latest/userguide/introduction.html">AWS Application Cost
 *         Profiler User Guide</a>.</p>
 */
var ApplicationCostProfiler = /** @class */ (function (_super) {
  __extends(ApplicationCostProfiler, _super);
  function ApplicationCostProfiler() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ApplicationCostProfiler.prototype.deleteReportDefinition = function (args, optionsOrCb, cb) {
    var command = new DeleteReportDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApplicationCostProfiler.prototype.getReportDefinition = function (args, optionsOrCb, cb) {
    var command = new GetReportDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApplicationCostProfiler.prototype.importApplicationUsage = function (args, optionsOrCb, cb) {
    var command = new ImportApplicationUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApplicationCostProfiler.prototype.listReportDefinitions = function (args, optionsOrCb, cb) {
    var command = new ListReportDefinitionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApplicationCostProfiler.prototype.putReportDefinition = function (args, optionsOrCb, cb) {
    var command = new PutReportDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApplicationCostProfiler.prototype.updateReportDefinition = function (args, optionsOrCb, cb) {
    var command = new UpdateReportDefinitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return ApplicationCostProfiler;
})(ApplicationCostProfilerClient);
export { ApplicationCostProfiler };
//# sourceMappingURL=ApplicationCostProfiler.js.map
