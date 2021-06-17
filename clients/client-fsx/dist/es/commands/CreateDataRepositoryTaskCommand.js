import { __extends } from "tslib";
import { CreateDataRepositoryTaskRequest, CreateDataRepositoryTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDataRepositoryTaskCommand, serializeAws_json1_1CreateDataRepositoryTaskCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon FSx for Lustre data repository task. You use data repository tasks
 *             to perform bulk operations between your Amazon FSx file system and its linked data
 *             repository. An example of a data repository task is
 *             exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to its linked data repository. A
 *                 <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not
 *             linked to the FSx file system. To learn more about data repository tasks, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>.
 *             To learn more about linking a data repository to your file system, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-fs-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateDataRepositoryTaskCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateDataRepositoryTaskCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateDataRepositoryTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataRepositoryTaskCommandInput} for command's `input` shape.
 * @see {@link CreateDataRepositoryTaskCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDataRepositoryTaskCommand = /** @class */ (function (_super) {
    __extends(CreateDataRepositoryTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDataRepositoryTaskCommand(input) {
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
    CreateDataRepositoryTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FSxClient";
        var commandName = "CreateDataRepositoryTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDataRepositoryTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDataRepositoryTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDataRepositoryTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDataRepositoryTaskCommand(input, context);
    };
    CreateDataRepositoryTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDataRepositoryTaskCommand(output, context);
    };
    return CreateDataRepositoryTaskCommand;
}($Command));
export { CreateDataRepositoryTaskCommand };
//# sourceMappingURL=CreateDataRepositoryTaskCommand.js.map