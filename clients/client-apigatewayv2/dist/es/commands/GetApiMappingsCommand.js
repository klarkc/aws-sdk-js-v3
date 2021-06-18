import { __extends } from "tslib";
import { GetApiMappingsRequest, GetApiMappingsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetApiMappingsCommand,
  serializeAws_restJson1GetApiMappingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets API mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApiMappingsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApiMappingsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new GetApiMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApiMappingsCommandInput} for command's `input` shape.
 * @see {@link GetApiMappingsCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApiMappingsCommand = /** @class */ (function (_super) {
  __extends(GetApiMappingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetApiMappingsCommand(input) {
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
  GetApiMappingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "GetApiMappingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetApiMappingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetApiMappingsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetApiMappingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetApiMappingsCommand(input, context);
  };
  GetApiMappingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetApiMappingsCommand(output, context);
  };
  return GetApiMappingsCommand;
})($Command);
export { GetApiMappingsCommand };
//# sourceMappingURL=GetApiMappingsCommand.js.map
