import { __extends } from "tslib";
import { ExecuteBudgetActionRequest, ExecuteBudgetActionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ExecuteBudgetActionCommand,
  serializeAws_json1_1ExecuteBudgetActionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Executes a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, ExecuteBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, ExecuteBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new ExecuteBudgetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteBudgetActionCommandInput} for command's `input` shape.
 * @see {@link ExecuteBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecuteBudgetActionCommand = /** @class */ (function (_super) {
  __extends(ExecuteBudgetActionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ExecuteBudgetActionCommand(input) {
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
  ExecuteBudgetActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "ExecuteBudgetActionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ExecuteBudgetActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExecuteBudgetActionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ExecuteBudgetActionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ExecuteBudgetActionCommand(input, context);
  };
  ExecuteBudgetActionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ExecuteBudgetActionCommand(output, context);
  };
  return ExecuteBudgetActionCommand;
})($Command);
export { ExecuteBudgetActionCommand };
//# sourceMappingURL=ExecuteBudgetActionCommand.js.map
