import { __extends } from "tslib";
import { DescribeBudgetActionsForAccountRequest, DescribeBudgetActionsForAccountResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetActionsForAccountCommand,
  serializeAws_json1_1DescribeBudgetActionsForAccountCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Describes all of the budget actions for an account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionsForAccountCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionsForAccountCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetActionsForAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetActionsForAccountCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionsForAccountCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBudgetActionsForAccountCommand = /** @class */ (function (_super) {
  __extends(DescribeBudgetActionsForAccountCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBudgetActionsForAccountCommand(input) {
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
  DescribeBudgetActionsForAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DescribeBudgetActionsForAccountCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBudgetActionsForAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetActionsForAccountResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBudgetActionsForAccountCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeBudgetActionsForAccountCommand(input, context);
  };
  DescribeBudgetActionsForAccountCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeBudgetActionsForAccountCommand(output, context);
  };
  return DescribeBudgetActionsForAccountCommand;
})($Command);
export { DescribeBudgetActionsForAccountCommand };
//# sourceMappingURL=DescribeBudgetActionsForAccountCommand.js.map
