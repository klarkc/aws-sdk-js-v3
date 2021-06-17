import { __extends } from "tslib";
import { DeleteFileSystemPolicyRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteFileSystemPolicyCommand, serializeAws_restJson1DeleteFileSystemPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the <code>FileSystemPolicy</code> for the specified file system.
 *       The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted.
 *       For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DeleteFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFileSystemPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteFileSystemPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFileSystemPolicyCommand(input) {
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
    DeleteFileSystemPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "DeleteFileSystemPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFileSystemPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFileSystemPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFileSystemPolicyCommand(input, context);
    };
    DeleteFileSystemPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFileSystemPolicyCommand(output, context);
    };
    return DeleteFileSystemPolicyCommand;
}($Command));
export { DeleteFileSystemPolicyCommand };
//# sourceMappingURL=DeleteFileSystemPolicyCommand.js.map