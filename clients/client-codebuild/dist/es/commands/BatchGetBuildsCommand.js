import { __extends } from "tslib";
import { BatchGetBuildsInput, BatchGetBuildsOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetBuildsCommand, serializeAws_json1_1BatchGetBuildsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more builds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetBuildsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetBuildsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchGetBuildsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetBuildsCommandInput} for command's `input` shape.
 * @see {@link BatchGetBuildsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetBuildsCommand = /** @class */ (function (_super) {
    __extends(BatchGetBuildsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetBuildsCommand(input) {
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
    BatchGetBuildsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "BatchGetBuildsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetBuildsInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetBuildsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetBuildsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetBuildsCommand(input, context);
    };
    BatchGetBuildsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetBuildsCommand(output, context);
    };
    return BatchGetBuildsCommand;
}($Command));
export { BatchGetBuildsCommand };
//# sourceMappingURL=BatchGetBuildsCommand.js.map