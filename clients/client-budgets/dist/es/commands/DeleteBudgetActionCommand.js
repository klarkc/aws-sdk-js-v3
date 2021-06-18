import { __extends } from "tslib";
import { DeleteBudgetActionRequest, DeleteBudgetActionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBudgetActionCommand,
  serializeAws_json1_1DeleteBudgetActionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Deletes a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DeleteBudgetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBudgetActionCommandInput} for command's `input` shape.
 * @see {@link DeleteBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBudgetActionCommand = /** @class */ (function (_super) {
  __extends(DeleteBudgetActionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBudgetActionCommand(input) {
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
  DeleteBudgetActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DeleteBudgetActionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBudgetActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBudgetActionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBudgetActionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteBudgetActionCommand(input, context);
  };
  DeleteBudgetActionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteBudgetActionCommand(output, context);
  };
  return DeleteBudgetActionCommand;
})($Command);
export { DeleteBudgetActionCommand };
//# sourceMappingURL=DeleteBudgetActionCommand.js.map
