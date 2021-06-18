import { __extends } from "tslib";
import { RemoveBackendConfigRequest, RemoveBackendConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveBackendConfigCommand,
  serializeAws_restJson1RemoveBackendConfigCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the AWS resources that are required to access the Amplify Admin UI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, RemoveBackendConfigCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, RemoveBackendConfigCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new RemoveBackendConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveBackendConfigCommandInput} for command's `input` shape.
 * @see {@link RemoveBackendConfigCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveBackendConfigCommand = /** @class */ (function (_super) {
  __extends(RemoveBackendConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RemoveBackendConfigCommand(input) {
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
  RemoveBackendConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "RemoveBackendConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RemoveBackendConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveBackendConfigResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RemoveBackendConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RemoveBackendConfigCommand(input, context);
  };
  RemoveBackendConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RemoveBackendConfigCommand(output, context);
  };
  return RemoveBackendConfigCommand;
})($Command);
export { RemoveBackendConfigCommand };
//# sourceMappingURL=RemoveBackendConfigCommand.js.map
