import { __extends } from "tslib";
import { BatchGetApplicationRevisionsInput, BatchGetApplicationRevisionsOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetApplicationRevisionsCommand, serializeAws_json1_1BatchGetApplicationRevisionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more application revisions. The maximum number of
 *             application revisions that can be returned is 25.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetApplicationRevisionsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetApplicationRevisionsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new BatchGetApplicationRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetApplicationRevisionsCommandInput} for command's `input` shape.
 * @see {@link BatchGetApplicationRevisionsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetApplicationRevisionsCommand = /** @class */ (function (_super) {
    __extends(BatchGetApplicationRevisionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetApplicationRevisionsCommand(input) {
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
    BatchGetApplicationRevisionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "BatchGetApplicationRevisionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetApplicationRevisionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetApplicationRevisionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetApplicationRevisionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetApplicationRevisionsCommand(input, context);
    };
    BatchGetApplicationRevisionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetApplicationRevisionsCommand(output, context);
    };
    return BatchGetApplicationRevisionsCommand;
}($Command));
export { BatchGetApplicationRevisionsCommand };
//# sourceMappingURL=BatchGetApplicationRevisionsCommand.js.map