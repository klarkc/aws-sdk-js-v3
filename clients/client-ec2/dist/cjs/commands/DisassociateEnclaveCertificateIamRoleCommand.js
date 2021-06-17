"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateEnclaveCertificateIamRoleCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Disassociates an IAM role from an AWS Certificate Manager (ACM) certificate. Disassociating an IAM role
 * 			from an ACM certificate removes the Amazon S3 object that contains the certificate, certificate chain, and
 * 			encrypted private key from the Amazon S3 bucket. It also revokes the IAM role's permission to use the
 * 			AWS Key Management Service (KMS) customer master key (CMK) used to encrypt the private key. This effectively revokes the role's
 * 			permission to use the certificate. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateEnclaveCertificateIamRoleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateEnclaveCertificateIamRoleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateEnclaveCertificateIamRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateEnclaveCertificateIamRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateEnclaveCertificateIamRoleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisassociateEnclaveCertificateIamRoleCommand extends smithy_client_1.Command {
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
        const clientName = "EC2Client";
        const commandName = "DisassociateEnclaveCertificateIamRoleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.DisassociateEnclaveCertificateIamRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.DisassociateEnclaveCertificateIamRoleResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand(output, context);
    }
}
exports.DisassociateEnclaveCertificateIamRoleCommand = DisassociateEnclaveCertificateIamRoleCommand;
//# sourceMappingURL=DisassociateEnclaveCertificateIamRoleCommand.js.map