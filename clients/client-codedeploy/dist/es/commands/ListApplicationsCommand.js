import { __extends } from "tslib";
import { ListApplicationsInput, ListApplicationsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListApplicationsCommand, serializeAws_json1_1ListApplicationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the applications registered with the IAM user or AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListApplicationsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListApplicationsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListApplicationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApplicationsCommand = /** @class */ (function (_super) {
    __extends(ListApplicationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApplicationsCommand(input) {
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
    ListApplicationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "ListApplicationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApplicationsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListApplicationsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApplicationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListApplicationsCommand(input, context);
    };
    ListApplicationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListApplicationsCommand(output, context);
    };
    return ListApplicationsCommand;
}($Command));
export { ListApplicationsCommand };
//# sourceMappingURL=ListApplicationsCommand.js.map