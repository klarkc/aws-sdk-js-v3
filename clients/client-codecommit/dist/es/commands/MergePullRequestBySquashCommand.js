import { __extends } from "tslib";
import { MergePullRequestBySquashInput, MergePullRequestBySquashOutput } from "../models/models_1";
import { deserializeAws_json1_1MergePullRequestBySquashCommand, serializeAws_json1_1MergePullRequestBySquashCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the squash merge strategy. If the merge is successful, it closes the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergePullRequestBySquashCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergePullRequestBySquashCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergePullRequestBySquashCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergePullRequestBySquashCommandInput} for command's `input` shape.
 * @see {@link MergePullRequestBySquashCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MergePullRequestBySquashCommand = /** @class */ (function (_super) {
    __extends(MergePullRequestBySquashCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MergePullRequestBySquashCommand(input) {
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
    MergePullRequestBySquashCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "MergePullRequestBySquashCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MergePullRequestBySquashInput.filterSensitiveLog,
            outputFilterSensitiveLog: MergePullRequestBySquashOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MergePullRequestBySquashCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1MergePullRequestBySquashCommand(input, context);
    };
    MergePullRequestBySquashCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1MergePullRequestBySquashCommand(output, context);
    };
    return MergePullRequestBySquashCommand;
}($Command));
export { MergePullRequestBySquashCommand };
//# sourceMappingURL=MergePullRequestBySquashCommand.js.map