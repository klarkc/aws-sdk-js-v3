import { __extends } from "tslib";
import { DeleteNotificationRequest, DeleteNotificationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteNotificationCommand,
  serializeAws_json1_1DeleteNotificationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a notification.</p>
 * 		       <important>
 * 			         <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteNotificationCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteNotificationCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DeleteNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNotificationCommand = /** @class */ (function (_super) {
  __extends(DeleteNotificationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteNotificationCommand(input) {
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
  DeleteNotificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DeleteNotificationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteNotificationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNotificationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteNotificationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteNotificationCommand(input, context);
  };
  DeleteNotificationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteNotificationCommand(output, context);
  };
  return DeleteNotificationCommand;
})($Command);
export { DeleteNotificationCommand };
//# sourceMappingURL=DeleteNotificationCommand.js.map
