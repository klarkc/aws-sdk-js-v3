import { __extends } from "tslib";
import { CreateBudgetRequest, CreateBudgetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBudgetCommand,
  serializeAws_json1_1CreateBudgetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a budget and, if included, notifications and subscribers. </p>
 * 		       <important>
 * 			         <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new CreateBudgetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBudgetCommandInput} for command's `input` shape.
 * @see {@link CreateBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBudgetCommand = /** @class */ (function (_super) {
  __extends(CreateBudgetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBudgetCommand(input) {
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
  CreateBudgetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "CreateBudgetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBudgetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBudgetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateBudgetCommand(input, context);
  };
  CreateBudgetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateBudgetCommand(output, context);
  };
  return CreateBudgetCommand;
})($Command);
export { CreateBudgetCommand };
//# sourceMappingURL=CreateBudgetCommand.js.map
