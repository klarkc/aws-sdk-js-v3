import { __extends } from "tslib";
import { MergePullRequestByThreeWayInput, MergePullRequestByThreeWayOutput } from "../models/models_1";
import { deserializeAws_json1_1MergePullRequestByThreeWayCommand, serializeAws_json1_1MergePullRequestByThreeWayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attempts to merge the source commit of a pull request into the specified destination
 *             branch for that pull request at the specified commit using the three-way merge strategy. If the merge is successful, it closes the pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, MergePullRequestByThreeWayCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, MergePullRequestByThreeWayCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new MergePullRequestByThreeWayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergePullRequestByThreeWayCommandInput} for command's `input` shape.
 * @see {@link MergePullRequestByThreeWayCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MergePullRequestByThreeWayCommand = /** @class */ (function (_super) {
    __extends(MergePullRequestByThreeWayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MergePullRequestByThreeWayCommand(input) {
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
    MergePullRequestByThreeWayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "MergePullRequestByThreeWayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MergePullRequestByThreeWayInput.filterSensitiveLog,
            outputFilterSensitiveLog: MergePullRequestByThreeWayOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MergePullRequestByThreeWayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1MergePullRequestByThreeWayCommand(input, context);
    };
    MergePullRequestByThreeWayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1MergePullRequestByThreeWayCommand(output, context);
    };
    return MergePullRequestByThreeWayCommand;
}($Command));
export { MergePullRequestByThreeWayCommand };
//# sourceMappingURL=MergePullRequestByThreeWayCommand.js.map