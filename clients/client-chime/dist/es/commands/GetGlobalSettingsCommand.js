import { __extends } from "tslib";
import { GetGlobalSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetGlobalSettingsCommand,
  serializeAws_restJson1GetGlobalSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business
 *             Calling and Amazon Chime Voice Connector settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetGlobalSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetGlobalSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link GetGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGlobalSettingsCommand = /** @class */ (function (_super) {
  __extends(GetGlobalSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetGlobalSettingsCommand(input) {
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
  GetGlobalSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetGlobalSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: function (input) {
        return input;
      },
      outputFilterSensitiveLog: GetGlobalSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetGlobalSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetGlobalSettingsCommand(input, context);
  };
  GetGlobalSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetGlobalSettingsCommand(output, context);
  };
  return GetGlobalSettingsCommand;
})($Command);
export { GetGlobalSettingsCommand };
//# sourceMappingURL=GetGlobalSettingsCommand.js.map
