"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCertificateAuthorityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the status or configuration of a private certificate authority (CA). Your
 * 			private CA must be in the <code>ACTIVE</code> or <code>DISABLED</code> state before you
 * 			can update it. You can disable a private CA that is in the <code>ACTIVE</code> state or
 * 			make a CA that is in the <code>DISABLED</code> state active again.</p>
 *          <note>
 *                         <p>Both PCA and the IAM principal must have permission to write to
 *                         the S3 bucket that you specify. If the IAM principal making the call
 *                         does not have permission to write to the bucket, then an exception is
 *                         thrown. For more information, see <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaAuthAccess.html">Configure
 *                         Access to ACM Private CA</a>.</p>
 *                 </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, UpdateCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, UpdateCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new UpdateCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateCertificateAuthorityCommand extends smithy_client_1.Command {
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
    const clientName = "ACMPCAClient";
    const commandName = "UpdateCertificateAuthorityCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.UpdateCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1UpdateCertificateAuthorityCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1UpdateCertificateAuthorityCommand(output, context);
  }
}
exports.UpdateCertificateAuthorityCommand = UpdateCertificateAuthorityCommand;
//# sourceMappingURL=UpdateCertificateAuthorityCommand.js.map
