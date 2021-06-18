"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompleteLifecycleActionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CompleteLifecycleActionCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "CompleteLifecycleActionCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.CompleteLifecycleActionType.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.CompleteLifecycleActionAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryCompleteLifecycleActionCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryCompleteLifecycleActionCommand(output, context);
  }
}
exports.CompleteLifecycleActionCommand = CompleteLifecycleActionCommand;
//# sourceMappingURL=CompleteLifecycleActionCommand.js.map
