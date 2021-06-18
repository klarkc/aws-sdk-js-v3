import { __extends } from "tslib";
import { BasePathMapping, GetBasePathMappingRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetBasePathMappingCommand,
  serializeAws_restJson1GetBasePathMappingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe a <a>BasePathMapping</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetBasePathMappingCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetBasePathMappingCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetBasePathMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBasePathMappingCommandInput} for command's `input` shape.
 * @see {@link GetBasePathMappingCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBasePathMappingCommand = /** @class */ (function (_super) {
  __extends(GetBasePathMappingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBasePathMappingCommand(input) {
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
  GetBasePathMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetBasePathMappingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBasePathMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BasePathMapping.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBasePathMappingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBasePathMappingCommand(input, context);
  };
  GetBasePathMappingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBasePathMappingCommand(output, context);
  };
  return GetBasePathMappingCommand;
})($Command);
export { GetBasePathMappingCommand };
//# sourceMappingURL=GetBasePathMappingCommand.js.map
