import { __extends } from "tslib";
import { DescribeBudgetRequest, DescribeBudgetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetCommand,
  serializeAws_json1_1DescribeBudgetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a budget.</p>
 * 		       <important>
 * 			         <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBudgetCommand = /** @class */ (function (_super) {
  __extends(DescribeBudgetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBudgetCommand(input) {
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
  DescribeBudgetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DescribeBudgetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBudgetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeBudgetCommand(input, context);
  };
  DescribeBudgetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeBudgetCommand(output, context);
  };
  return DescribeBudgetCommand;
})($Command);
export { DescribeBudgetCommand };
//# sourceMappingURL=DescribeBudgetCommand.js.map
