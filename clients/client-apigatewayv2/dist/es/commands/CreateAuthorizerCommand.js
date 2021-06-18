import { __extends } from "tslib";
import { CreateAuthorizerRequest, CreateAuthorizerResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAuthorizerCommand,
  serializeAws_restJson1CreateAuthorizerCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Authorizer for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateAuthorizerCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateAuthorizerCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new CreateAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link CreateAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAuthorizerCommand = /** @class */ (function (_super) {
  __extends(CreateAuthorizerCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAuthorizerCommand(input) {
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
  CreateAuthorizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "CreateAuthorizerCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAuthorizerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAuthorizerResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAuthorizerCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAuthorizerCommand(input, context);
  };
  CreateAuthorizerCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAuthorizerCommand(output, context);
  };
  return CreateAuthorizerCommand;
})($Command);
export { CreateAuthorizerCommand };
//# sourceMappingURL=CreateAuthorizerCommand.js.map
