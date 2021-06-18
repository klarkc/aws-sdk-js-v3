import { __extends } from "tslib";
import { ClientCertificate, GetClientCertificateRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetClientCertificateCommand,
  serializeAws_restJson1GetClientCertificateCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the current <a>ClientCertificate</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetClientCertificateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClientCertificateCommandInput} for command's `input` shape.
 * @see {@link GetClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetClientCertificateCommand = /** @class */ (function (_super) {
  __extends(GetClientCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetClientCertificateCommand(input) {
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
  GetClientCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "GetClientCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetClientCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ClientCertificate.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetClientCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetClientCertificateCommand(input, context);
  };
  GetClientCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetClientCertificateCommand(output, context);
  };
  return GetClientCertificateCommand;
})($Command);
export { GetClientCertificateCommand };
//# sourceMappingURL=GetClientCertificateCommand.js.map
