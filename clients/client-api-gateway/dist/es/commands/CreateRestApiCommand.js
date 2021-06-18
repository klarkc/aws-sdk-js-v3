import { __extends } from "tslib";
import { CreateRestApiRequest, RestApi } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRestApiCommand,
  serializeAws_restJson1CreateRestApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new <a>RestApi</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRestApiCommandInput} for command's `input` shape.
 * @see {@link CreateRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRestApiCommand = /** @class */ (function (_super) {
  __extends(CreateRestApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateRestApiCommand(input) {
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
  CreateRestApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "CreateRestApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateRestApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestApi.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateRestApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateRestApiCommand(input, context);
  };
  CreateRestApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateRestApiCommand(output, context);
  };
  return CreateRestApiCommand;
})($Command);
export { CreateRestApiCommand };
//# sourceMappingURL=CreateRestApiCommand.js.map
