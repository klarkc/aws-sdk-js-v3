import { __extends } from "tslib";
import { FileSystemPolicyDescription, PutFileSystemPolicyRequest } from "../models/models_0";
import { deserializeAws_restJson1PutFileSystemPolicyCommand, serializeAws_restJson1PutFileSystemPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system.
 *       A file system policy is an IAM resource-based policy and can contain multiple policy statements.
 *       A file system always has exactly one file system policy, which can be the default policy or
 *       an explicit policy set or updated using this API operation.
 *       EFS file system policies have a 20,000 character limit.
 *       When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see
 *       <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>.
 *     </p>
 *          <p>EFS file system policies have a 20,000 character limit.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutFileSystemPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutFileSystemPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutFileSystemPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFileSystemPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFileSystemPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutFileSystemPolicyCommand = /** @class */ (function (_super) {
    __extends(PutFileSystemPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutFileSystemPolicyCommand(input) {
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
    PutFileSystemPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "PutFileSystemPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutFileSystemPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: FileSystemPolicyDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutFileSystemPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutFileSystemPolicyCommand(input, context);
    };
    PutFileSystemPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutFileSystemPolicyCommand(output, context);
    };
    return PutFileSystemPolicyCommand;
}($Command));
export { PutFileSystemPolicyCommand };
//# sourceMappingURL=PutFileSystemPolicyCommand.js.map