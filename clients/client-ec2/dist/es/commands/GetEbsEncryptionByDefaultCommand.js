import { __extends } from "tslib";
import { GetEbsEncryptionByDefaultRequest, GetEbsEncryptionByDefaultResult } from "../models/models_4";
import { deserializeAws_ec2GetEbsEncryptionByDefaultCommand, serializeAws_ec2GetEbsEncryptionByDefaultCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes whether EBS encryption by default is enabled for your account in the current
 *       Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetEbsEncryptionByDefaultCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetEbsEncryptionByDefaultCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetEbsEncryptionByDefaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEbsEncryptionByDefaultCommandInput} for command's `input` shape.
 * @see {@link GetEbsEncryptionByDefaultCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEbsEncryptionByDefaultCommand = /** @class */ (function (_super) {
    __extends(GetEbsEncryptionByDefaultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEbsEncryptionByDefaultCommand(input) {
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
    GetEbsEncryptionByDefaultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetEbsEncryptionByDefaultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEbsEncryptionByDefaultRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEbsEncryptionByDefaultResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEbsEncryptionByDefaultCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetEbsEncryptionByDefaultCommand(input, context);
    };
    GetEbsEncryptionByDefaultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetEbsEncryptionByDefaultCommand(output, context);
    };
    return GetEbsEncryptionByDefaultCommand;
}($Command));
export { GetEbsEncryptionByDefaultCommand };
//# sourceMappingURL=GetEbsEncryptionByDefaultCommand.js.map