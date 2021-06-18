import { __extends } from "tslib";
import { StopContinuousExportRequest, StopContinuousExportResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StopContinuousExportCommand,
  serializeAws_json1_1StopContinuousExportCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stop the continuous flow of agent's discovered data into Amazon Athena.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StopContinuousExportCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StopContinuousExportCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StopContinuousExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopContinuousExportCommandInput} for command's `input` shape.
 * @see {@link StopContinuousExportCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopContinuousExportCommand = /** @class */ (function (_super) {
  __extends(StopContinuousExportCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StopContinuousExportCommand(input) {
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
  StopContinuousExportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "StopContinuousExportCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StopContinuousExportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopContinuousExportResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StopContinuousExportCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StopContinuousExportCommand(input, context);
  };
  StopContinuousExportCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StopContinuousExportCommand(output, context);
  };
  return StopContinuousExportCommand;
})($Command);
export { StopContinuousExportCommand };
//# sourceMappingURL=StopContinuousExportCommand.js.map
