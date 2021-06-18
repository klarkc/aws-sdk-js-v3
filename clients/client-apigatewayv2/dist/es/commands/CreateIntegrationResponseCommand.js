import { __extends } from "tslib";
import { CreateIntegrationResponseRequest, CreateIntegrationResponseResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateIntegrationResponseCommand,
  serializeAws_restJson1CreateIntegrationResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an IntegrationResponses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateIntegrationResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateIntegrationResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new CreateIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateIntegrationResponseCommand = /** @class */ (function (_super) {
  __extends(CreateIntegrationResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateIntegrationResponseCommand(input) {
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
  CreateIntegrationResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "CreateIntegrationResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateIntegrationResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateIntegrationResponseResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateIntegrationResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateIntegrationResponseCommand(input, context);
  };
  CreateIntegrationResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateIntegrationResponseCommand(output, context);
  };
  return CreateIntegrationResponseCommand;
})($Command);
export { CreateIntegrationResponseCommand };
//# sourceMappingURL=CreateIntegrationResponseCommand.js.map
