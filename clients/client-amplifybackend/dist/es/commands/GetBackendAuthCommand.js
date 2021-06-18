import { __extends } from "tslib";
import { GetBackendAuthRequest, GetBackendAuthResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackendAuthCommand,
  serializeAws_restJson1GetBackendAuthCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets backend auth details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new GetBackendAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackendAuthCommandInput} for command's `input` shape.
 * @see {@link GetBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackendAuthCommand = /** @class */ (function (_super) {
  __extends(GetBackendAuthCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackendAuthCommand(input) {
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
  GetBackendAuthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "GetBackendAuthCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackendAuthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackendAuthResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackendAuthCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackendAuthCommand(input, context);
  };
  GetBackendAuthCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackendAuthCommand(output, context);
  };
  return GetBackendAuthCommand;
})($Command);
export { GetBackendAuthCommand };
//# sourceMappingURL=GetBackendAuthCommand.js.map
