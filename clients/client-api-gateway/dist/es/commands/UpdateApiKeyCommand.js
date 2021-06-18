import { __extends } from "tslib";
import { ApiKey, UpdateApiKeyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateApiKeyCommand,
  serializeAws_restJson1UpdateApiKeyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes information about an <a>ApiKey</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateApiKeyCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateApiKeyCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateApiKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApiKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateApiKeyCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApiKeyCommand = /** @class */ (function (_super) {
  __extends(UpdateApiKeyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateApiKeyCommand(input) {
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
  UpdateApiKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateApiKeyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateApiKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApiKey.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateApiKeyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateApiKeyCommand(input, context);
  };
  UpdateApiKeyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateApiKeyCommand(output, context);
  };
  return UpdateApiKeyCommand;
})($Command);
export { UpdateApiKeyCommand };
//# sourceMappingURL=UpdateApiKeyCommand.js.map
