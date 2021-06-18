import { __extends } from "tslib";
import { DeleteConferenceProviderRequest, DeleteConferenceProviderResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteConferenceProviderCommand,
  serializeAws_json1_1DeleteConferenceProviderCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a conference provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new DeleteConferenceProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConferenceProviderCommand = /** @class */ (function (_super) {
  __extends(DeleteConferenceProviderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteConferenceProviderCommand(input) {
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
  DeleteConferenceProviderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AlexaForBusinessClient";
    var commandName = "DeleteConferenceProviderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteConferenceProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteConferenceProviderResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteConferenceProviderCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteConferenceProviderCommand(input, context);
  };
  DeleteConferenceProviderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteConferenceProviderCommand(output, context);
  };
  return DeleteConferenceProviderCommand;
})($Command);
export { DeleteConferenceProviderCommand };
//# sourceMappingURL=DeleteConferenceProviderCommand.js.map
