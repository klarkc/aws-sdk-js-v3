import { __extends } from "tslib";
import { EnterStandbyAnswer, EnterStandbyQuery } from "../models/models_0";
import { deserializeAws_queryEnterStandbyCommand, serializeAws_queryEnterStandbyCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Moves the specified instances into the standby state.</p>
 *         <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can
 *             enter standby as long as the desired capacity of the Auto Scaling group after the instances are
 *             placed into standby is equal to or greater than the minimum capacity of the
 *             group.</p>
 *         <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group
 *             launches new instances to replace the instances on standby.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing
 *                 instances from your Auto Scaling group</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, EnterStandbyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, EnterStandbyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new EnterStandbyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnterStandbyCommandInput} for command's `input` shape.
 * @see {@link EnterStandbyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnterStandbyCommand = /** @class */ (function (_super) {
  __extends(EnterStandbyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function EnterStandbyCommand(input) {
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
  EnterStandbyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "EnterStandbyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: EnterStandbyQuery.filterSensitiveLog,
      outputFilterSensitiveLog: EnterStandbyAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  EnterStandbyCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryEnterStandbyCommand(input, context);
  };
  EnterStandbyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryEnterStandbyCommand(output, context);
  };
  return EnterStandbyCommand;
})($Command);
export { EnterStandbyCommand };
//# sourceMappingURL=EnterStandbyCommand.js.map
