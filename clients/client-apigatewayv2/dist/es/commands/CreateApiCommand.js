import { __extends } from "tslib";
import { CreateApiRequest, CreateApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateApiCommand,
  serializeAws_restJson1CreateApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Api resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new CreateApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApiCommandInput} for command's `input` shape.
 * @see {@link CreateApiCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApiCommand = /** @class */ (function (_super) {
  __extends(CreateApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateApiCommand(input) {
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
  CreateApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "CreateApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateApiResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateApiCommand(input, context);
  };
  CreateApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateApiCommand(output, context);
  };
  return CreateApiCommand;
})($Command);
export { CreateApiCommand };
//# sourceMappingURL=CreateApiCommand.js.map
