import { __extends } from "tslib";
import { GetRestApisRequest, RestApis } from "../models/models_0";
import {
  deserializeAws_restJson1GetRestApisCommand,
  serializeAws_restJson1GetRestApisCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the <a>RestApis</a> resources for your collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRestApisCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRestApisCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetRestApisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRestApisCommandInput} for command's `input` shape.
 * @see {@link GetRestApisCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRestApisCommand = /** @class */ (function (_super) {
  __extends(GetRestApisCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRestApisCommand(input) {
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
  GetRestApisCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetRestApisCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRestApisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestApis.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRestApisCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRestApisCommand(input, context);
  };
  GetRestApisCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRestApisCommand(output, context);
  };
  return GetRestApisCommand;
})($Command);
export { GetRestApisCommand };
//# sourceMappingURL=GetRestApisCommand.js.map
