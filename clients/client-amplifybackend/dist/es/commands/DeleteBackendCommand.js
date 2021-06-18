import { __extends } from "tslib";
import { DeleteBackendRequest, DeleteBackendResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackendCommand,
  serializeAws_restJson1DeleteBackendCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an existing environment from your Amplify project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, DeleteBackendCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, DeleteBackendCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new DeleteBackendCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackendCommandInput} for command's `input` shape.
 * @see {@link DeleteBackendCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBackendCommand = /** @class */ (function (_super) {
  __extends(DeleteBackendCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBackendCommand(input) {
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
  DeleteBackendCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "DeleteBackendCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBackendRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBackendResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBackendCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteBackendCommand(input, context);
  };
  DeleteBackendCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteBackendCommand(output, context);
  };
  return DeleteBackendCommand;
})($Command);
export { DeleteBackendCommand };
//# sourceMappingURL=DeleteBackendCommand.js.map
