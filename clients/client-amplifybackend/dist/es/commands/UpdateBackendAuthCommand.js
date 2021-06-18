import { __extends } from "tslib";
import { UpdateBackendAuthRequest, UpdateBackendAuthResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBackendAuthCommand,
  serializeAws_restJson1UpdateBackendAuthCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new UpdateBackendAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackendAuthCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBackendAuthCommand = /** @class */ (function (_super) {
  __extends(UpdateBackendAuthCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateBackendAuthCommand(input) {
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
  UpdateBackendAuthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "UpdateBackendAuthCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateBackendAuthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBackendAuthResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateBackendAuthCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateBackendAuthCommand(input, context);
  };
  UpdateBackendAuthCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateBackendAuthCommand(output, context);
  };
  return UpdateBackendAuthCommand;
})($Command);
export { UpdateBackendAuthCommand };
//# sourceMappingURL=UpdateBackendAuthCommand.js.map
