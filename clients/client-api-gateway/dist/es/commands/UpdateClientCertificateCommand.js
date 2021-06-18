import { __extends } from "tslib";
import { ClientCertificate, UpdateClientCertificateRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateClientCertificateCommand,
  serializeAws_restJson1UpdateClientCertificateCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes information about an <a>ClientCertificate</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, UpdateClientCertificateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, UpdateClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new UpdateClientCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClientCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClientCertificateCommand = /** @class */ (function (_super) {
  __extends(UpdateClientCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateClientCertificateCommand(input) {
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
  UpdateClientCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "APIGatewayClient";
    var commandName = "UpdateClientCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateClientCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ClientCertificate.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateClientCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateClientCertificateCommand(input, context);
  };
  UpdateClientCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateClientCertificateCommand(output, context);
  };
  return UpdateClientCertificateCommand;
})($Command);
export { UpdateClientCertificateCommand };
//# sourceMappingURL=UpdateClientCertificateCommand.js.map
