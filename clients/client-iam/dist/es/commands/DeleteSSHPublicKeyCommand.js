import { __extends } from "tslib";
import { DeleteSSHPublicKeyRequest } from "../models/models_0";
import { deserializeAws_queryDeleteSSHPublicKeyCommand, serializeAws_queryDeleteSSHPublicKeyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified SSH public key.</p>
 *         <p>The SSH public key deleted by this operation is used only for authenticating the
 *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for
 *                 SSH connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSSHPublicKeyCommand = /** @class */ (function (_super) {
    __extends(DeleteSSHPublicKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSSHPublicKeyCommand(input) {
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
    DeleteSSHPublicKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteSSHPublicKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSSHPublicKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSSHPublicKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteSSHPublicKeyCommand(input, context);
    };
    DeleteSSHPublicKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteSSHPublicKeyCommand(output, context);
    };
    return DeleteSSHPublicKeyCommand;
}($Command));
export { DeleteSSHPublicKeyCommand };
//# sourceMappingURL=DeleteSSHPublicKeyCommand.js.map