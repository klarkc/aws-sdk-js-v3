import { __extends } from "tslib";
import { GetMergeConflictsInput, GetMergeConflictsOutput } from "../models/models_0";
import { deserializeAws_json1_1GetMergeConflictsCommand, serializeAws_json1_1GetMergeConflictsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetMergeConflictsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link GetMergeConflictsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMergeConflictsCommand = /** @class */ (function (_super) {
    __extends(GetMergeConflictsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMergeConflictsCommand(input) {
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
    GetMergeConflictsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetMergeConflictsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMergeConflictsInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMergeConflictsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMergeConflictsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMergeConflictsCommand(input, context);
    };
    GetMergeConflictsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMergeConflictsCommand(output, context);
    };
    return GetMergeConflictsCommand;
}($Command));
export { GetMergeConflictsCommand };
//# sourceMappingURL=GetMergeConflictsCommand.js.map