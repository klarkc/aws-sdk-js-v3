"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeCertificateAuthorityCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists information about your private certificate authority (CA) or one that has been
 * 			shared with you. You specify the private CA on input by its ARN (Amazon Resource Name).
 * 			The output contains the status of your CA. This can be any of the following: </p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>CREATING</code> - ACM Private CA is creating your private certificate
 * 					authority.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>PENDING_CERTIFICATE</code> - The certificate is pending. You must use
 * 					your ACM Private CA-hosted or on-premises root or subordinate CA to sign your private CA
 * 					CSR and then import it into PCA. </p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>ACTIVE</code> - Your private CA is active.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>DISABLED</code> - Your private CA has been disabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>EXPIRED</code> - Your private CA certificate has expired.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>FAILED</code> - Your private CA has failed. Your CA can fail because of
 * 					problems such a network outage or back-end AWS failure or other errors. A
 * 					failed CA can never return to the pending state. You must create a new CA.
 * 				</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>DELETED</code> - Your private CA is within the restoration period, after
 * 					which it is permanently deleted. The length of time remaining in the CA's
 * 					restoration period is also included in this action's output.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DescribeCertificateAuthorityCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DescribeCertificateAuthorityCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const command = new DescribeCertificateAuthorityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificateAuthorityCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateAuthorityCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeCertificateAuthorityCommand extends smithy_client_1.Command {
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
    const commandName = "DescribeCertificateAuthorityCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DescribeCertificateAuthorityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1DescribeCertificateAuthorityCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1DescribeCertificateAuthorityCommand(output, context);
  }
}
exports.DescribeCertificateAuthorityCommand = DescribeCertificateAuthorityCommand;
//# sourceMappingURL=DescribeCertificateAuthorityCommand.js.map
