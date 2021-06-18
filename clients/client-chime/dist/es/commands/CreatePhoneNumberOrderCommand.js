import { __extends } from "tslib";
import { CreatePhoneNumberOrderRequest, CreatePhoneNumberOrderResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreatePhoneNumberOrderCommand,
  serializeAws_restJson1CreatePhoneNumberOrderCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot
 *             use the Amazon Chime Business Calling product type. For numbers outside the
 *             US,
 *             you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreatePhoneNumberOrderCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreatePhoneNumberOrderCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreatePhoneNumberOrderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePhoneNumberOrderCommandInput} for command's `input` shape.
 * @see {@link CreatePhoneNumberOrderCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePhoneNumberOrderCommand = /** @class */ (function (_super) {
  __extends(CreatePhoneNumberOrderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreatePhoneNumberOrderCommand(input) {
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
  CreatePhoneNumberOrderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "CreatePhoneNumberOrderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreatePhoneNumberOrderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePhoneNumberOrderResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreatePhoneNumberOrderCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreatePhoneNumberOrderCommand(input, context);
  };
  CreatePhoneNumberOrderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreatePhoneNumberOrderCommand(output, context);
  };
  return CreatePhoneNumberOrderCommand;
})($Command);
export { CreatePhoneNumberOrderCommand };
//# sourceMappingURL=CreatePhoneNumberOrderCommand.js.map
