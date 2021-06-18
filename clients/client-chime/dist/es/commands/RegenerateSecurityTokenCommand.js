import { __extends } from "tslib";
import { RegenerateSecurityTokenRequest, RegenerateSecurityTokenResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RegenerateSecurityTokenCommand,
  serializeAws_restJson1RegenerateSecurityTokenCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Regenerates the security token for a bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, RegenerateSecurityTokenCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, RegenerateSecurityTokenCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new RegenerateSecurityTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegenerateSecurityTokenCommandInput} for command's `input` shape.
 * @see {@link RegenerateSecurityTokenCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegenerateSecurityTokenCommand = /** @class */ (function (_super) {
  __extends(RegenerateSecurityTokenCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RegenerateSecurityTokenCommand(input) {
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
  RegenerateSecurityTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "RegenerateSecurityTokenCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RegenerateSecurityTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegenerateSecurityTokenResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RegenerateSecurityTokenCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1RegenerateSecurityTokenCommand(input, context);
  };
  RegenerateSecurityTokenCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1RegenerateSecurityTokenCommand(output, context);
  };
  return RegenerateSecurityTokenCommand;
})($Command);
export { RegenerateSecurityTokenCommand };
//# sourceMappingURL=RegenerateSecurityTokenCommand.js.map
