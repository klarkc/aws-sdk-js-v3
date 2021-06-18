import { __extends } from "tslib";
import { CompleteLifecycleActionAnswer, CompleteLifecycleActionType } from "../models/models_0";
import {
  deserializeAws_queryCompleteLifecycleActionCommand,
  serializeAws_queryCompleteLifecycleActionCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Completes the lifecycle action for the specified token or instance with the specified
 *             result.</p>
 *         <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling
 *             group:</p>
 *         <ol>
 *             <li>
 *                 <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to
 *                     invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates
 *                     instances.</p>
 *             </li>
 *             <li>
 *                 <p>(Optional) Create a notification target and an IAM role. The target can be
 *                     either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to
 *                     publish lifecycle notifications to the target.</p>
 *             </li>
 *             <li>
 *                 <p>Create the lifecycle hook. Specify whether the hook is used when the instances
 *                     launch or terminate.</p>
 *             </li>
 *             <li>
 *                 <p>If you need more time, record the lifecycle action heartbeat to keep the
 *                     instance in a pending state.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>If you finish before the timeout period ends, complete the
 *                         lifecycle action.</b>
 *                 </p>
 *             </li>
 *          </ol>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle
 *                 hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, CompleteLifecycleActionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, CompleteLifecycleActionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new CompleteLifecycleActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteLifecycleActionCommandInput} for command's `input` shape.
 * @see {@link CompleteLifecycleActionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CompleteLifecycleActionCommand = /** @class */ (function (_super) {
  __extends(CompleteLifecycleActionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CompleteLifecycleActionCommand(input) {
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
  CompleteLifecycleActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "CompleteLifecycleActionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CompleteLifecycleActionType.filterSensitiveLog,
      outputFilterSensitiveLog: CompleteLifecycleActionAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CompleteLifecycleActionCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryCompleteLifecycleActionCommand(input, context);
  };
  CompleteLifecycleActionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryCompleteLifecycleActionCommand(output, context);
  };
  return CompleteLifecycleActionCommand;
})($Command);
export { CompleteLifecycleActionCommand };
//# sourceMappingURL=CompleteLifecycleActionCommand.js.map
