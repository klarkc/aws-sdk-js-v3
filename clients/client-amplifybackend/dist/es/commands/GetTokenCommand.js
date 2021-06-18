import { __extends } from "tslib";
import { GetTokenRequest, GetTokenResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetTokenCommand,
  serializeAws_restJson1GetTokenCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the challenge token based on the given appId and sessionId.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetTokenCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetTokenCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new GetTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTokenCommandInput} for command's `input` shape.
 * @see {@link GetTokenCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTokenCommand = /** @class */ (function (_super) {
  __extends(GetTokenCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetTokenCommand(input) {
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
  GetTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "GetTokenCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTokenResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetTokenCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetTokenCommand(input, context);
  };
  GetTokenCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetTokenCommand(output, context);
  };
  return GetTokenCommand;
})($Command);
export { GetTokenCommand };
//# sourceMappingURL=GetTokenCommand.js.map
