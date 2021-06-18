import { __extends } from "tslib";
import { DescribeBudgetPerformanceHistoryRequest, DescribeBudgetPerformanceHistoryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand,
  serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetPerformanceHistoryCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetPerformanceHistoryCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetPerformanceHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetPerformanceHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetPerformanceHistoryCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBudgetPerformanceHistoryCommand = /** @class */ (function (_super) {
  __extends(DescribeBudgetPerformanceHistoryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBudgetPerformanceHistoryCommand(input) {
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
  DescribeBudgetPerformanceHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DescribeBudgetPerformanceHistoryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBudgetPerformanceHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetPerformanceHistoryResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBudgetPerformanceHistoryCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeBudgetPerformanceHistoryCommand(input, context);
  };
  DescribeBudgetPerformanceHistoryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeBudgetPerformanceHistoryCommand(output, context);
  };
  return DescribeBudgetPerformanceHistoryCommand;
})($Command);
export { DescribeBudgetPerformanceHistoryCommand };
//# sourceMappingURL=DescribeBudgetPerformanceHistoryCommand.js.map
