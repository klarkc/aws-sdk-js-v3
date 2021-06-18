import { __extends } from "tslib";
import { ClientCertificate, GenerateClientCertificateRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GenerateClientCertificateCommand,
  serializeAws_restJson1GenerateClientCertificateCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a <a>ClientCertificate</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GenerateClientCertificateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GenerateClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GenerateClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateClientCertificateCommandInput} for command's `input` shape.
 * @see {@link GenerateClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GenerateClientCertificateCommand = /** @class */ (function (_super) {
  __extends(GenerateClientCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GenerateClientCertificateCommand(input) {
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
  GenerateClientCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GenerateClientCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GenerateClientCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ClientCertificate.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GenerateClientCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GenerateClientCertificateCommand(input, context);
  };
  GenerateClientCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GenerateClientCertificateCommand(output, context);
  };
  return GenerateClientCertificateCommand;
})($Command);
export { GenerateClientCertificateCommand };
//# sourceMappingURL=GenerateClientCertificateCommand.js.map
