import { __extends } from "tslib";
import { ApiKeys, GetApiKeysRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetApiKeysCommand,
  serializeAws_restJson1GetApiKeysCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the current <a>ApiKeys</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetApiKeysCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetApiKeysCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetApiKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiKeysCommandInput} for command's `input` shape.
 * @see {@link GetApiKeysCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApiKeysCommand = /** @class */ (function (_super) {
  __extends(GetApiKeysCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetApiKeysCommand(input) {
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
  GetApiKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetApiKeysCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetApiKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApiKeys.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetApiKeysCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetApiKeysCommand(input, context);
  };
  GetApiKeysCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetApiKeysCommand(output, context);
  };
  return GetApiKeysCommand;
})($Command);
export { GetApiKeysCommand };
//# sourceMappingURL=GetApiKeysCommand.js.map
