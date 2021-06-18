import { __extends } from "tslib";
import { BasePathMapping, UpdateBasePathMappingRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBasePathMappingCommand,
  serializeAws_restJson1UpdateBasePathMappingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes information about the <a>BasePathMapping</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateBasePathMappingCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateBasePathMappingCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateBasePathMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBasePathMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateBasePathMappingCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBasePathMappingCommand = /** @class */ (function (_super) {
  __extends(UpdateBasePathMappingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateBasePathMappingCommand(input) {
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
  UpdateBasePathMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateBasePathMappingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateBasePathMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BasePathMapping.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateBasePathMappingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateBasePathMappingCommand(input, context);
  };
  UpdateBasePathMappingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateBasePathMappingCommand(output, context);
  };
  return UpdateBasePathMappingCommand;
})($Command);
export { UpdateBasePathMappingCommand };
//# sourceMappingURL=UpdateBasePathMappingCommand.js.map
