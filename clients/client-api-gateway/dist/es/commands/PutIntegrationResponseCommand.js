import { __extends } from "tslib";
import { IntegrationResponse, PutIntegrationResponseRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutIntegrationResponseCommand,
  serializeAws_restJson1PutIntegrationResponseCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Represents a put integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutIntegrationResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutIntegrationResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new PutIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link PutIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutIntegrationResponseCommand = /** @class */ (function (_super) {
  __extends(PutIntegrationResponseCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutIntegrationResponseCommand(input) {
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
  PutIntegrationResponseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "PutIntegrationResponseCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutIntegrationResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: IntegrationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutIntegrationResponseCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutIntegrationResponseCommand(input, context);
  };
  PutIntegrationResponseCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutIntegrationResponseCommand(output, context);
  };
  return PutIntegrationResponseCommand;
})($Command);
export { PutIntegrationResponseCommand };
//# sourceMappingURL=PutIntegrationResponseCommand.js.map
