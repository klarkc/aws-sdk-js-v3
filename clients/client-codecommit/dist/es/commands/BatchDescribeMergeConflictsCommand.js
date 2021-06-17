import { __extends } from "tslib";
import { BatchDescribeMergeConflictsInput, BatchDescribeMergeConflictsOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchDescribeMergeConflictsCommand, serializeAws_json1_1BatchDescribeMergeConflictsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchDescribeMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchDescribeMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchDescribeMergeConflictsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDescribeMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeMergeConflictsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDescribeMergeConflictsCommand = /** @class */ (function (_super) {
    __extends(BatchDescribeMergeConflictsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDescribeMergeConflictsCommand(input) {
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
    BatchDescribeMergeConflictsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "BatchDescribeMergeConflictsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDescribeMergeConflictsInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDescribeMergeConflictsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDescribeMergeConflictsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchDescribeMergeConflictsCommand(input, context);
    };
    BatchDescribeMergeConflictsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchDescribeMergeConflictsCommand(output, context);
    };
    return BatchDescribeMergeConflictsCommand;
}($Command));
export { BatchDescribeMergeConflictsCommand };
//# sourceMappingURL=BatchDescribeMergeConflictsCommand.js.map