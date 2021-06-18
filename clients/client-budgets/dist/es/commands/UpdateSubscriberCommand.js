import { __extends } from "tslib";
import { UpdateSubscriberRequest, UpdateSubscriberResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSubscriberCommand,
  serializeAws_json1_1UpdateSubscriberCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a subscriber.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, UpdateSubscriberCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, UpdateSubscriberCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new UpdateSubscriberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSubscriberCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriberCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSubscriberCommand = /** @class */ (function (_super) {
  __extends(UpdateSubscriberCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateSubscriberCommand(input) {
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
  UpdateSubscriberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "UpdateSubscriberCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateSubscriberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSubscriberResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateSubscriberCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateSubscriberCommand(input, context);
  };
  UpdateSubscriberCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateSubscriberCommand(output, context);
  };
  return UpdateSubscriberCommand;
})($Command);
export { UpdateSubscriberCommand };
//# sourceMappingURL=UpdateSubscriberCommand.js.map
