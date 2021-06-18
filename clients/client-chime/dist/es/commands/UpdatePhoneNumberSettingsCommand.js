import { __extends } from "tslib";
import { UpdatePhoneNumberSettingsRequest } from "../models/models_1";
import {
  deserializeAws_restJson1UpdatePhoneNumberSettingsCommand,
  serializeAws_restJson1UpdatePhoneNumberSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the phone number settings for the administrator's AWS account, such as the default
 *             outbound calling name. You can update the default outbound calling name once every seven
 *             days. Outbound calling names can take up to 72 hours to update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdatePhoneNumberSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdatePhoneNumberSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdatePhoneNumberSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePhoneNumberSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePhoneNumberSettingsCommand = /** @class */ (function (_super) {
  __extends(UpdatePhoneNumberSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdatePhoneNumberSettingsCommand(input) {
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
  UpdatePhoneNumberSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdatePhoneNumberSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdatePhoneNumberSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdatePhoneNumberSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdatePhoneNumberSettingsCommand(input, context);
  };
  UpdatePhoneNumberSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdatePhoneNumberSettingsCommand(output, context);
  };
  return UpdatePhoneNumberSettingsCommand;
})($Command);
export { UpdatePhoneNumberSettingsCommand };
//# sourceMappingURL=UpdatePhoneNumberSettingsCommand.js.map
