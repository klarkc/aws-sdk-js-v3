import { __extends } from "tslib";
import { ImportRestApiRequest, RestApi } from "../models/models_0";
import {
  deserializeAws_restJson1ImportRestApiCommand,
  serializeAws_restJson1ImportRestApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A feature of the API Gateway control service for creating a new API from an external API definition file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, ImportRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, ImportRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new ImportRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportRestApiCommandInput} for command's `input` shape.
 * @see {@link ImportRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportRestApiCommand = /** @class */ (function (_super) {
  __extends(ImportRestApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ImportRestApiCommand(input) {
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
  ImportRestApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "ImportRestApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ImportRestApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestApi.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ImportRestApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ImportRestApiCommand(input, context);
  };
  ImportRestApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ImportRestApiCommand(output, context);
  };
  return ImportRestApiCommand;
})($Command);
export { ImportRestApiCommand };
//# sourceMappingURL=ImportRestApiCommand.js.map
