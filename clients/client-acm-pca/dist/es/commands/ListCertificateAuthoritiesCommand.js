import { __extends } from "tslib";
import { ListCertificateAuthoritiesRequest, ListCertificateAuthoritiesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListCertificateAuthoritiesCommand,
  serializeAws_json1_1ListCertificateAuthoritiesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the private certificate authorities that you created by using the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, ListCertificateAuthoritiesCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, ListCertificateAuthoritiesCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new ListCertificateAuthoritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificateAuthoritiesCommandInput} for command's `input` shape.
 * @see {@link ListCertificateAuthoritiesCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCertificateAuthoritiesCommand = /** @class */ (function (_super) {
  __extends(ListCertificateAuthoritiesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListCertificateAuthoritiesCommand(input) {
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
  ListCertificateAuthoritiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "ListCertificateAuthoritiesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListCertificateAuthoritiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCertificateAuthoritiesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListCertificateAuthoritiesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListCertificateAuthoritiesCommand(input, context);
  };
  ListCertificateAuthoritiesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListCertificateAuthoritiesCommand(output, context);
  };
  return ListCertificateAuthoritiesCommand;
})($Command);
export { ListCertificateAuthoritiesCommand };
//# sourceMappingURL=ListCertificateAuthoritiesCommand.js.map
