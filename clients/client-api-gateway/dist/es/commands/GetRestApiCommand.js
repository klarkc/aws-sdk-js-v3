import { __extends } from "tslib";
import { GetRestApiRequest, RestApi } from "../models/models_0";
import {
  deserializeAws_restJson1GetRestApiCommand,
  serializeAws_restJson1GetRestApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the <a>RestApi</a> resource in the collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRestApiCommandInput} for command's `input` shape.
 * @see {@link GetRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRestApiCommand = /** @class */ (function (_super) {
  __extends(GetRestApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRestApiCommand(input) {
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
  GetRestApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetRestApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRestApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestApi.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRestApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetRestApiCommand(input, context);
  };
  GetRestApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetRestApiCommand(output, context);
  };
  return GetRestApiCommand;
})($Command);
export { GetRestApiCommand };
//# sourceMappingURL=GetRestApiCommand.js.map
