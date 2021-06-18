import { __extends } from "tslib";
import { RemoveTagsFromCertificateRequest } from "../models/models_0";
import {
  deserializeAws_json1_1RemoveTagsFromCertificateCommand,
  serializeAws_json1_1RemoveTagsFromCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If
 *       you do not specify the value portion of the tag when calling this function, the tag will be
 *       removed regardless of value. If you specify a value, the tag is removed only if it is
 *       associated with the specified value. </p>
 *
 *          <p>To add tags to a certificate, use the <a>AddTagsToCertificate</a> action. To
 *       view all of the tags that have been applied to a specific ACM certificate, use the <a>ListTagsForCertificate</a> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, RemoveTagsFromCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, RemoveTagsFromCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new RemoveTagsFromCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromCertificateCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveTagsFromCertificateCommand = /** @class */ (function (_super) {
  __extends(RemoveTagsFromCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function RemoveTagsFromCertificateCommand(input) {
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
  RemoveTagsFromCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMClient";
    var commandName = "RemoveTagsFromCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: RemoveTagsFromCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  RemoveTagsFromCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1RemoveTagsFromCertificateCommand(input, context);
  };
  RemoveTagsFromCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1RemoveTagsFromCertificateCommand(output, context);
  };
  return RemoveTagsFromCertificateCommand;
})($Command);
export { RemoveTagsFromCertificateCommand };
//# sourceMappingURL=RemoveTagsFromCertificateCommand.js.map
