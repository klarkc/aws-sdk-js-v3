import { __extends } from "tslib";
import { DescribeBudgetActionsForBudgetRequest, DescribeBudgetActionsForBudgetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand,
  serializeAws_json1_1DescribeBudgetActionsForBudgetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Describes all of the budget actions for a budget.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionsForBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionsForBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetActionsForBudgetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetActionsForBudgetCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionsForBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBudgetActionsForBudgetCommand = /** @class */ (function (_super) {
  __extends(DescribeBudgetActionsForBudgetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBudgetActionsForBudgetCommand(input) {
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
  DescribeBudgetActionsForBudgetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DescribeBudgetActionsForBudgetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBudgetActionsForBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetActionsForBudgetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBudgetActionsForBudgetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeBudgetActionsForBudgetCommand(input, context);
  };
  DescribeBudgetActionsForBudgetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeBudgetActionsForBudgetCommand(output, context);
  };
  return DescribeBudgetActionsForBudgetCommand;
})($Command);
export { DescribeBudgetActionsForBudgetCommand };
//# sourceMappingURL=DescribeBudgetActionsForBudgetCommand.js.map
