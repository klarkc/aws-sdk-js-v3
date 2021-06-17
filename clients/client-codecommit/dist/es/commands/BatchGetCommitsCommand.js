import { __extends } from "tslib";
import { BatchGetCommitsInput, BatchGetCommitsOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetCommitsCommand, serializeAws_json1_1BatchGetCommitsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the contents of one or more commits in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchGetCommitsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchGetCommitsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchGetCommitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetCommitsCommandInput} for command's `input` shape.
 * @see {@link BatchGetCommitsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetCommitsCommand = /** @class */ (function (_super) {
    __extends(BatchGetCommitsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetCommitsCommand(input) {
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
    BatchGetCommitsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "BatchGetCommitsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetCommitsInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetCommitsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetCommitsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetCommitsCommand(input, context);
    };
    BatchGetCommitsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetCommitsCommand(output, context);
    };
    return BatchGetCommitsCommand;
}($Command));
export { BatchGetCommitsCommand };
//# sourceMappingURL=BatchGetCommitsCommand.js.map