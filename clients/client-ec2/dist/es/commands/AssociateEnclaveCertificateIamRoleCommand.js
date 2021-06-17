import { __extends } from "tslib";
import { AssociateEnclaveCertificateIamRoleRequest, AssociateEnclaveCertificateIamRoleResult, } from "../models/models_0";
import { deserializeAws_ec2AssociateEnclaveCertificateIamRoleCommand, serializeAws_ec2AssociateEnclaveCertificateIamRoleCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates an AWS Identity and Access Management (IAM) role with an AWS Certificate Manager (ACM) certificate.
 * 			This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more
 * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html">AWS Certificate
 * 				Manager for Nitro Enclaves</a> in the <i>AWS Nitro Enclaves User Guide</i>.</p>
 *
 * 		       <p>When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted
 * 			private key are placed in an Amazon S3 bucket that only the associated IAM role can access. The private key of the certificate
 * 			is encrypted with an AWS-managed KMS customer master (CMK) that has an attached attestation-based CMK policy.</p>
 *
 * 		       <p>To enable the IAM role to access the Amazon S3 object, you must grant it permission to call <code>s3:GetObject</code>
 * 			on the Amazon S3 bucket returned by the command. To enable the IAM role to access the AWS KMS CMK, you must
 * 			grant it permission to call <code>kms:Decrypt</code> on the AWS KMS CMK returned by the command. For more
 * 			information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy">
 * 				Grant the role permission to access the certificate and encryption key</a> in the
 * 			<i>AWS Nitro Enclaves User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateEnclaveCertificateIamRoleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateEnclaveCertificateIamRoleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateEnclaveCertificateIamRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEnclaveCertificateIamRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnclaveCertificateIamRoleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateEnclaveCertificateIamRoleCommand = /** @class */ (function (_super) {
    __extends(AssociateEnclaveCertificateIamRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateEnclaveCertificateIamRoleCommand(input) {
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
    AssociateEnclaveCertificateIamRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssociateEnclaveCertificateIamRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateEnclaveCertificateIamRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateEnclaveCertificateIamRoleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateEnclaveCertificateIamRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssociateEnclaveCertificateIamRoleCommand(input, context);
    };
    AssociateEnclaveCertificateIamRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssociateEnclaveCertificateIamRoleCommand(output, context);
    };
    return AssociateEnclaveCertificateIamRoleCommand;
}($Command));
export { AssociateEnclaveCertificateIamRoleCommand };
//# sourceMappingURL=AssociateEnclaveCertificateIamRoleCommand.js.map