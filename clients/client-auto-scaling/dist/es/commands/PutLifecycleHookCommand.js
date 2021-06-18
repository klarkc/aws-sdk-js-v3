import { __extends } from "tslib";
import { PutLifecycleHookAnswer, PutLifecycleHookType } from "../models/models_0";
import {
  deserializeAws_queryPutLifecycleHookCommand,
  serializeAws_queryPutLifecycleHookCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p>
 *         <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance
 *             launches (before it is put into service) or as the instance terminates (before it is
 *             fully terminated).</p>
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
 *                 <p>
 *                     <b>Create the lifecycle hook. Specify whether the hook is
 *                         used when the instances launch or terminate.</b>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>If you need more time, record the lifecycle action heartbeat to keep the
 *                     instance in a pending state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p>
 *             </li>
 *             <li>
 *                 <p>If you finish before the timeout period ends, complete the lifecycle action
 *                     using the <a>CompleteLifecycleAction</a> API call.</p>
 *             </li>
 *          </ol>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle
 *                 hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling
 *             group, the call fails.</p>
 *         <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle
 *             hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutLifecycleHookCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutLifecycleHookCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new PutLifecycleHookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLifecycleHookCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleHookCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutLifecycleHookCommand = /** @class */ (function (_super) {
  __extends(PutLifecycleHookCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutLifecycleHookCommand(input) {
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
  PutLifecycleHookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingClient";
    var commandName = "PutLifecycleHookCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutLifecycleHookType.filterSensitiveLog,
      outputFilterSensitiveLog: PutLifecycleHookAnswer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutLifecycleHookCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryPutLifecycleHookCommand(input, context);
  };
  PutLifecycleHookCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryPutLifecycleHookCommand(output, context);
  };
  return PutLifecycleHookCommand;
})($Command);
export { PutLifecycleHookCommand };
//# sourceMappingURL=PutLifecycleHookCommand.js.map
