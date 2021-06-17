import { __extends } from "tslib";
import { BatchGetOnPremisesInstancesInput, BatchGetOnPremisesInstancesOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetOnPremisesInstancesCommand, serializeAws_json1_1BatchGetOnPremisesInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more on-premises instances. The maximum number of
 *             on-premises instances that can be returned is 25.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new BatchGetOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link BatchGetOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetOnPremisesInstancesCommand = /** @class */ (function (_super) {
    __extends(BatchGetOnPremisesInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetOnPremisesInstancesCommand(input) {
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
    BatchGetOnPremisesInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "BatchGetOnPremisesInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetOnPremisesInstancesInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetOnPremisesInstancesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetOnPremisesInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetOnPremisesInstancesCommand(input, context);
    };
    BatchGetOnPremisesInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetOnPremisesInstancesCommand(output, context);
    };
    return BatchGetOnPremisesInstancesCommand;
}($Command));
export { BatchGetOnPremisesInstancesCommand };
//# sourceMappingURL=BatchGetOnPremisesInstancesCommand.js.map