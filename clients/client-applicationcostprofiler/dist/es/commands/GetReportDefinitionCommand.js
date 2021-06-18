import { __extends } from "tslib";
import { GetReportDefinitionRequest, GetReportDefinitionResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetReportDefinitionCommand,
  serializeAws_restJson1GetReportDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the definition of a report already configured in AWS Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, GetReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, GetReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new GetReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetReportDefinitionCommand = /** @class */ (function (_super) {
  __extends(GetReportDefinitionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetReportDefinitionCommand(input) {
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
  GetReportDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationCostProfilerClient";
    var commandName = "GetReportDefinitionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetReportDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetReportDefinitionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetReportDefinitionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetReportDefinitionCommand(input, context);
  };
  GetReportDefinitionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetReportDefinitionCommand(output, context);
  };
  return GetReportDefinitionCommand;
})($Command);
export { GetReportDefinitionCommand };
//# sourceMappingURL=GetReportDefinitionCommand.js.map
