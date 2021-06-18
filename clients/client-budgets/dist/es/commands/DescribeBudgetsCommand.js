import { __extends } from "tslib";
import { DescribeBudgetsRequest, DescribeBudgetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetsCommand,
  serializeAws_json1_1DescribeBudgetsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the budgets that are associated with an account.</p>
 * 		       <important>
 * 			         <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetsCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetsCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetsCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetsCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBudgetsCommand = /** @class */ (function (_super) {
  __extends(DescribeBudgetsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBudgetsCommand(input) {
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
  DescribeBudgetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DescribeBudgetsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBudgetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBudgetsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeBudgetsCommand(input, context);
  };
  DescribeBudgetsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeBudgetsCommand(output, context);
  };
  return DescribeBudgetsCommand;
})($Command);
export { DescribeBudgetsCommand };
//# sourceMappingURL=DescribeBudgetsCommand.js.map
