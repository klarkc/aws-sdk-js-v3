import { __extends } from "tslib";
import { BatchGetApplicationsInput, BatchGetApplicationsOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetApplicationsCommand, serializeAws_json1_1BatchGetApplicationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more applications. The maximum number of applications
 *             that can be returned is 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetApplicationsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetApplicationsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new BatchGetApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetApplicationsCommandInput} for command's `input` shape.
 * @see {@link BatchGetApplicationsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetApplicationsCommand = /** @class */ (function (_super) {
    __extends(BatchGetApplicationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetApplicationsCommand(input) {
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
    BatchGetApplicationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "BatchGetApplicationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetApplicationsInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetApplicationsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetApplicationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetApplicationsCommand(input, context);
    };
    BatchGetApplicationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetApplicationsCommand(output, context);
    };
    return BatchGetApplicationsCommand;
}($Command));
export { BatchGetApplicationsCommand };
//# sourceMappingURL=BatchGetApplicationsCommand.js.map