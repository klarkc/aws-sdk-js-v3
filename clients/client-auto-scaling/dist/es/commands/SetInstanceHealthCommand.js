import { __extends } from "tslib";
import { SetInstanceHealthQuery } from "../models/models_0";
import {
  deserializeAws_querySetInstanceHealthCommand,
  serializeAws_querySetInstanceHealthCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the health status of the specified instance.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks for Auto Scaling
 *                 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, SetInstanceHealthCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, SetInstanceHealthCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new SetInstanceHealthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetInstanceHealthCommandInput} for command's `input` shape.
 * @see {@link SetInstanceHealthCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetInstanceHealthCommand = /** @class */ (function (_super) {
  __extends(SetInstanceHealthCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SetInstanceHealthCommand(input) {
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
  SetInstanceHealthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "SetInstanceHealthCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SetInstanceHealthQuery.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SetInstanceHealthCommand.prototype.serialize = function (input, context) {
    return serializeAws_querySetInstanceHealthCommand(input, context);
  };
  SetInstanceHealthCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_querySetInstanceHealthCommand(output, context);
  };
  return SetInstanceHealthCommand;
})($Command);
export { SetInstanceHealthCommand };
//# sourceMappingURL=SetInstanceHealthCommand.js.map
