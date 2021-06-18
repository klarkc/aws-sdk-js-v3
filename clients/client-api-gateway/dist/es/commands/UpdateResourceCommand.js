import { __extends } from "tslib";
import { Resource, UpdateResourceRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateResourceCommand,
  serializeAws_restJson1UpdateResourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes information about a <a>Resource</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateResourceCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateResourceCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateResourceCommand = /** @class */ (function (_super) {
  __extends(UpdateResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateResourceCommand(input) {
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
  UpdateResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Resource.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateResourceCommand(input, context);
  };
  UpdateResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateResourceCommand(output, context);
  };
  return UpdateResourceCommand;
})($Command);
export { UpdateResourceCommand };
//# sourceMappingURL=UpdateResourceCommand.js.map
