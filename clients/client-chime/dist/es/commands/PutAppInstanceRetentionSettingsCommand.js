import { __extends } from "tslib";
import { PutAppInstanceRetentionSettingsRequest, PutAppInstanceRetentionSettingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1PutAppInstanceRetentionSettingsCommand,
  serializeAws_restJson1PutAppInstanceRetentionSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the amount of time in days that a given <code>AppInstance</code> retains data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutAppInstanceRetentionSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutAppInstanceRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutAppInstanceRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppInstanceRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAppInstanceRetentionSettingsCommand = /** @class */ (function (_super) {
  __extends(PutAppInstanceRetentionSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutAppInstanceRetentionSettingsCommand(input) {
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
  PutAppInstanceRetentionSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "PutAppInstanceRetentionSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutAppInstanceRetentionSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAppInstanceRetentionSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutAppInstanceRetentionSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutAppInstanceRetentionSettingsCommand(input, context);
  };
  PutAppInstanceRetentionSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutAppInstanceRetentionSettingsCommand(output, context);
  };
  return PutAppInstanceRetentionSettingsCommand;
})($Command);
export { PutAppInstanceRetentionSettingsCommand };
//# sourceMappingURL=PutAppInstanceRetentionSettingsCommand.js.map
