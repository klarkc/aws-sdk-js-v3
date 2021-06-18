import { __extends } from "tslib";
import { GetPhoneNumberRequest, GetPhoneNumberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetPhoneNumberCommand,
  serializeAws_restJson1GetPhoneNumberCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetPhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetPhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetPhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPhoneNumberCommand = /** @class */ (function (_super) {
  __extends(GetPhoneNumberCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetPhoneNumberCommand(input) {
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
  GetPhoneNumberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetPhoneNumberCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetPhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPhoneNumberResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetPhoneNumberCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetPhoneNumberCommand(input, context);
  };
  GetPhoneNumberCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetPhoneNumberCommand(output, context);
  };
  return GetPhoneNumberCommand;
})($Command);
export { GetPhoneNumberCommand };
//# sourceMappingURL=GetPhoneNumberCommand.js.map
