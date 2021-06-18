import { __extends } from "tslib";
import { UpdateGlobalSettingsRequest } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateGlobalSettingsCommand,
  serializeAws_restJson1UpdateGlobalSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateGlobalSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateGlobalSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new UpdateGlobalSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGlobalSettingsCommand = /** @class */ (function (_super) {
  __extends(UpdateGlobalSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateGlobalSettingsCommand(input) {
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
  UpdateGlobalSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "UpdateGlobalSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateGlobalSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateGlobalSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateGlobalSettingsCommand(input, context);
  };
  UpdateGlobalSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateGlobalSettingsCommand(output, context);
  };
  return UpdateGlobalSettingsCommand;
})($Command);
export { UpdateGlobalSettingsCommand };
//# sourceMappingURL=UpdateGlobalSettingsCommand.js.map
