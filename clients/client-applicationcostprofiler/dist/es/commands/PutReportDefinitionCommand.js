import { __extends } from "tslib";
import { PutReportDefinitionRequest, PutReportDefinitionResult } from "../models/models_0";
import {
  deserializeAws_restJson1PutReportDefinitionCommand,
  serializeAws_restJson1PutReportDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates the report definition for a report in Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, PutReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, PutReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new PutReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutReportDefinitionCommand = /** @class */ (function (_super) {
  __extends(PutReportDefinitionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutReportDefinitionCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  PutReportDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationCostProfilerClient";
    var commandName = "PutReportDefinitionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutReportDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutReportDefinitionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutReportDefinitionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutReportDefinitionCommand(input, context);
  };
  PutReportDefinitionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutReportDefinitionCommand(output, context);
  };
  return PutReportDefinitionCommand;
})($Command);
export { PutReportDefinitionCommand };
//# sourceMappingURL=PutReportDefinitionCommand.js.map
