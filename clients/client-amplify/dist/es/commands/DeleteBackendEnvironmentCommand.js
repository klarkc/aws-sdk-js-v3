import { __extends } from "tslib";
import { DeleteBackendEnvironmentRequest, DeleteBackendEnvironmentResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackendEnvironmentCommand,
  serializeAws_restJson1DeleteBackendEnvironmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes a backend environment for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteBackendEnvironmentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteBackendEnvironmentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new DeleteBackendEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackendEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteBackendEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBackendEnvironmentCommand = /** @class */ (function (_super) {
  __extends(DeleteBackendEnvironmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBackendEnvironmentCommand(input) {
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
  DeleteBackendEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "DeleteBackendEnvironmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBackendEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBackendEnvironmentResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBackendEnvironmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteBackendEnvironmentCommand(input, context);
  };
  DeleteBackendEnvironmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteBackendEnvironmentCommand(output, context);
  };
  return DeleteBackendEnvironmentCommand;
})($Command);
export { DeleteBackendEnvironmentCommand };
//# sourceMappingURL=DeleteBackendEnvironmentCommand.js.map
