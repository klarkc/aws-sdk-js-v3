import { __extends } from "tslib";
import { ListDeploymentGroupsInput, ListDeploymentGroupsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListDeploymentGroupsCommand, serializeAws_json1_1ListDeploymentGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the deployment groups for an application registered with the IAM user or AWS
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentGroupsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentGroupsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListDeploymentGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeploymentGroupsCommand = /** @class */ (function (_super) {
    __extends(ListDeploymentGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeploymentGroupsCommand(input) {
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
    ListDeploymentGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "ListDeploymentGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeploymentGroupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeploymentGroupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeploymentGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDeploymentGroupsCommand(input, context);
    };
    ListDeploymentGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDeploymentGroupsCommand(output, context);
    };
    return ListDeploymentGroupsCommand;
}($Command));
export { ListDeploymentGroupsCommand };
//# sourceMappingURL=ListDeploymentGroupsCommand.js.map