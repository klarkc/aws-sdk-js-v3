import { __extends } from "tslib";
import { DescribeBudgetActionRequest, DescribeBudgetActionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetActionCommand,
  serializeAws_json1_1DescribeBudgetActionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Describes a budget action detail.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetActionCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBudgetActionCommand = /** @class */ (function (_super) {
  __extends(DescribeBudgetActionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBudgetActionCommand(input) {
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
  DescribeBudgetActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DescribeBudgetActionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBudgetActionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetActionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBudgetActionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeBudgetActionCommand(input, context);
  };
  DescribeBudgetActionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeBudgetActionCommand(output, context);
  };
  return DescribeBudgetActionCommand;
})($Command);
export { DescribeBudgetActionCommand };
//# sourceMappingURL=DescribeBudgetActionCommand.js.map
