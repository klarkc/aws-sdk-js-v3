import { __extends } from "tslib";
import { SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse } from "../models/models_0";
import { deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand, serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Pushes an SSH public key to the specified EC2 instance. The key remains for 60
 *             seconds, which gives you 60 seconds to establish a serial console connection to the
 *             instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in
 *             the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2InstanceConnectClient, SendSerialConsoleSSHPublicKeyCommand } from "@aws-sdk/client-ec2-instance-connect"; // ES Modules import
 * // const { EC2InstanceConnectClient, SendSerialConsoleSSHPublicKeyCommand } = require("@aws-sdk/client-ec2-instance-connect"); // CommonJS import
 * const client = new EC2InstanceConnectClient(config);
 * const command = new SendSerialConsoleSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendSerialConsoleSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link SendSerialConsoleSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link EC2InstanceConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendSerialConsoleSSHPublicKeyCommand = /** @class */ (function (_super) {
    __extends(SendSerialConsoleSSHPublicKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendSerialConsoleSSHPublicKeyCommand(input) {
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
    SendSerialConsoleSSHPublicKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2InstanceConnectClient";
        var commandName = "SendSerialConsoleSSHPublicKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendSerialConsoleSSHPublicKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendSerialConsoleSSHPublicKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendSerialConsoleSSHPublicKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand(input, context);
    };
    SendSerialConsoleSSHPublicKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand(output, context);
    };
    return SendSerialConsoleSSHPublicKeyCommand;
}($Command));
export { SendSerialConsoleSSHPublicKeyCommand };
//# sourceMappingURL=SendSerialConsoleSSHPublicKeyCommand.js.map