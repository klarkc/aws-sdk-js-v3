import { __extends } from "tslib";
import { EnableEbsEncryptionByDefaultRequest, EnableEbsEncryptionByDefaultResult } from "../models/models_4";
import { deserializeAws_ec2EnableEbsEncryptionByDefaultCommand, serializeAws_ec2EnableEbsEncryptionByDefaultCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables EBS encryption by default for your account in the current Region.</p>
 *          <p>After you enable encryption by default, the EBS volumes that you create are
 *       always encrypted, either using the default CMK or the CMK that you specified
 *       when you created each volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You can specify the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a>
 *       or <a>ResetEbsDefaultKmsKeyId</a>.</p>
 *          <p>Enabling encryption by default has no effect on the encryption status of your
 *       existing volumes.</p>
 *          <p>After you enable encryption by default, you can no longer launch instances
 *       using instance types that do not support encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported
 *         instance types</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableEbsEncryptionByDefaultCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableEbsEncryptionByDefaultCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableEbsEncryptionByDefaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableEbsEncryptionByDefaultCommandInput} for command's `input` shape.
 * @see {@link EnableEbsEncryptionByDefaultCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableEbsEncryptionByDefaultCommand = /** @class */ (function (_super) {
    __extends(EnableEbsEncryptionByDefaultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableEbsEncryptionByDefaultCommand(input) {
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
    EnableEbsEncryptionByDefaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "EnableEbsEncryptionByDefaultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableEbsEncryptionByDefaultRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableEbsEncryptionByDefaultResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableEbsEncryptionByDefaultCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2EnableEbsEncryptionByDefaultCommand(input, context);
    };
    EnableEbsEncryptionByDefaultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2EnableEbsEncryptionByDefaultCommand(output, context);
    };
    return EnableEbsEncryptionByDefaultCommand;
}($Command));
export { EnableEbsEncryptionByDefaultCommand };
//# sourceMappingURL=EnableEbsEncryptionByDefaultCommand.js.map