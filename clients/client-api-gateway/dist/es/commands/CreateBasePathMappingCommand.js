import { __extends } from "tslib";
import { BasePathMapping, CreateBasePathMappingRequest } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBasePathMappingCommand,
  serializeAws_restJson1CreateBasePathMappingCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new <a>BasePathMapping</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateBasePathMappingCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateBasePathMappingCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateBasePathMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBasePathMappingCommandInput} for command's `input` shape.
 * @see {@link CreateBasePathMappingCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBasePathMappingCommand = /** @class */ (function (_super) {
  __extends(CreateBasePathMappingCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBasePathMappingCommand(input) {
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
  CreateBasePathMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "CreateBasePathMappingCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBasePathMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BasePathMapping.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBasePathMappingCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateBasePathMappingCommand(input, context);
  };
  CreateBasePathMappingCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateBasePathMappingCommand(output, context);
  };
  return CreateBasePathMappingCommand;
})($Command);
export { CreateBasePathMappingCommand };
//# sourceMappingURL=CreateBasePathMappingCommand.js.map
