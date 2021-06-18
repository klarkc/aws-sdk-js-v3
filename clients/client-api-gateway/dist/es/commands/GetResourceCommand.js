import { __extends } from "tslib";
import { GetResourceRequest, Resource } from "../models/models_0";
import {
  deserializeAws_restJson1GetResourceCommand,
  serializeAws_restJson1GetResourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists information about a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetResourceCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetResourceCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceCommandInput} for command's `input` shape.
 * @see {@link GetResourceCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetResourceCommand = /** @class */ (function (_super) {
  __extends(GetResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetResourceCommand(input) {
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
  GetResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Resource.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetResourceCommand(input, context);
  };
  GetResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetResourceCommand(output, context);
  };
  return GetResourceCommand;
})($Command);
export { GetResourceCommand };
//# sourceMappingURL=GetResourceCommand.js.map
