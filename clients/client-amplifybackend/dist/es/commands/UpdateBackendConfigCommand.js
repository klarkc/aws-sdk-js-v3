import { __extends } from "tslib";
import { UpdateBackendConfigRequest, UpdateBackendConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBackendConfigCommand,
  serializeAws_restJson1UpdateBackendConfigCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the AWS resources that are required to access the Amplify Admin UI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, UpdateBackendConfigCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, UpdateBackendConfigCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new UpdateBackendConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackendConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateBackendConfigCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBackendConfigCommand = /** @class */ (function (_super) {
  __extends(UpdateBackendConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateBackendConfigCommand(input) {
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
  UpdateBackendConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "UpdateBackendConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateBackendConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBackendConfigResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateBackendConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateBackendConfigCommand(input, context);
  };
  UpdateBackendConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateBackendConfigCommand(output, context);
  };
  return UpdateBackendConfigCommand;
})($Command);
export { UpdateBackendConfigCommand };
//# sourceMappingURL=UpdateBackendConfigCommand.js.map
