import { __extends } from "tslib";
import {
  GetCertificateAuthorityCertificateRequest,
  GetCertificateAuthorityCertificateResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCertificateAuthorityCertificateCommand,
  serializeAws_json1_1GetCertificateAuthorityCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the certificate and certificate chain for your private certificate authority
 * 			(CA) or one that has been shared with you. Both the certificate and the chain are base64
 * 			PEM-encoded. The chain does not include the CA certificate. Each certificate in the
 * 			chain signs the one before it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, GetCertificateAuthorityCertificateCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, GetCertificateAuthorityCertificateCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new GetCertificateAuthorityCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCertificateAuthorityCertificateCommandInput} for command's `input` shape.
 * @see {@link GetCertificateAuthorityCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCertificateAuthorityCertificateCommand = /** @class */ (function (_super) {
  __extends(GetCertificateAuthorityCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetCertificateAuthorityCertificateCommand(input) {
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
  GetCertificateAuthorityCertificateCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "GetCertificateAuthorityCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetCertificateAuthorityCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCertificateAuthorityCertificateResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetCertificateAuthorityCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetCertificateAuthorityCertificateCommand(input, context);
  };
  GetCertificateAuthorityCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetCertificateAuthorityCertificateCommand(output, context);
  };
  return GetCertificateAuthorityCertificateCommand;
})($Command);
export { GetCertificateAuthorityCertificateCommand };
//# sourceMappingURL=GetCertificateAuthorityCertificateCommand.js.map
