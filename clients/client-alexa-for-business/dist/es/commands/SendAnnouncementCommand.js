import { __extends } from "tslib";
import { SendAnnouncementRequest, SendAnnouncementResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SendAnnouncementCommand,
  serializeAws_json1_1SendAnnouncementCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that
 *          are identified by a search or filter. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SendAnnouncementCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SendAnnouncementCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new SendAnnouncementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendAnnouncementCommandInput} for command's `input` shape.
 * @see {@link SendAnnouncementCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendAnnouncementCommand = /** @class */ (function (_super) {
  __extends(SendAnnouncementCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SendAnnouncementCommand(input) {
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
  SendAnnouncementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "SendAnnouncementCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SendAnnouncementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendAnnouncementResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SendAnnouncementCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1SendAnnouncementCommand(input, context);
  };
  SendAnnouncementCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1SendAnnouncementCommand(output, context);
  };
  return SendAnnouncementCommand;
})($Command);
export { SendAnnouncementCommand };
//# sourceMappingURL=SendAnnouncementCommand.js.map
