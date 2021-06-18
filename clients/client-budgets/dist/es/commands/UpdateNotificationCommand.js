import { __extends } from "tslib";
import { UpdateNotificationRequest, UpdateNotificationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateNotificationCommand,
  serializeAws_json1_1UpdateNotificationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, UpdateNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, UpdateNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new UpdateNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNotificationCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateNotificationCommand = /** @class */ (function (_super) {
  __extends(UpdateNotificationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateNotificationCommand(input) {
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
  UpdateNotificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "UpdateNotificationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateNotificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNotificationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateNotificationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateNotificationCommand(input, context);
  };
  UpdateNotificationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateNotificationCommand(output, context);
  };
  return UpdateNotificationCommand;
})($Command);
export { UpdateNotificationCommand };
//# sourceMappingURL=UpdateNotificationCommand.js.map
