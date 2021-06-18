import { __extends } from "tslib";
import { ImportApiRequest, ImportApiResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ImportApiCommand,
  serializeAws_restJson1ImportApiCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ImportApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ImportApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const command = new ImportApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportApiCommandInput} for command's `input` shape.
 * @see {@link ImportApiCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportApiCommand = /** @class */ (function (_super) {
  __extends(ImportApiCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ImportApiCommand(input) {
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
  ImportApiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApiGatewayV2Client";
    var commandName = "ImportApiCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ImportApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportApiResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ImportApiCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ImportApiCommand(input, context);
  };
  ImportApiCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ImportApiCommand(output, context);
  };
  return ImportApiCommand;
})($Command);
export { ImportApiCommand };
//# sourceMappingURL=ImportApiCommand.js.map
