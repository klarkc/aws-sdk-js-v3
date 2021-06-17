import { __extends } from "tslib";
import { ListSSHPublicKeysRequest, ListSSHPublicKeysResponse } from "../models/models_0";
import { deserializeAws_queryListSSHPublicKeysCommand, serializeAws_queryListSSHPublicKeysCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the SSH public keys associated with the specified IAM
 *             user. If none exists, the operation returns an empty list.</p>
 *         <p>The SSH public keys returned by this operation are used only for authenticating the
 *             IAM user to an AWS CodeCommit repository. For more information about using SSH keys to
 *             authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for
 *                 SSH connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
 *         <p>Although each user is limited to a small number of keys, you can still paginate the
 *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSSHPublicKeysCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSSHPublicKeysCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListSSHPublicKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSSHPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListSSHPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSSHPublicKeysCommand = /** @class */ (function (_super) {
    __extends(ListSSHPublicKeysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSSHPublicKeysCommand(input) {
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
    ListSSHPublicKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "ListSSHPublicKeysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSSHPublicKeysRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSSHPublicKeysResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSSHPublicKeysCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListSSHPublicKeysCommand(input, context);
    };
    ListSSHPublicKeysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListSSHPublicKeysCommand(output, context);
    };
    return ListSSHPublicKeysCommand;
}($Command));
export { ListSSHPublicKeysCommand };
//# sourceMappingURL=ListSSHPublicKeysCommand.js.map