import { __extends } from "tslib";
import { DeleteFileSystemRequest, DeleteFileSystemResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteFileSystemCommand, serializeAws_json1_1DeleteFileSystemCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a file system, deleting its contents. After deletion, the file system no
 *             longer exists, and its data is gone. Any existing automatic backups will also be
 *             deleted.</p>
 *         <p>By default, when you delete an Amazon FSx for Windows File Server file system, a
 *             final backup is created upon deletion. This final backup is not subject to the file
 *             system's retention policy, and must be manually deleted.</p>
 *
 *
 *         <p>The <code>DeleteFileSystem</code> action returns while the file system has the
 *                 <code>DELETING</code> status. You can check the file system deletion status by
 *             calling the <a>DescribeFileSystems</a> action, which returns a list of file
 *             systems in your account. If you pass the file system ID for a deleted file system, the
 *                 <a>DescribeFileSystems</a> returns a <code>FileSystemNotFound</code>
 *             error.</p>
 *         <note>
 *             <p>Deleting an Amazon FSx for Lustre file system will fail with a 400 BadRequest if
 *             a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code>
 *             state.</p>
 *          </note>
 *         <important>
 *             <p>The data in a deleted file system is also deleted and can't be recovered by
 *                 any means.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteFileSystemCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DeleteFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFileSystemCommandInput} for command's `input` shape.
 * @see {@link DeleteFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFileSystemCommand = /** @class */ (function (_super) {
    __extends(DeleteFileSystemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFileSystemCommand(input) {
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
    DeleteFileSystemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "DeleteFileSystemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFileSystemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFileSystemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFileSystemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFileSystemCommand(input, context);
    };
    DeleteFileSystemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFileSystemCommand(output, context);
    };
    return DeleteFileSystemCommand;
}($Command));
export { DeleteFileSystemCommand };
//# sourceMappingURL=DeleteFileSystemCommand.js.map