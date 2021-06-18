import { __extends } from "tslib";
import {
  DescribeSubscribersForNotificationRequest,
  DescribeSubscribersForNotificationResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSubscribersForNotificationCommand,
  serializeAws_json1_1DescribeSubscribersForNotificationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the subscribers that are associated with a notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DescribeSubscribersForNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DescribeSubscribersForNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DescribeSubscribersForNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubscribersForNotificationCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscribersForNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSubscribersForNotificationCommand = /** @class */ (function (_super) {
  __extends(DescribeSubscribersForNotificationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeSubscribersForNotificationCommand(input) {
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
  DescribeSubscribersForNotificationCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DescribeSubscribersForNotificationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeSubscribersForNotificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeSubscribersForNotificationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeSubscribersForNotificationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeSubscribersForNotificationCommand(input, context);
  };
  DescribeSubscribersForNotificationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeSubscribersForNotificationCommand(output, context);
  };
  return DescribeSubscribersForNotificationCommand;
})($Command);
export { DescribeSubscribersForNotificationCommand };
//# sourceMappingURL=DescribeSubscribersForNotificationCommand.js.map
