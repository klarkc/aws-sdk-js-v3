"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTagsFromCertificateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class RemoveTagsFromCertificateCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "ACMClient";
    const commandName = "RemoveTagsFromCertificateCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.RemoveTagsFromCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1RemoveTagsFromCertificateCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1RemoveTagsFromCertificateCommand(output, context);
  }
}
exports.RemoveTagsFromCertificateCommand = RemoveTagsFromCertificateCommand;
//# sourceMappingURL=RemoveTagsFromCertificateCommand.js.map
