"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeScheduledActionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets information about the scheduled actions that haven't run or that have not reached
 *             their end time.</p>
 *         <p>To describe the scaling activities for scheduled actions that have already run, call
 *             the <a>DescribeScalingActivities</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeScheduledActionsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeScheduledActionsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeScheduledActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeScheduledActionsCommand extends smithy_client_1.Command {
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
    const commandName = "DescribeScheduledActionsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeScheduledActionsType.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ScheduledActionsType.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_query_1.serializeAws_queryDescribeScheduledActionsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_query_1.deserializeAws_queryDescribeScheduledActionsCommand(output, context);
  }
}
exports.DescribeScheduledActionsCommand = DescribeScheduledActionsCommand;
//# sourceMappingURL=DescribeScheduledActionsCommand.js.map
