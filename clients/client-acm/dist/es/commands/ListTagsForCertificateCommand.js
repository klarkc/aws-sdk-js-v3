import { __extends } from "tslib";
import { ListTagsForCertificateRequest, ListTagsForCertificateResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTagsForCertificateCommand,
  serializeAws_json1_1ListTagsForCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the tags that have been applied to the ACM certificate. Use the certificate's
 *       Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate,
 *       use the <a>AddTagsToCertificate</a> action. To delete a tag, use the <a>RemoveTagsFromCertificate</a> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListTagsForCertificateCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListTagsForCertificateCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * const client = new ACMClient(config);
 * const command = new ListTagsForCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForCertificateCommandInput} for command's `input` shape.
 * @see {@link ListTagsForCertificateCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsForCertificateCommand = /** @class */ (function (_super) {
  __extends(ListTagsForCertificateCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListTagsForCertificateCommand(input) {
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
  ListTagsForCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ACMClient";
    var commandName = "ListTagsForCertificateCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListTagsForCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForCertificateResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListTagsForCertificateCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListTagsForCertificateCommand(input, context);
  };
  ListTagsForCertificateCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListTagsForCertificateCommand(output, context);
  };
  return ListTagsForCertificateCommand;
})($Command);
export { ListTagsForCertificateCommand };
//# sourceMappingURL=ListTagsForCertificateCommand.js.map
