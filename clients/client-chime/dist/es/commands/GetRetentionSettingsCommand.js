import { __extends } from "tslib";
import { GetRetentionSettingsRequest, GetRetentionSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRetentionSettingsCommand,
  serializeAws_restJson1GetRetentionSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a>
 * in the
 * <i>Amazon Chime Administration Guide</i>
 * .
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetRetentionSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRetentionSettingsCommand = /** @class */ (function (_super) {
  __extends(GetRetentionSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRetentionSettingsCommand(input) {
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
  GetRetentionSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetRetentionSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRetentionSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRetentionSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRetentionSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRetentionSettingsCommand(input, context);
  };
  GetRetentionSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRetentionSettingsCommand(output, context);
  };
  return GetRetentionSettingsCommand;
})($Command);
export { GetRetentionSettingsCommand };
//# sourceMappingURL=GetRetentionSettingsCommand.js.map
