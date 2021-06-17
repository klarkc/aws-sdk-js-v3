import { __extends } from "tslib";
import { GetEbsDefaultKmsKeyIdRequest, GetEbsDefaultKmsKeyIdResult } from "../models/models_4";
import { deserializeAws_ec2GetEbsDefaultKmsKeyIdCommand, serializeAws_ec2GetEbsDefaultKmsKeyIdCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the default customer master key (CMK) for EBS encryption by default for your account in this Region.
 *       You can change the default CMK for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or
 *       <a>ResetEbsDefaultKmsKeyId</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetEbsDefaultKmsKeyIdCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetEbsDefaultKmsKeyIdCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetEbsDefaultKmsKeyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEbsDefaultKmsKeyIdCommandInput} for command's `input` shape.
 * @see {@link GetEbsDefaultKmsKeyIdCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEbsDefaultKmsKeyIdCommand = /** @class */ (function (_super) {
    __extends(GetEbsDefaultKmsKeyIdCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEbsDefaultKmsKeyIdCommand(input) {
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
    GetEbsDefaultKmsKeyIdCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetEbsDefaultKmsKeyIdCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEbsDefaultKmsKeyIdRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEbsDefaultKmsKeyIdResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEbsDefaultKmsKeyIdCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetEbsDefaultKmsKeyIdCommand(input, context);
    };
    GetEbsDefaultKmsKeyIdCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetEbsDefaultKmsKeyIdCommand(output, context);
    };
    return GetEbsDefaultKmsKeyIdCommand;
}($Command));
export { GetEbsDefaultKmsKeyIdCommand };
//# sourceMappingURL=GetEbsDefaultKmsKeyIdCommand.js.map