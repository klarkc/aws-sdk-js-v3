import { __extends } from "tslib";
import { GetSSHPublicKeyRequest, GetSSHPublicKeyResponse } from "../models/models_0";
import { deserializeAws_queryGetSSHPublicKeyCommand, serializeAws_queryGetSSHPublicKeyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified SSH public key, including metadata about the key.</p>
 *         <p>The SSH public key retrieved by this operation is used only for authenticating the
 *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH
 *                 connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSSHPublicKeyCommand = /** @class */ (function (_super) {
    __extends(GetSSHPublicKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSSHPublicKeyCommand(input) {
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
    GetSSHPublicKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetSSHPublicKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSSHPublicKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSSHPublicKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSSHPublicKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetSSHPublicKeyCommand(input, context);
    };
    GetSSHPublicKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetSSHPublicKeyCommand(output, context);
    };
    return GetSSHPublicKeyCommand;
}($Command));
export { GetSSHPublicKeyCommand };
//# sourceMappingURL=GetSSHPublicKeyCommand.js.map