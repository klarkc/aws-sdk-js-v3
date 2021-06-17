import { __extends } from "tslib";
import { ListBranchesInput, ListBranchesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListBranchesCommand, serializeAws_json1_1ListBranchesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more branches in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListBranchesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListBranchesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListBranchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBranchesCommandInput} for command's `input` shape.
 * @see {@link ListBranchesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBranchesCommand = /** @class */ (function (_super) {
    __extends(ListBranchesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBranchesCommand(input) {
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
    ListBranchesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "ListBranchesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBranchesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListBranchesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBranchesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListBranchesCommand(input, context);
    };
    ListBranchesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListBranchesCommand(output, context);
    };
    return ListBranchesCommand;
}($Command));
export { ListBranchesCommand };
//# sourceMappingURL=ListBranchesCommand.js.map