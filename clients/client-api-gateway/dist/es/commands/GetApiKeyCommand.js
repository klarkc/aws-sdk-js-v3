import { __extends } from "tslib";
import { ApiKey, GetApiKeyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetApiKeyCommand,
  serializeAws_restJson1GetApiKeyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the current <a>ApiKey</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetApiKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetApiKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetApiKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiKeyCommandInput} for command's `input` shape.
 * @see {@link GetApiKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApiKeyCommand = /** @class */ (function (_super) {
  __extends(GetApiKeyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetApiKeyCommand(input) {
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
  GetApiKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetApiKeyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetApiKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApiKey.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetApiKeyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetApiKeyCommand(input, context);
  };
  GetApiKeyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetApiKeyCommand(output, context);
  };
  return GetApiKeyCommand;
})($Command);
export { GetApiKeyCommand };
//# sourceMappingURL=GetApiKeyCommand.js.map
