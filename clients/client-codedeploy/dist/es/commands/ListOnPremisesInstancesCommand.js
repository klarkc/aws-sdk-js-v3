import { __extends } from "tslib";
import { ListOnPremisesInstancesInput, ListOnPremisesInstancesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListOnPremisesInstancesCommand, serializeAws_json1_1ListOnPremisesInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of names for one or more on-premises instances.</p>
 *         <p>Unless otherwise specified, both registered and deregistered on-premises instance
 *             names are listed. To list only registered or deregistered on-premises instance names,
 *             use the registration status parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link ListOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOnPremisesInstancesCommand = /** @class */ (function (_super) {
    __extends(ListOnPremisesInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOnPremisesInstancesCommand(input) {
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
    ListOnPremisesInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "ListOnPremisesInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOnPremisesInstancesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListOnPremisesInstancesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOnPremisesInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOnPremisesInstancesCommand(input, context);
    };
    ListOnPremisesInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOnPremisesInstancesCommand(output, context);
    };
    return ListOnPremisesInstancesCommand;
}($Command));
export { ListOnPremisesInstancesCommand };
//# sourceMappingURL=ListOnPremisesInstancesCommand.js.map