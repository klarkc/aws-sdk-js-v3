import { __extends } from "tslib";
import { BatchGetBuildBatchesInput, BatchGetBuildBatchesOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetBuildBatchesCommand, serializeAws_json1_1BatchGetBuildBatchesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about one or more batch builds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetBuildBatchesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetBuildBatchesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchGetBuildBatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetBuildBatchesCommandInput} for command's `input` shape.
 * @see {@link BatchGetBuildBatchesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetBuildBatchesCommand = /** @class */ (function (_super) {
    __extends(BatchGetBuildBatchesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetBuildBatchesCommand(input) {
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
    BatchGetBuildBatchesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "BatchGetBuildBatchesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetBuildBatchesInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetBuildBatchesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetBuildBatchesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetBuildBatchesCommand(input, context);
    };
    BatchGetBuildBatchesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetBuildBatchesCommand(output, context);
    };
    return BatchGetBuildBatchesCommand;
}($Command));
export { BatchGetBuildBatchesCommand };
//# sourceMappingURL=BatchGetBuildBatchesCommand.js.map