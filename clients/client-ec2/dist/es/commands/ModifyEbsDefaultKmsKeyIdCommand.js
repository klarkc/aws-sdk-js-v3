import { __extends } from "tslib";
import { ModifyEbsDefaultKmsKeyIdRequest, ModifyEbsDefaultKmsKeyIdResult } from "../models/models_4";
import { deserializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand, serializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the default customer master key (CMK) for EBS encryption by default for your account in this Region.</p>
 *          <p>AWS creates a unique AWS managed CMK in each Region for use with encryption by default. If
 *       you change the default CMK to a symmetric customer managed CMK, it is used instead of the AWS
 *       managed CMK. To reset the default CMK to the AWS managed CMK for EBS, use <a>ResetEbsDefaultKmsKeyId</a>. Amazon EBS does not support asymmetric CMKs.</p>
 *          <p>If you delete or disable the customer managed CMK that you specified for use with
 *       encryption by default, your instances will fail to launch.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link ModifyEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyEbsDefaultKmsKeyIdCommand = /** @class */ (function (_super) {
    __extends(ModifyEbsDefaultKmsKeyIdCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyEbsDefaultKmsKeyIdCommand(input) {
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
    ModifyEbsDefaultKmsKeyIdCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyEbsDefaultKmsKeyIdCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyEbsDefaultKmsKeyIdRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyEbsDefaultKmsKeyIdResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyEbsDefaultKmsKeyIdCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(input, context);
    };
    ModifyEbsDefaultKmsKeyIdCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyEbsDefaultKmsKeyIdCommand(output, context);
    };
    return ModifyEbsDefaultKmsKeyIdCommand;
}($Command));
export { ModifyEbsDefaultKmsKeyIdCommand };
//# sourceMappingURL=ModifyEbsDefaultKmsKeyIdCommand.js.map