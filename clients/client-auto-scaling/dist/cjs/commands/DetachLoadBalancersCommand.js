"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetachLoadBalancersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p>
 *         <p>This operation detaches only Classic Load Balancers. If you have Application Load
 *             Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p>
 *         <p>When you detach a load balancer, it enters the <code>Removing</code> state while
 *             deregistering the instances in the group. When all instances are deregistered, then you
 *             can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DetachLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DetachLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DetachLoadBalancersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DetachLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DetachLoadBalancersCommand extends smithy_client_1.Command {
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
    const commandName = "DetachLoadBalancersCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DetachLoadBalancersType.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DetachLoadBalancersResultType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryDetachLoadBalancersCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryDetachLoadBalancersCommand(output, context);
  }
}
exports.DetachLoadBalancersCommand = DetachLoadBalancersCommand;
//# sourceMappingURL=DetachLoadBalancersCommand.js.map
