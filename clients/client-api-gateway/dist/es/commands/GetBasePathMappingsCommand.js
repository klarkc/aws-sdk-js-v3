import { __extends } from "tslib";
import { BasePathMappings, GetBasePathMappingsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetBasePathMappingsCommand,
  serializeAws_restJson1GetBasePathMappingsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Represents a collection of <a>BasePathMapping</a> resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetBasePathMappingsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetBasePathMappingsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetBasePathMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBasePathMappingsCommandInput} for command's `input` shape.
 * @see {@link GetBasePathMappingsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBasePathMappingsCommand = /** @class */ (function (_super) {
  __extends(GetBasePathMappingsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBasePathMappingsCommand(input) {
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
  GetBasePathMappingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetBasePathMappingsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBasePathMappingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BasePathMappings.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBasePathMappingsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBasePathMappingsCommand(input, context);
  };
  GetBasePathMappingsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBasePathMappingsCommand(output, context);
  };
  return GetBasePathMappingsCommand;
})($Command);
export { GetBasePathMappingsCommand };
//# sourceMappingURL=GetBasePathMappingsCommand.js.map
