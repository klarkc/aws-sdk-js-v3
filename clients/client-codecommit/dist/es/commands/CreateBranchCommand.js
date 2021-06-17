import { __extends } from "tslib";
import { CreateBranchInput } from "../models/models_0";
import { deserializeAws_json1_1CreateBranchCommand, serializeAws_json1_1CreateBranchCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a branch in a repository and points the branch to a commit.</p>
 *         <note>
 *             <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateBranchCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateBranchCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreateBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBranchCommandInput} for command's `input` shape.
 * @see {@link CreateBranchCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBranchCommand = /** @class */ (function (_super) {
    __extends(CreateBranchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBranchCommand(input) {
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
    CreateBranchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "CreateBranchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBranchInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBranchCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateBranchCommand(input, context);
    };
    CreateBranchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateBranchCommand(output, context);
    };
    return CreateBranchCommand;
}($Command));
export { CreateBranchCommand };
//# sourceMappingURL=CreateBranchCommand.js.map