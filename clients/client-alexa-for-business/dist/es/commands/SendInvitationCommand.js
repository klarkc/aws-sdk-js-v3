import { __extends } from "tslib";
import { SendInvitationRequest, SendInvitationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SendInvitationCommand,
  serializeAws_json1_1SendInvitationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends an enrollment invitation email with a URL to a user. The URL is valid for 30
 *          days or until you call this operation again, whichever comes first. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SendInvitationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SendInvitationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new SendInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendInvitationCommandInput} for command's `input` shape.
 * @see {@link SendInvitationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendInvitationCommand = /** @class */ (function (_super) {
  __extends(SendInvitationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function SendInvitationCommand(input) {
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
  SendInvitationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "SendInvitationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: SendInvitationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendInvitationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  SendInvitationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1SendInvitationCommand(input, context);
  };
  SendInvitationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1SendInvitationCommand(output, context);
  };
  return SendInvitationCommand;
})($Command);
export { SendInvitationCommand };
//# sourceMappingURL=SendInvitationCommand.js.map
