import { __extends } from "tslib";
import { UpdateBackendAPIRequest, UpdateBackendAPIResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBackendAPICommand,
  serializeAws_restJson1UpdateBackendAPICommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendAPICommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendAPICommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new UpdateBackendAPICommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackendAPICommandInput} for command's `input` shape.
 * @see {@link UpdateBackendAPICommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBackendAPICommand = /** @class */ (function (_super) {
  __extends(UpdateBackendAPICommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateBackendAPICommand(input) {
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
  UpdateBackendAPICommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "UpdateBackendAPICommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateBackendAPIRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBackendAPIResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateBackendAPICommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateBackendAPICommand(input, context);
  };
  UpdateBackendAPICommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateBackendAPICommand(output, context);
  };
  return UpdateBackendAPICommand;
})($Command);
export { UpdateBackendAPICommand };
//# sourceMappingURL=UpdateBackendAPICommand.js.map
