import { __extends } from "tslib";
import { ListDeploymentsInput, ListDeploymentsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListDeploymentsCommand, serializeAws_json1_1ListDeploymentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the deployments in a deployment group for an application registered with the IAM
 *             user or AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeploymentsCommand = /** @class */ (function (_super) {
    __extends(ListDeploymentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeploymentsCommand(input) {
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
    ListDeploymentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "ListDeploymentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeploymentsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeploymentsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeploymentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDeploymentsCommand(input, context);
    };
    ListDeploymentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDeploymentsCommand(output, context);
    };
    return ListDeploymentsCommand;
}($Command));
export { ListDeploymentsCommand };
//# sourceMappingURL=ListDeploymentsCommand.js.map