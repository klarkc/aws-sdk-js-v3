"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAdjustmentTypesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the available adjustment types for step scaling and simple scaling
 *             policies.</p>
 *         <p>The following adjustment types are supported:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>ChangeInCapacity</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>ExactCapacity</code>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <code>PercentChangeInCapacity</code>
 *                 </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAdjustmentTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAdjustmentTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAdjustmentTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAdjustmentTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAdjustmentTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAdjustmentTypesCommand extends smithy_client_1.Command {
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
    const commandName = "DescribeAdjustmentTypesCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input) => input,
      outputFilterSensitiveLog: models_0_1.DescribeAdjustmentTypesAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryDescribeAdjustmentTypesCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryDescribeAdjustmentTypesCommand(output, context);
  }
}
exports.DescribeAdjustmentTypesCommand = DescribeAdjustmentTypesCommand;
//# sourceMappingURL=DescribeAdjustmentTypesCommand.js.map
