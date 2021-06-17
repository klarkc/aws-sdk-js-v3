import { __extends } from "tslib";
import { DisassociateEnclaveCertificateIamRoleRequest, DisassociateEnclaveCertificateIamRoleResult, } from "../models/models_4";
import { deserializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand, serializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DisassociateEnclaveCertificateIamRoleCommand = /** @class */ (function (_super) {
    __extends(DisassociateEnclaveCertificateIamRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateEnclaveCertificateIamRoleCommand(input) {
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
    DisassociateEnclaveCertificateIamRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DisassociateEnclaveCertificateIamRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateEnclaveCertificateIamRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateEnclaveCertificateIamRoleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateEnclaveCertificateIamRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand(input, context);
    };
    DisassociateEnclaveCertificateIamRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DisassociateEnclaveCertificateIamRoleCommand(output, context);
    };
    return DisassociateEnclaveCertificateIamRoleCommand;
}($Command));
export { DisassociateEnclaveCertificateIamRoleCommand };
//# sourceMappingURL=DisassociateEnclaveCertificateIamRoleCommand.js.map