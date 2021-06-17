import { __extends } from "tslib";
import { BatchGetDeploymentsInput, BatchGetDeploymentsOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetDeploymentsCommand, serializeAws_json1_1BatchGetDeploymentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more deployments. The maximum number of deployments that
 *             can be returned is 25.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetDeploymentsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetDeploymentsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new BatchGetDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link BatchGetDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetDeploymentsCommand = /** @class */ (function (_super) {
    __extends(BatchGetDeploymentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetDeploymentsCommand(input) {
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
    BatchGetDeploymentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "BatchGetDeploymentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetDeploymentsInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetDeploymentsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetDeploymentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetDeploymentsCommand(input, context);
    };
    BatchGetDeploymentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetDeploymentsCommand(output, context);
    };
    return BatchGetDeploymentsCommand;
}($Command));
export { BatchGetDeploymentsCommand };
//# sourceMappingURL=BatchGetDeploymentsCommand.js.map