import { __extends } from "tslib";
import { GetPasswordDataRequest, GetPasswordDataResult } from "../models/models_4";
import { deserializeAws_ec2GetPasswordDataCommand, serializeAws_ec2GetPasswordDataCommand } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the encrypted administrator password for a running Windows instance.</p>
 *         <p>The Windows password is generated at boot by the <code>EC2Config</code> service or
 *                 <code>EC2Launch</code> scripts (Windows Server 2016 and later). This usually only
 *             happens the first time an instance is launched. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/UsingConfig_WinAMI.html">EC2Config</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2launch.html">EC2Launch</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 *         <p>For the <code>EC2Config</code> service, the password is not generated for rebundled
 *             AMIs unless <code>Ec2SetPassword</code> is enabled before bundling.</p>
 *         <p>The password is encrypted using the key pair that you specified when you launched the
 *             instance. You must provide the corresponding key pair file.</p>
 *         <p>When you launch an instance, password generation and encryption may take a few
 *             minutes. If you try to retrieve the password before it's available, the output returns
 *             an empty string. We recommend that you wait up to 15 minutes after launching an instance
 *             before trying to retrieve the generated password.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetPasswordDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetPasswordDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetPasswordDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPasswordDataCommandInput} for command's `input` shape.
 * @see {@link GetPasswordDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPasswordDataCommand = /** @class */ (function (_super) {
    __extends(GetPasswordDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPasswordDataCommand(input) {
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
    GetPasswordDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "GetPasswordDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPasswordDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPasswordDataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPasswordDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2GetPasswordDataCommand(input, context);
    };
    GetPasswordDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2GetPasswordDataCommand(output, context);
    };
    return GetPasswordDataCommand;
}($Command));
export { GetPasswordDataCommand };
//# sourceMappingURL=GetPasswordDataCommand.js.map