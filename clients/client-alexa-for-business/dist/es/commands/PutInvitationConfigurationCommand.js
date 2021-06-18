import { __extends } from "tslib";
import { PutInvitationConfigurationRequest, PutInvitationConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutInvitationConfigurationCommand,
  serializeAws_json1_1PutInvitationConfigurationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures the email template for the user enrollment invitation with the specified
 *          attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutInvitationConfigurationCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutInvitationConfigurationCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new PutInvitationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInvitationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutInvitationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutInvitationConfigurationCommand = /** @class */ (function (_super) {
  __extends(PutInvitationConfigurationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutInvitationConfigurationCommand(input) {
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
  PutInvitationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "PutInvitationConfigurationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutInvitationConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutInvitationConfigurationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutInvitationConfigurationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1PutInvitationConfigurationCommand(input, context);
  };
  PutInvitationConfigurationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1PutInvitationConfigurationCommand(output, context);
  };
  return PutInvitationConfigurationCommand;
})($Command);
export { PutInvitationConfigurationCommand };
//# sourceMappingURL=PutInvitationConfigurationCommand.js.map
