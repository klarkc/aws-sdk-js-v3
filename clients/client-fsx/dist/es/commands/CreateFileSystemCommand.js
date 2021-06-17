import { __extends } from "tslib";
import { CreateFileSystemRequest, CreateFileSystemResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateFileSystemCommand, serializeAws_json1_1CreateFileSystemCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new, empty Amazon FSx file system.</p>
 *
 *         <p>If a file system with the specified client request token exists and the parameters
 *             match, <code>CreateFileSystem</code> returns the description of the existing file
 *             system. If a file system specified client request token exists and the parameters
 *             don't match, this call returns <code>IncompatibleParameterError</code>. If a file
 *             system with the specified client request token doesn't exist,
 *                 <code>CreateFileSystem</code> does the following: </p>
 *         <ul>
 *             <li>
 *                 <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an
 *                     initial lifecycle state of <code>CREATING</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Returns the description of the file system.</p>
 *             </li>
 *          </ul>
 *
 *         <p>This operation requires a client request token in the request that Amazon FSx uses
 *             to ensure idempotent creation. This means that calling the operation multiple times with
 *             the same client request token has no effect. By using the idempotent operation, you can
 *             retry a <code>CreateFileSystem</code> operation without the risk of creating an extra
 *             file system. This approach can be useful when an initial call fails in a way that makes
 *             it unclear whether a file system was created. Examples are if a transport level timeout
 *             occurred, or your connection was reset. If you use the same client request token and the
 *             initial call created a file system, the client receives success as long as the
 *             parameters are the same.</p>
 *         <note>
 *             <p>The <code>CreateFileSystem</code> call returns while the file system's
 *                 lifecycle state is still <code>CREATING</code>. You can check the file-system
 *                 creation status by calling the <a>DescribeFileSystems</a> operation,
 *                 which returns the file system state along with other information.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateFileSystemCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateFileSystemCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateFileSystemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFileSystemCommandInput} for command's `input` shape.
 * @see {@link CreateFileSystemCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFileSystemCommand = /** @class */ (function (_super) {
    __extends(CreateFileSystemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFileSystemCommand(input) {
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
    CreateFileSystemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "CreateFileSystemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFileSystemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFileSystemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFileSystemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateFileSystemCommand(input, context);
    };
    CreateFileSystemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateFileSystemCommand(output, context);
    };
    return CreateFileSystemCommand;
}($Command));
export { CreateFileSystemCommand };
//# sourceMappingURL=CreateFileSystemCommand.js.map