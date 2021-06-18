import { __extends } from "tslib";
import { DeleteReportDefinitionRequest, DeleteReportDefinitionResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteReportDefinitionCommand,
  serializeAws_restJson1DeleteReportDefinitionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified report definition in AWS Application Cost Profiler. This stops the report from being
 *       generated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, DeleteReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, DeleteReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new DeleteReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteReportDefinitionCommand = /** @class */ (function (_super) {
  __extends(DeleteReportDefinitionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteReportDefinitionCommand(input) {
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
  DeleteReportDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationCostProfilerClient";
    var commandName = "DeleteReportDefinitionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteReportDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteReportDefinitionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteReportDefinitionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteReportDefinitionCommand(input, context);
  };
  DeleteReportDefinitionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteReportDefinitionCommand(output, context);
  };
  return DeleteReportDefinitionCommand;
})($Command);
export { DeleteReportDefinitionCommand };
//# sourceMappingURL=DeleteReportDefinitionCommand.js.map
