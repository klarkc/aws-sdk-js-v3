import { __extends } from "tslib";
import { BatchGetReportsInput, BatchGetReportsOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetReportsCommand, serializeAws_json1_1BatchGetReportsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Returns an array of reports.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetReportsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetReportsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchGetReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetReportsCommandInput} for command's `input` shape.
 * @see {@link BatchGetReportsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetReportsCommand = /** @class */ (function (_super) {
    __extends(BatchGetReportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetReportsCommand(input) {
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
    BatchGetReportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "BatchGetReportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetReportsInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetReportsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetReportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetReportsCommand(input, context);
    };
    BatchGetReportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetReportsCommand(output, context);
    };
    return BatchGetReportsCommand;
}($Command));
export { BatchGetReportsCommand };
//# sourceMappingURL=BatchGetReportsCommand.js.map