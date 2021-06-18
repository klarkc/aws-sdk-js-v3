import { __extends } from "tslib";
import { ExitStandbyAnswer, ExitStandbyQuery } from "../models/models_0";
import { deserializeAws_queryExitStandbyCommand, serializeAws_queryExitStandbyCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Moves the specified instances out of the standby state.</p>
 *         <p>After you put the instances back in service, the desired capacity is
 *             incremented.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily removing
 *                 instances from your Auto Scaling group</a> in the
 *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, ExitStandbyCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, ExitStandbyCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new ExitStandbyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExitStandbyCommandInput} for command's `input` shape.
 * @see {@link ExitStandbyCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExitStandbyCommand = /** @class */ (function (_super) {
  __extends(ExitStandbyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ExitStandbyCommand(input) {
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
  ExitStandbyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "ExitStandbyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ExitStandbyQuery.filterSensitiveLog,
      outputFilterSensitiveLog: ExitStandbyAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ExitStandbyCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryExitStandbyCommand(input, context);
  };
  ExitStandbyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryExitStandbyCommand(output, context);
  };
  return ExitStandbyCommand;
})($Command);
export { ExitStandbyCommand };
//# sourceMappingURL=ExitStandbyCommand.js.map
