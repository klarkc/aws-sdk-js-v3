import { __extends } from "tslib";
import { CreateApiMappingRequest, CreateApiMappingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateApiMappingCommand,
  serializeAws_restJson1CreateApiMappingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an API mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateApiMappingCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateApiMappingCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new CreateApiMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApiMappingCommandInput} for command's `input` shape.
 * @see {@link CreateApiMappingCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApiMappingCommand = /** @class */ (function (_super) {
  __extends(CreateApiMappingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateApiMappingCommand(input) {
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
  CreateApiMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "CreateApiMappingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateApiMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateApiMappingResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateApiMappingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateApiMappingCommand(input, context);
  };
  CreateApiMappingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateApiMappingCommand(output, context);
  };
  return CreateApiMappingCommand;
})($Command);
export { CreateApiMappingCommand };
//# sourceMappingURL=CreateApiMappingCommand.js.map
