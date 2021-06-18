import { __extends } from "tslib";
import { SetDesiredCapacityType } from "../models/models_0";
import {
  deserializeAws_querySetDesiredCapacityCommand,
  serializeAws_querySetDesiredCapacityCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the size of the specified Auto Scaling group.</p>
 *         <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value
 *             that is lower than the current size of the group, the Auto Scaling group uses its termination
 *             policy to determine which instances to terminate. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual scaling</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetDesiredCapacityCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new SetDesiredCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDesiredCapacityCommandInput} for command's `input` shape.
 * @see {@link SetDesiredCapacityCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetDesiredCapacityCommand = /** @class */ (function (_super) {
  __extends(SetDesiredCapacityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SetDesiredCapacityCommand(input) {
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
  SetDesiredCapacityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "SetDesiredCapacityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SetDesiredCapacityType.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SetDesiredCapacityCommand.prototype.serialize = function (input, context) {
    return serializeAws_querySetDesiredCapacityCommand(input, context);
  };
  SetDesiredCapacityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_querySetDesiredCapacityCommand(output, context);
  };
  return SetDesiredCapacityCommand;
})($Command);
export { SetDesiredCapacityCommand };
//# sourceMappingURL=SetDesiredCapacityCommand.js.map
