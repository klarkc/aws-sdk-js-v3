import { __extends } from "tslib";
import { GetSdkRequest, SdkResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSdkCommand, serializeAws_restJson1GetSdkCommand } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetSdkCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetSdkCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetSdkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSdkCommandInput} for command's `input` shape.
 * @see {@link GetSdkCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSdkCommand = /** @class */ (function (_super) {
  __extends(GetSdkCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetSdkCommand(input) {
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
  GetSdkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetSdkCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetSdkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SdkResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetSdkCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetSdkCommand(input, context);
  };
  GetSdkCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetSdkCommand(output, context);
  };
  return GetSdkCommand;
})($Command);
export { GetSdkCommand };
//# sourceMappingURL=GetSdkCommand.js.map
