import { __extends } from "tslib";
import { LaunchConfigurationNameType } from "../models/models_0";
import {
  deserializeAws_queryDeleteLaunchConfigurationCommand,
  serializeAws_queryDeleteLaunchConfigurationCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified launch configuration.</p>
 *         <p>The launch configuration must not be attached to an Auto Scaling group. When this call
 *             completes, the launch configuration is no longer available for use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteLaunchConfigurationCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteLaunchConfigurationCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DeleteLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLaunchConfigurationCommand = /** @class */ (function (_super) {
  __extends(DeleteLaunchConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteLaunchConfigurationCommand(input) {
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
  DeleteLaunchConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "DeleteLaunchConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: LaunchConfigurationNameType.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteLaunchConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryDeleteLaunchConfigurationCommand(input, context);
  };
  DeleteLaunchConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryDeleteLaunchConfigurationCommand(output, context);
  };
  return DeleteLaunchConfigurationCommand;
})($Command);
export { DeleteLaunchConfigurationCommand };
//# sourceMappingURL=DeleteLaunchConfigurationCommand.js.map
