import { __extends } from "tslib";
import { ApiKeyIds, ImportApiKeysRequest } from "../models/models_0";
import {
  deserializeAws_restJson1ImportApiKeysCommand,
  serializeAws_restJson1ImportApiKeysCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Import API keys from an external source, such as a CSV-formatted file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, ImportApiKeysCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, ImportApiKeysCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new ImportApiKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportApiKeysCommandInput} for command's `input` shape.
 * @see {@link ImportApiKeysCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportApiKeysCommand = /** @class */ (function (_super) {
  __extends(ImportApiKeysCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ImportApiKeysCommand(input) {
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
  ImportApiKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "ImportApiKeysCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ImportApiKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApiKeyIds.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ImportApiKeysCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ImportApiKeysCommand(input, context);
  };
  ImportApiKeysCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ImportApiKeysCommand(output, context);
  };
  return ImportApiKeysCommand;
})($Command);
export { ImportApiKeysCommand };
//# sourceMappingURL=ImportApiKeysCommand.js.map
