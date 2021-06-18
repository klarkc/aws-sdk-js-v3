import { __extends } from "tslib";
import { GatewayResponses, GetGatewayResponsesRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetGatewayResponsesCommand,
  serializeAws_restJson1GetGatewayResponsesCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetGatewayResponsesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetGatewayResponsesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetGatewayResponsesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGatewayResponsesCommandInput} for command's `input` shape.
 * @see {@link GetGatewayResponsesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGatewayResponsesCommand = /** @class */ (function (_super) {
  __extends(GetGatewayResponsesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetGatewayResponsesCommand(input) {
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
  GetGatewayResponsesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetGatewayResponsesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetGatewayResponsesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GatewayResponses.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetGatewayResponsesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetGatewayResponsesCommand(input, context);
  };
  GetGatewayResponsesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetGatewayResponsesCommand(output, context);
  };
  return GetGatewayResponsesCommand;
})($Command);
export { GetGatewayResponsesCommand };
//# sourceMappingURL=GetGatewayResponsesCommand.js.map
