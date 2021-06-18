import { __extends } from "tslib";
import { RestorePhoneNumberRequest, RestorePhoneNumberResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RestorePhoneNumberCommand,
  serializeAws_restJson1RestorePhoneNumberCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Moves a phone number from the <b>Deletion queue</b> back into the
 *             phone number <b>Inventory</b>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RestorePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RestorePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new RestorePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestorePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link RestorePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestorePhoneNumberCommand = /** @class */ (function (_super) {
  __extends(RestorePhoneNumberCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RestorePhoneNumberCommand(input) {
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
  RestorePhoneNumberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "RestorePhoneNumberCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RestorePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestorePhoneNumberResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RestorePhoneNumberCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RestorePhoneNumberCommand(input, context);
  };
  RestorePhoneNumberCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RestorePhoneNumberCommand(output, context);
  };
  return RestorePhoneNumberCommand;
})($Command);
export { RestorePhoneNumberCommand };
//# sourceMappingURL=RestorePhoneNumberCommand.js.map
