"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminateInstanceInAutoScalingGroupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Terminates the specified instance and optionally adjusts the desired group size. This
 *             operation cannot be called on instances in a warm pool.</p>
 *         <p>This call simply makes a termination request. The instance is not terminated
 *             immediately. When an instance is terminated, the instance status changes to
 *                 <code>terminated</code>. You can't connect to or start an instance after you've
 *             terminated it.</p>
 *         <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches
 *             instances to replace the ones that are terminated. </p>
 *         <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you
 *             decrement the desired capacity, your Auto Scaling group can become unbalanced between
 *             Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might
 *             terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, TerminateInstanceInAutoScalingGroupCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, TerminateInstanceInAutoScalingGroupCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new TerminateInstanceInAutoScalingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateInstanceInAutoScalingGroupCommandInput} for command's `input` shape.
 * @see {@link TerminateInstanceInAutoScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class TerminateInstanceInAutoScalingGroupCommand extends smithy_client_1.Command {
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
    const commandName = "TerminateInstanceInAutoScalingGroupCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.TerminateInstanceInAutoScalingGroupType.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ActivityType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryTerminateInstanceInAutoScalingGroupCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryTerminateInstanceInAutoScalingGroupCommand(output, context);
  }
}
exports.TerminateInstanceInAutoScalingGroupCommand = TerminateInstanceInAutoScalingGroupCommand;
//# sourceMappingURL=TerminateInstanceInAutoScalingGroupCommand.js.map
