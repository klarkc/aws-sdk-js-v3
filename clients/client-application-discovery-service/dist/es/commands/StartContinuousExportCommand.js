import { __extends } from "tslib";
import { StartContinuousExportRequest, StartContinuousExportResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartContinuousExportCommand,
  serializeAws_json1_1StartContinuousExportCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Start the continuous flow of agent's discovered data into Amazon Athena.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartContinuousExportCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartContinuousExportCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StartContinuousExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartContinuousExportCommandInput} for command's `input` shape.
 * @see {@link StartContinuousExportCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartContinuousExportCommand = /** @class */ (function (_super) {
  __extends(StartContinuousExportCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartContinuousExportCommand(input) {
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
  StartContinuousExportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "StartContinuousExportCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartContinuousExportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartContinuousExportResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartContinuousExportCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StartContinuousExportCommand(input, context);
  };
  StartContinuousExportCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StartContinuousExportCommand(output, context);
  };
  return StartContinuousExportCommand;
})($Command);
export { StartContinuousExportCommand };
//# sourceMappingURL=StartContinuousExportCommand.js.map
