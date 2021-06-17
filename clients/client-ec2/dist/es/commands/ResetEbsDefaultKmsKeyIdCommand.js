import { __extends } from "tslib";
import { ResetEbsDefaultKmsKeyIdRequest, ResetEbsDefaultKmsKeyIdResult } from "../models/models_5";
import { deserializeAws_ec2ResetEbsDefaultKmsKeyIdCommand, serializeAws_ec2ResetEbsDefaultKmsKeyIdCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets the default customer master key (CMK) for EBS encryption for your account in this Region
 *       to the AWS managed CMK for EBS.</p>
 *          <p>After resetting the default CMK to the AWS managed CMK, you can continue to encrypt by a
 *       customer managed CMK by specifying it when you create the volume. For more information, see
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link ResetEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResetEbsDefaultKmsKeyIdCommand = /** @class */ (function (_super) {
    __extends(ResetEbsDefaultKmsKeyIdCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResetEbsDefaultKmsKeyIdCommand(input) {
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
    ResetEbsDefaultKmsKeyIdCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ResetEbsDefaultKmsKeyIdCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResetEbsDefaultKmsKeyIdRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ResetEbsDefaultKmsKeyIdResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResetEbsDefaultKmsKeyIdCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ResetEbsDefaultKmsKeyIdCommand(input, context);
    };
    ResetEbsDefaultKmsKeyIdCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ResetEbsDefaultKmsKeyIdCommand(output, context);
    };
    return ResetEbsDefaultKmsKeyIdCommand;
}($Command));
export { ResetEbsDefaultKmsKeyIdCommand };
//# sourceMappingURL=ResetEbsDefaultKmsKeyIdCommand.js.map