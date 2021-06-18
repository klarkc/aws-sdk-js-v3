import { __extends } from "tslib";
import { DeleteBudgetRequest, DeleteBudgetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBudgetCommand,
  serializeAws_json1_1DeleteBudgetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a budget. You can delete your budget at any time.</p>
 * 		       <important>
 * 			         <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteBudgetCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteBudgetCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DeleteBudgetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBudgetCommandInput} for command's `input` shape.
 * @see {@link DeleteBudgetCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBudgetCommand = /** @class */ (function (_super) {
  __extends(DeleteBudgetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBudgetCommand(input) {
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
  DeleteBudgetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DeleteBudgetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBudgetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBudgetResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBudgetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteBudgetCommand(input, context);
  };
  DeleteBudgetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteBudgetCommand(output, context);
  };
  return DeleteBudgetCommand;
})($Command);
export { DeleteBudgetCommand };
//# sourceMappingURL=DeleteBudgetCommand.js.map
