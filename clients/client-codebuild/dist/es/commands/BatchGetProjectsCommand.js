import { __extends } from "tslib";
import { BatchGetProjectsInput, BatchGetProjectsOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetProjectsCommand, serializeAws_json1_1BatchGetProjectsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more build projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetProjectsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetProjectsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchGetProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetProjectsCommandInput} for command's `input` shape.
 * @see {@link BatchGetProjectsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetProjectsCommand = /** @class */ (function (_super) {
    __extends(BatchGetProjectsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetProjectsCommand(input) {
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
    BatchGetProjectsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "BatchGetProjectsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetProjectsInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetProjectsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetProjectsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetProjectsCommand(input, context);
    };
    BatchGetProjectsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetProjectsCommand(output, context);
    };
    return BatchGetProjectsCommand;
}($Command));
export { BatchGetProjectsCommand };
//# sourceMappingURL=BatchGetProjectsCommand.js.map