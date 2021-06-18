import { __extends } from "tslib";
import { RestApi, UpdateRestApiRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRestApiCommand,
  serializeAws_restJson1UpdateRestApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes information about the specified API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRestApiCommandInput} for command's `input` shape.
 * @see {@link UpdateRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRestApiCommand = /** @class */ (function (_super) {
  __extends(UpdateRestApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateRestApiCommand(input) {
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
  UpdateRestApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateRestApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateRestApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestApi.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateRestApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateRestApiCommand(input, context);
  };
  UpdateRestApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateRestApiCommand(output, context);
  };
  return UpdateRestApiCommand;
})($Command);
export { UpdateRestApiCommand };
//# sourceMappingURL=UpdateRestApiCommand.js.map
