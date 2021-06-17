import { __extends } from "tslib";
import { CreateUnreferencedMergeCommitInput, CreateUnreferencedMergeCommitOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateUnreferencedMergeCommitCommand, serializeAws_json1_1CreateUnreferencedMergeCommitCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an unreferenced commit that represents the result of merging two branches
 *             using a specified merge strategy. This can help you determine the outcome of a potential
 *             merge. This API cannot be used with the fast-forward merge strategy because that
 *             strategy does not create a merge commit.</p>
 *         <note>
 *             <p>This unreferenced merge commit
 *         can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateUnreferencedMergeCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateUnreferencedMergeCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreateUnreferencedMergeCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUnreferencedMergeCommitCommandInput} for command's `input` shape.
 * @see {@link CreateUnreferencedMergeCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUnreferencedMergeCommitCommand = /** @class */ (function (_super) {
    __extends(CreateUnreferencedMergeCommitCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUnreferencedMergeCommitCommand(input) {
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
    CreateUnreferencedMergeCommitCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "CreateUnreferencedMergeCommitCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUnreferencedMergeCommitInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUnreferencedMergeCommitOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUnreferencedMergeCommitCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateUnreferencedMergeCommitCommand(input, context);
    };
    CreateUnreferencedMergeCommitCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateUnreferencedMergeCommitCommand(output, context);
    };
    return CreateUnreferencedMergeCommitCommand;
}($Command));
export { CreateUnreferencedMergeCommitCommand };
//# sourceMappingURL=CreateUnreferencedMergeCommitCommand.js.map