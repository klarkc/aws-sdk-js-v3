import { __extends } from "tslib";
import { SetInstanceProtectionAnswer, SetInstanceProtectionQuery } from "../models/models_0";
import {
  deserializeAws_querySetInstanceProtectionCommand,
  serializeAws_querySetInstanceProtectionCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the instance protection settings of the specified instances. This operation
 *             cannot be called on instances in a warm pool.</p>
 *         <p>For more information about preventing instances that are part of an Auto Scaling group from
 *             terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance scale-in protection</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call
 *             fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetInstanceProtectionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetInstanceProtectionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new SetInstanceProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetInstanceProtectionCommandInput} for command's `input` shape.
 * @see {@link SetInstanceProtectionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetInstanceProtectionCommand = /** @class */ (function (_super) {
  __extends(SetInstanceProtectionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SetInstanceProtectionCommand(input) {
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
  SetInstanceProtectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "SetInstanceProtectionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SetInstanceProtectionQuery.filterSensitiveLog,
      outputFilterSensitiveLog: SetInstanceProtectionAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SetInstanceProtectionCommand.prototype.serialize = function (input, context) {
    return serializeAws_querySetInstanceProtectionCommand(input, context);
  };
  SetInstanceProtectionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_querySetInstanceProtectionCommand(output, context);
  };
  return SetInstanceProtectionCommand;
})($Command);
export { SetInstanceProtectionCommand };
//# sourceMappingURL=SetInstanceProtectionCommand.js.map
