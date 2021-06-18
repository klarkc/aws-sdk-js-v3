"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterStandbyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class EnterStandbyCommand extends smithy_client_1.Command {
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
    const commandName = "EnterStandbyCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.EnterStandbyQuery.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.EnterStandbyAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryEnterStandbyCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryEnterStandbyCommand(output, context);
  }
}
exports.EnterStandbyCommand = EnterStandbyCommand;
//# sourceMappingURL=EnterStandbyCommand.js.map
