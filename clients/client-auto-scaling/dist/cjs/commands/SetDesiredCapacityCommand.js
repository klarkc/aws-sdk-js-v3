"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDesiredCapacityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class SetDesiredCapacityCommand extends smithy_client_1.Command {
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
    const commandName = "SetDesiredCapacityCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.SetDesiredCapacityType.filterSensitiveLog,
      outputFilterSensitiveLog: (output) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_querySetDesiredCapacityCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_querySetDesiredCapacityCommand(output, context);
  }
}
exports.SetDesiredCapacityCommand = SetDesiredCapacityCommand;
//# sourceMappingURL=SetDesiredCapacityCommand.js.map
