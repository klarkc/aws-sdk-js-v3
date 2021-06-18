import { __extends } from "tslib";
import { GetPhoneNumberSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetPhoneNumberSettingsCommand,
  serializeAws_restJson1GetPhoneNumberSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetPhoneNumberSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetPhoneNumberSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetPhoneNumberSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPhoneNumberSettingsCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPhoneNumberSettingsCommand = /** @class */ (function (_super) {
  __extends(GetPhoneNumberSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetPhoneNumberSettingsCommand(input) {
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
  GetPhoneNumberSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetPhoneNumberSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: function (input) {
        return input;
      },
      outputFilterSensitiveLog: GetPhoneNumberSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetPhoneNumberSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetPhoneNumberSettingsCommand(input, context);
  };
  GetPhoneNumberSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetPhoneNumberSettingsCommand(output, context);
  };
  return GetPhoneNumberSettingsCommand;
})($Command);
export { GetPhoneNumberSettingsCommand };
//# sourceMappingURL=GetPhoneNumberSettingsCommand.js.map
