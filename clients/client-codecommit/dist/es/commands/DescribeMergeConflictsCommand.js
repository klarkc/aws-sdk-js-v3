import { __extends } from "tslib";
import { DescribeMergeConflictsInput, DescribeMergeConflictsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeMergeConflictsCommand, serializeAws_json1_1DescribeMergeConflictsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about one or more merge conflicts in the attempted merge of two
 *             commit specifiers using the squash or three-way merge strategy. If the merge option for
 *             the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DescribeMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DescribeMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DescribeMergeConflictsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link DescribeMergeConflictsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMergeConflictsCommand = /** @class */ (function (_super) {
    __extends(DescribeMergeConflictsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMergeConflictsCommand(input) {
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
    DescribeMergeConflictsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "DescribeMergeConflictsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMergeConflictsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMergeConflictsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMergeConflictsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMergeConflictsCommand(input, context);
    };
    DescribeMergeConflictsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMergeConflictsCommand(output, context);
    };
    return DescribeMergeConflictsCommand;
}($Command));
export { DescribeMergeConflictsCommand };
//# sourceMappingURL=DescribeMergeConflictsCommand.js.map