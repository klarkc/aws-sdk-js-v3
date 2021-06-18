import { __extends } from "tslib";
import { MethodResponse, PutMethodResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutMethodResponseCommand,
  serializeAws_restJson1PutMethodResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a <a>MethodResponse</a> to an existing <a>Method</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutMethodResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutMethodResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new PutMethodResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMethodResponseCommandInput} for command's `input` shape.
 * @see {@link PutMethodResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutMethodResponseCommand = /** @class */ (function (_super) {
  __extends(PutMethodResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutMethodResponseCommand(input) {
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
  PutMethodResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "PutMethodResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutMethodResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: MethodResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutMethodResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutMethodResponseCommand(input, context);
  };
  PutMethodResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutMethodResponseCommand(output, context);
  };
  return PutMethodResponseCommand;
})($Command);
export { PutMethodResponseCommand };
//# sourceMappingURL=PutMethodResponseCommand.js.map
