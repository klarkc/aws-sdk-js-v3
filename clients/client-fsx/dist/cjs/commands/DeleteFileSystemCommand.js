"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFileSystemCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DeleteFileSystemCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "FSxClient";
        const commandName = "DeleteFileSystemCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteFileSystemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteFileSystemResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteFileSystemCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteFileSystemCommand(output, context);
    }
}
exports.DeleteFileSystemCommand = DeleteFileSystemCommand;
//# sourceMappingURL=DeleteFileSystemCommand.js.map