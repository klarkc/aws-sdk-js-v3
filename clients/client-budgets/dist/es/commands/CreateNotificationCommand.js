import { __extends } from "tslib";
import { CreateNotificationRequest, CreateNotificationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateNotificationCommand,
  serializeAws_json1_1CreateNotificationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a notification. You must create the budget before you create the associated notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new CreateNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNotificationCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateNotificationCommand = /** @class */ (function (_super) {
  __extends(CreateNotificationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateNotificationCommand(input) {
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
  CreateNotificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "CreateNotificationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateNotificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNotificationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateNotificationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateNotificationCommand(input, context);
  };
  CreateNotificationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateNotificationCommand(output, context);
  };
  return CreateNotificationCommand;
})($Command);
export { CreateNotificationCommand };
//# sourceMappingURL=CreateNotificationCommand.js.map
