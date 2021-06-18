import { __extends } from "tslib";
import { PutRetentionSettingsRequest, PutRetentionSettingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1PutRetentionSettingsCommand,
  serializeAws_restJson1PutRetentionSettingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/cloudtrail.html">Logging Amazon Chime API Calls with AWS CloudTrail</a>
 * in the
 * <i>Amazon Chime Administration Guide</i>
 * .
 * </p>
 *
 *          <p>
 * To turn off existing retention settings, remove the number of days from the corresponding
 * <b>RetentionDays</b>
 * field in the
 * <b>RetentionSettings</b>
 * object. For more information about retention settings, see
 * <a href="https://docs.aws.amazon.com/chime/latest/ag/chat-retention.html">Managing Chat Retention Policies</a>
 * in the
 * <i>Amazon Chime Administration Guide</i>
 * .
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutRetentionSettingsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutRetentionSettingsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutRetentionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionSettingsCommandInput} for command's `input` shape.
 * @see {@link PutRetentionSettingsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRetentionSettingsCommand = /** @class */ (function (_super) {
  __extends(PutRetentionSettingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutRetentionSettingsCommand(input) {
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
  PutRetentionSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "PutRetentionSettingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutRetentionSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutRetentionSettingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutRetentionSettingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutRetentionSettingsCommand(input, context);
  };
  PutRetentionSettingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutRetentionSettingsCommand(output, context);
  };
  return PutRetentionSettingsCommand;
})($Command);
export { PutRetentionSettingsCommand };
//# sourceMappingURL=PutRetentionSettingsCommand.js.map
