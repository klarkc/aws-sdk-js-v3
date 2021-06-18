import { __extends } from "tslib";
import { CreateSubscriberRequest, CreateSubscriberResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSubscriberCommand,
  serializeAws_json1_1CreateSubscriberCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a subscriber. You must create the associated budget and notification before you create the subscriber.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BudgetsClient, CreateSubscriberCommand } from "@aws-sdk/client-budgets"; // ES Modules import
 * // const { BudgetsClient, CreateSubscriberCommand } = require("@aws-sdk/client-budgets"); // CommonJS import
 * const client = new BudgetsClient(config);
 * const command = new CreateSubscriberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubscriberCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriberCommandOutput} for command's `response` shape.
 * @see {@link BudgetsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSubscriberCommand = /** @class */ (function (_super) {
  __extends(CreateSubscriberCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateSubscriberCommand(input) {
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
  CreateSubscriberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "BudgetsClient";
    var commandName = "CreateSubscriberCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateSubscriberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSubscriberResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateSubscriberCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CreateSubscriberCommand(input, context);
  };
  CreateSubscriberCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CreateSubscriberCommand(output, context);
  };
  return CreateSubscriberCommand;
})($Command);
export { CreateSubscriberCommand };
//# sourceMappingURL=CreateSubscriberCommand.js.map
