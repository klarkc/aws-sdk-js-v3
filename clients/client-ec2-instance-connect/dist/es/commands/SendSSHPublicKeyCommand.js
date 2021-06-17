import { __extends } from "tslib";
import { SendSSHPublicKeyRequest, SendSSHPublicKeyResponse } from "../models/models_0";
import { deserializeAws_json1_1SendSSHPublicKeyCommand, serializeAws_json1_1SendSSHPublicKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Pushes an SSH public key to the specified EC2 instance for use by the specified user.
 *             The key remains for 60 seconds. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html">Connect to
 *                 your Linux instance using EC2 Instance Connect</a> in the <i>Amazon EC2
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2InstanceConnectClient, SendSSHPublicKeyCommand } from "@aws-sdk/client-ec2-instance-connect"; // ES Modules import
 * // const { EC2InstanceConnectClient, SendSSHPublicKeyCommand } = require("@aws-sdk/client-ec2-instance-connect"); // CommonJS import
 * const client = new EC2InstanceConnectClient(config);
 * const command = new SendSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link SendSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link EC2InstanceConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendSSHPublicKeyCommand = /** @class */ (function (_super) {
    __extends(SendSSHPublicKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendSSHPublicKeyCommand(input) {
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
    SendSSHPublicKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2InstanceConnectClient";
        var commandName = "SendSSHPublicKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendSSHPublicKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendSSHPublicKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendSSHPublicKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SendSSHPublicKeyCommand(input, context);
    };
    SendSSHPublicKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SendSSHPublicKeyCommand(output, context);
    };
    return SendSSHPublicKeyCommand;
}($Command));
export { SendSSHPublicKeyCommand };
//# sourceMappingURL=SendSSHPublicKeyCommand.js.map