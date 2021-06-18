import { __extends } from "tslib";
import { Authorizer, GetAuthorizerRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetAuthorizerCommand,
  serializeAws_restJson1GetAuthorizerCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe an existing <a>Authorizer</a> resource.</p>
 *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html">AWS CLI</a></div>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetAuthorizerCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetAuthorizerCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAuthorizerCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAuthorizerCommand = /** @class */ (function (_super) {
  __extends(GetAuthorizerCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAuthorizerCommand(input) {
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
  GetAuthorizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetAuthorizerCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAuthorizerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Authorizer.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAuthorizerCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAuthorizerCommand(input, context);
  };
  GetAuthorizerCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAuthorizerCommand(output, context);
  };
  return GetAuthorizerCommand;
})($Command);
export { GetAuthorizerCommand };
//# sourceMappingURL=GetAuthorizerCommand.js.map
