import { __extends } from "tslib";
import { GetCertificateRequest, GetCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCertificateCommand,
  serializeAws_json1_1GetCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an Amazon-issued certificate and its certificate chain. The chain consists of
 *       the certificate of the issuing CA and the intermediate certificates of any other subordinate
 *       CAs. All of the certificates are base64 encoded. You can use <a href="https://wiki.openssl.org/index.php/Command_Line_Utilities">OpenSSL</a> to decode
 *       the certificates and inspect individual fields.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, GetCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, GetCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new GetCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCertificateCommandInput} for command's `input` shape.
 * @see {@link GetCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCertificateCommand = /** @class */ (function (_super) {
  __extends(GetCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetCertificateCommand(input) {
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
  GetCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMClient";
    var commandName = "GetCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCertificateResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetCertificateCommand(input, context);
  };
  GetCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetCertificateCommand(output, context);
  };
  return GetCertificateCommand;
})($Command);
export { GetCertificateCommand };
//# sourceMappingURL=GetCertificateCommand.js.map
