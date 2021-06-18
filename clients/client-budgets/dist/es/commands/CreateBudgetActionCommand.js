import { __extends } from "tslib";
import { CreateBudgetActionRequest, CreateBudgetActionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBudgetActionCommand,
  serializeAws_json1_1CreateBudgetActionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Creates a budget action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new CreateBudgetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBudgetActionCommandInput} for command's `input` shape.
 * @see {@link CreateBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBudgetActionCommand = /** @class */ (function (_super) {
  __extends(CreateBudgetActionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBudgetActionCommand(input) {
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
  CreateBudgetActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "CreateBudgetActionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBudgetActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBudgetActionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBudgetActionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateBudgetActionCommand(input, context);
  };
  CreateBudgetActionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateBudgetActionCommand(output, context);
  };
  return CreateBudgetActionCommand;
})($Command);
export { CreateBudgetActionCommand };
//# sourceMappingURL=CreateBudgetActionCommand.js.map
