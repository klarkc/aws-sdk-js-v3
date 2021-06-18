import { __extends } from "tslib";
import { GetProxySessionRequest, GetProxySessionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetProxySessionCommand,
  serializeAws_restJson1GetProxySessionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the specified proxy session details for the specified Amazon Chime Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetProxySessionCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetProxySessionCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetProxySessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProxySessionCommandInput} for command's `input` shape.
 * @see {@link GetProxySessionCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProxySessionCommand = /** @class */ (function (_super) {
  __extends(GetProxySessionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetProxySessionCommand(input) {
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
  GetProxySessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ChimeClient";
    var commandName = "GetProxySessionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetProxySessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProxySessionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetProxySessionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetProxySessionCommand(input, context);
  };
  GetProxySessionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetProxySessionCommand(output, context);
  };
  return GetProxySessionCommand;
})($Command);
export { GetProxySessionCommand };
//# sourceMappingURL=GetProxySessionCommand.js.map
