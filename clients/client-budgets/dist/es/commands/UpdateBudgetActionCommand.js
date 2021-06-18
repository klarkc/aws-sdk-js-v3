import { __extends } from "tslib";
import { UpdateBudgetActionRequest, UpdateBudgetActionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateBudgetActionCommand,
  serializeAws_json1_1UpdateBudgetActionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Updates a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, UpdateBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, UpdateBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new UpdateBudgetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBudgetActionCommandInput} for command's `input` shape.
 * @see {@link UpdateBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBudgetActionCommand = /** @class */ (function (_super) {
  __extends(UpdateBudgetActionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateBudgetActionCommand(input) {
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
  UpdateBudgetActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "UpdateBudgetActionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateBudgetActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBudgetActionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateBudgetActionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateBudgetActionCommand(input, context);
  };
  UpdateBudgetActionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateBudgetActionCommand(output, context);
  };
  return UpdateBudgetActionCommand;
})($Command);
export { UpdateBudgetActionCommand };
//# sourceMappingURL=UpdateBudgetActionCommand.js.map
