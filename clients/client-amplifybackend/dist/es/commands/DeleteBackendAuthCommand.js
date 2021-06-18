import { __extends } from "tslib";
import { DeleteBackendAuthRequest, DeleteBackendAuthResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackendAuthCommand,
  serializeAws_restJson1DeleteBackendAuthCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, DeleteBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, DeleteBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new DeleteBackendAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackendAuthCommandInput} for command's `input` shape.
 * @see {@link DeleteBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBackendAuthCommand = /** @class */ (function (_super) {
  __extends(DeleteBackendAuthCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBackendAuthCommand(input) {
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
  DeleteBackendAuthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "DeleteBackendAuthCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBackendAuthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBackendAuthResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBackendAuthCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteBackendAuthCommand(input, context);
  };
  DeleteBackendAuthCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteBackendAuthCommand(output, context);
  };
  return DeleteBackendAuthCommand;
})($Command);
export { DeleteBackendAuthCommand };
//# sourceMappingURL=DeleteBackendAuthCommand.js.map
