import { __extends } from "tslib";
import { UntagCertificateAuthorityRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UntagCertificateAuthorityCommand,
  serializeAws_json1_1UntagCertificateAuthorityCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove one or more tags from your private CA. A tag consists of a key-value pair. If
 * 			you do not specify the value portion of the tag when calling this action, the tag will
 * 			be removed regardless of value. If you specify a value, the tag is removed only if it is
 * 			associated with the specified value. To add tags to a private CA, use the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_TagCertificateAuthority.html">TagCertificateAuthority</a>. Call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_ListTags.html">ListTags</a> action to see what tags are
 * 			associated with your CA. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, UntagCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, UntagCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new UntagCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link UntagCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagCertificateAuthorityCommand = /** @class */ (function (_super) {
  __extends(UntagCertificateAuthorityCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UntagCertificateAuthorityCommand(input) {
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
  UntagCertificateAuthorityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMPCAClient";
    var commandName = "UntagCertificateAuthorityCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UntagCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UntagCertificateAuthorityCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UntagCertificateAuthorityCommand(input, context);
  };
  UntagCertificateAuthorityCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UntagCertificateAuthorityCommand(output, context);
  };
  return UntagCertificateAuthorityCommand;
})($Command);
export { UntagCertificateAuthorityCommand };
//# sourceMappingURL=UntagCertificateAuthorityCommand.js.map
