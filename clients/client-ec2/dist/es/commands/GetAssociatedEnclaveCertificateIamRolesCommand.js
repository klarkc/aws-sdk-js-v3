import { __extends } from "tslib";
import { GetAssociatedEnclaveCertificateIamRolesRequest, GetAssociatedEnclaveCertificateIamRolesResult, } from "../models/models_4";
import { deserializeAws_ec2GetAssociatedEnclaveCertificateIamRolesCommand, serializeAws_ec2GetAssociatedEnclaveCertificateIamRolesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the IAM roles that are associated with the specified AWS Certificate Manager (ACM) certificate.
 * 			It also returns the name of the Amazon S3 bucket and the Amazon S3 object key where the certificate, certificate chain,
 * 			and encrypted private key bundle are stored, and the ARN of the AWS Key Management Service (KMS) customer master key (CMK)
 * 			that's used to encrypt the private key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAssociatedEnclaveCertificateIamRolesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAssociatedEnclaveCertificateIamRolesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetAssociatedEnclaveCertificateIamRolesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedEnclaveCertificateIamRolesCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedEnclaveCertificateIamRolesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssociatedEnclaveCertificateIamRolesCommand = /** @class */ (function (_super) {
    __extends(GetAssociatedEnclaveCertificateIamRolesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAssociatedEnclaveCertificateIamRolesCommand(input) {
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
    GetAssociatedEnclaveCertificateIamRolesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetAssociatedEnclaveCertificateIamRolesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAssociatedEnclaveCertificateIamRolesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAssociatedEnclaveCertificateIamRolesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAssociatedEnclaveCertificateIamRolesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetAssociatedEnclaveCertificateIamRolesCommand(input, context);
    };
    GetAssociatedEnclaveCertificateIamRolesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetAssociatedEnclaveCertificateIamRolesCommand(output, context);
    };
    return GetAssociatedEnclaveCertificateIamRolesCommand;
}($Command));
export { GetAssociatedEnclaveCertificateIamRolesCommand };
//# sourceMappingURL=GetAssociatedEnclaveCertificateIamRolesCommand.js.map