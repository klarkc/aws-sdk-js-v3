import { __extends } from "tslib";
import { Method, PutMethodRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutMethodCommand,
  serializeAws_restJson1PutMethodCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add a method to an existing <a>Resource</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new PutMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMethodCommandInput} for command's `input` shape.
 * @see {@link PutMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutMethodCommand = /** @class */ (function (_super) {
  __extends(PutMethodCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutMethodCommand(input) {
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
  PutMethodCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "PutMethodCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutMethodRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Method.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutMethodCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutMethodCommand(input, context);
  };
  PutMethodCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutMethodCommand(output, context);
  };
  return PutMethodCommand;
})($Command);
export { PutMethodCommand };
//# sourceMappingURL=PutMethodCommand.js.map
