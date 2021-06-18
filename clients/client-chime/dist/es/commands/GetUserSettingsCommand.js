import { __extends } from "tslib";
import { GetUserSettingsRequest, GetUserSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetUserSettingsCommand,
  serializeAws_restJson1GetUserSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves settings for the specified user ID, such as any associated phone number settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetUserSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetUserSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetUserSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserSettingsCommandInput} for command's `input` shape.
 * @see {@link GetUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUserSettingsCommand = /** @class */ (function (_super) {
  __extends(GetUserSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetUserSettingsCommand(input) {
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
  GetUserSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetUserSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetUserSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetUserSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetUserSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetUserSettingsCommand(input, context);
  };
  GetUserSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetUserSettingsCommand(output, context);
  };
  return GetUserSettingsCommand;
})($Command);
export { GetUserSettingsCommand };
//# sourceMappingURL=GetUserSettingsCommand.js.map
