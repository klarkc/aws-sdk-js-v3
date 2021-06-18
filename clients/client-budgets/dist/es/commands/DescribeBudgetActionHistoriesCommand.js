import { __extends } from "tslib";
import { DescribeBudgetActionHistoriesRequest, DescribeBudgetActionHistoriesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBudgetActionHistoriesCommand,
  serializeAws_json1_1DescribeBudgetActionHistoriesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *          Describes a budget action history detail.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeBudgetActionHistoriesCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeBudgetActionHistoriesCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeBudgetActionHistoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBudgetActionHistoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeBudgetActionHistoriesCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBudgetActionHistoriesCommand = /** @class */ (function (_super) {
  __extends(DescribeBudgetActionHistoriesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeBudgetActionHistoriesCommand(input) {
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
  DescribeBudgetActionHistoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DescribeBudgetActionHistoriesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeBudgetActionHistoriesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBudgetActionHistoriesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeBudgetActionHistoriesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeBudgetActionHistoriesCommand(input, context);
  };
  DescribeBudgetActionHistoriesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeBudgetActionHistoriesCommand(output, context);
  };
  return DescribeBudgetActionHistoriesCommand;
})($Command);
export { DescribeBudgetActionHistoriesCommand };
//# sourceMappingURL=DescribeBudgetActionHistoriesCommand.js.map
