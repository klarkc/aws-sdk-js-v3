import { __extends } from "tslib";
import { GetPhoneNumberOrderRequest, GetPhoneNumberOrderResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetPhoneNumberOrderCommand,
  serializeAws_restJson1GetPhoneNumberOrderCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details for the specified phone number order, such as the order creation timestamp, phone
 *             numbers in E.164 format, product type, and order status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetPhoneNumberOrderCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetPhoneNumberOrderCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetPhoneNumberOrderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPhoneNumberOrderCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberOrderCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPhoneNumberOrderCommand = /** @class */ (function (_super) {
  __extends(GetPhoneNumberOrderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetPhoneNumberOrderCommand(input) {
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
  GetPhoneNumberOrderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetPhoneNumberOrderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetPhoneNumberOrderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPhoneNumberOrderResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetPhoneNumberOrderCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetPhoneNumberOrderCommand(input, context);
  };
  GetPhoneNumberOrderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetPhoneNumberOrderCommand(output, context);
  };
  return GetPhoneNumberOrderCommand;
})($Command);
export { GetPhoneNumberOrderCommand };
//# sourceMappingURL=GetPhoneNumberOrderCommand.js.map
