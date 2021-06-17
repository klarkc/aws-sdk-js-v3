import { __extends } from "tslib";
import { BatchDeleteBuildsInput, BatchDeleteBuildsOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchDeleteBuildsCommand, serializeAws_json1_1BatchDeleteBuildsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more builds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchDeleteBuildsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchDeleteBuildsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchDeleteBuildsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteBuildsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteBuildsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteBuildsCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteBuildsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteBuildsCommand(input) {
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
    BatchDeleteBuildsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "BatchDeleteBuildsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteBuildsInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteBuildsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteBuildsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchDeleteBuildsCommand(input, context);
    };
    BatchDeleteBuildsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchDeleteBuildsCommand(output, context);
    };
    return BatchDeleteBuildsCommand;
}($Command));
export { BatchDeleteBuildsCommand };
//# sourceMappingURL=BatchDeleteBuildsCommand.js.map