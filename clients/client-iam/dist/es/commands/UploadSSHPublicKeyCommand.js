import { __extends } from "tslib";
import { UploadSSHPublicKeyRequest, UploadSSHPublicKeyResponse } from "../models/models_1";
import { deserializeAws_queryUploadSSHPublicKeyCommand, serializeAws_queryUploadSSHPublicKeyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Uploads an SSH public key and associates it with the specified IAM user.</p>
 *         <p>The SSH public key uploaded by this operation can be used only for authenticating the
 *             associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for
 *                 SSH connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UploadSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UploadSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link UploadSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UploadSSHPublicKeyCommand = /** @class */ (function (_super) {
    __extends(UploadSSHPublicKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UploadSSHPublicKeyCommand(input) {
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
    UploadSSHPublicKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UploadSSHPublicKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UploadSSHPublicKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UploadSSHPublicKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UploadSSHPublicKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUploadSSHPublicKeyCommand(input, context);
    };
    UploadSSHPublicKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUploadSSHPublicKeyCommand(output, context);
    };
    return UploadSSHPublicKeyCommand;
}($Command));
export { UploadSSHPublicKeyCommand };
//# sourceMappingURL=UploadSSHPublicKeyCommand.js.map