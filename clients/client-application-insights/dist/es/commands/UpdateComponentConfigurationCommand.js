import { __extends } from "tslib";
import { UpdateComponentConfigurationRequest, UpdateComponentConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateComponentConfigurationCommand,
  serializeAws_json1_1UpdateComponentConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the monitoring configurations for the component. The configuration input parameter
 *          is an escaped JSON of the configuration and should match the schema of what is returned
 *          by <code>DescribeComponentConfigurationRecommendation</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateComponentConfigurationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateComponentConfigurationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new UpdateComponentConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateComponentConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateComponentConfigurationCommand = /** @class */ (function (_super) {
  __extends(UpdateComponentConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateComponentConfigurationCommand(input) {
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
  UpdateComponentConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "UpdateComponentConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateComponentConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateComponentConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateComponentConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateComponentConfigurationCommand(input, context);
  };
  UpdateComponentConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateComponentConfigurationCommand(output, context);
  };
  return UpdateComponentConfigurationCommand;
})($Command);
export { UpdateComponentConfigurationCommand };
//# sourceMappingURL=UpdateComponentConfigurationCommand.js.map
