import { __extends } from "tslib";
import { UpdateReportDefinitionRequest, UpdateReportDefinitionResult } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateReportDefinitionCommand,
  serializeAws_restJson1UpdateReportDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates existing report in AWS Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, UpdateReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, UpdateReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new UpdateReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateReportDefinitionCommand = /** @class */ (function (_super) {
  __extends(UpdateReportDefinitionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateReportDefinitionCommand(input) {
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
  UpdateReportDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationCostProfilerClient";
    var commandName = "UpdateReportDefinitionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateReportDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateReportDefinitionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateReportDefinitionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateReportDefinitionCommand(input, context);
  };
  UpdateReportDefinitionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateReportDefinitionCommand(output, context);
  };
  return UpdateReportDefinitionCommand;
})($Command);
export { UpdateReportDefinitionCommand };
//# sourceMappingURL=UpdateReportDefinitionCommand.js.map
