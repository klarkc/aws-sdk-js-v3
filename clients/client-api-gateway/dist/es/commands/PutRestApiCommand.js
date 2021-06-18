import { __extends } from "tslib";
import { PutRestApiRequest, RestApi } from "../models/models_0";
import {
  deserializeAws_restJson1PutRestApiCommand,
  serializeAws_restJson1PutRestApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A feature of the API Gateway control service for updating an existing API with an input of external API definitions.
 *             The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new PutRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRestApiCommandInput} for command's `input` shape.
 * @see {@link PutRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRestApiCommand = /** @class */ (function (_super) {
  __extends(PutRestApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PutRestApiCommand(input) {
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
  PutRestApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "PutRestApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PutRestApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestApi.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PutRestApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1PutRestApiCommand(input, context);
  };
  PutRestApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1PutRestApiCommand(output, context);
  };
  return PutRestApiCommand;
})($Command);
export { PutRestApiCommand };
//# sourceMappingURL=PutRestApiCommand.js.map
