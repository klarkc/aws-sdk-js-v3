"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeNotificationsForBudgetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the notifications that are associated with a budget.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeNotificationsForBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeNotificationsForBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeNotificationsForBudgetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotificationsForBudgetCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationsForBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeNotificationsForBudgetCommand extends smithy_client_1.Command {
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
    const clientName = "BudgetsClient";
    const commandName = "DescribeNotificationsForBudgetCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeNotificationsForBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DescribeNotificationsForBudgetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1DescribeNotificationsForBudgetCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1DescribeNotificationsForBudgetCommand(output, context);
  }
}
exports.DescribeNotificationsForBudgetCommand = DescribeNotificationsForBudgetCommand;
//# sourceMappingURL=DescribeNotificationsForBudgetCommand.js.map
