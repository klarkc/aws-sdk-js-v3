import { __extends } from "tslib";
import { DescribeNotificationsForBudgetRequest, DescribeNotificationsForBudgetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeNotificationsForBudgetCommand,
  serializeAws_json1_1DescribeNotificationsForBudgetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeNotificationsForBudgetCommand = /** @class */ (function (_super) {
  __extends(DescribeNotificationsForBudgetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeNotificationsForBudgetCommand(input) {
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
  DescribeNotificationsForBudgetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DescribeNotificationsForBudgetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeNotificationsForBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeNotificationsForBudgetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeNotificationsForBudgetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeNotificationsForBudgetCommand(input, context);
  };
  DescribeNotificationsForBudgetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeNotificationsForBudgetCommand(output, context);
  };
  return DescribeNotificationsForBudgetCommand;
})($Command);
export { DescribeNotificationsForBudgetCommand };
//# sourceMappingURL=DescribeNotificationsForBudgetCommand.js.map
