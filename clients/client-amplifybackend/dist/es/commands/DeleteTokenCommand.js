import { __extends } from "tslib";
import { DeleteTokenRequest, DeleteTokenResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteTokenCommand,
  serializeAws_restJson1DeleteTokenCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the challenge token based on the given appId and sessionId.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, DeleteTokenCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, DeleteTokenCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new DeleteTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteTokenCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTokenCommand = /** @class */ (function (_super) {
  __extends(DeleteTokenCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteTokenCommand(input) {
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
  DeleteTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "DeleteTokenCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTokenResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteTokenCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteTokenCommand(input, context);
  };
  DeleteTokenCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteTokenCommand(output, context);
  };
  return DeleteTokenCommand;
})($Command);
export { DeleteTokenCommand };
//# sourceMappingURL=DeleteTokenCommand.js.map
