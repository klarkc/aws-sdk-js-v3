import { __extends } from "tslib";
import { DeleteSubscriberRequest, DeleteSubscriberResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSubscriberCommand,
  serializeAws_json1_1DeleteSubscriberCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a subscriber.</p>
 * 		       <important>
 * 			         <p>Deleting the last subscriber to a notification also deletes the notification.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, DeleteSubscriberCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, DeleteSubscriberCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new DeleteSubscriberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubscriberCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriberCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSubscriberCommand = /** @class */ (function (_super) {
  __extends(DeleteSubscriberCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteSubscriberCommand(input) {
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
  DeleteSubscriberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "DeleteSubscriberCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteSubscriberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSubscriberResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteSubscriberCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteSubscriberCommand(input, context);
  };
  DeleteSubscriberCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteSubscriberCommand(output, context);
  };
  return DeleteSubscriberCommand;
})($Command);
export { DeleteSubscriberCommand };
//# sourceMappingURL=DeleteSubscriberCommand.js.map
