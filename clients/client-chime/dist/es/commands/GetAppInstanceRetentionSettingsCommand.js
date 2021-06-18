import { __extends } from "tslib";
import { GetAppInstanceRetentionSettingsRequest, GetAppInstanceRetentionSettingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAppInstanceRetentionSettingsCommand,
  serializeAws_restJson1GetAppInstanceRetentionSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the retention settings for an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetAppInstanceRetentionSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetAppInstanceRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetAppInstanceRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppInstanceRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAppInstanceRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAppInstanceRetentionSettingsCommand = /** @class */ (function (_super) {
  __extends(GetAppInstanceRetentionSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAppInstanceRetentionSettingsCommand(input) {
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
  GetAppInstanceRetentionSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetAppInstanceRetentionSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAppInstanceRetentionSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAppInstanceRetentionSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAppInstanceRetentionSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAppInstanceRetentionSettingsCommand(input, context);
  };
  GetAppInstanceRetentionSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAppInstanceRetentionSettingsCommand(output, context);
  };
  return GetAppInstanceRetentionSettingsCommand;
})($Command);
export { GetAppInstanceRetentionSettingsCommand };
//# sourceMappingURL=GetAppInstanceRetentionSettingsCommand.js.map
