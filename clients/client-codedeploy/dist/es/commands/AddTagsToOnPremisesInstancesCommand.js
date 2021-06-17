import { __extends } from "tslib";
import { AddTagsToOnPremisesInstancesInput } from "../models/models_0";
import { deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand, serializeAws_json1_1AddTagsToOnPremisesInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds tags to on-premises instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, AddTagsToOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, AddTagsToOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new AddTagsToOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link AddTagsToOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddTagsToOnPremisesInstancesCommand = /** @class */ (function (_super) {
    __extends(AddTagsToOnPremisesInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddTagsToOnPremisesInstancesCommand(input) {
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
    AddTagsToOnPremisesInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "AddTagsToOnPremisesInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsToOnPremisesInstancesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsToOnPremisesInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddTagsToOnPremisesInstancesCommand(input, context);
    };
    AddTagsToOnPremisesInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddTagsToOnPremisesInstancesCommand(output, context);
    };
    return AddTagsToOnPremisesInstancesCommand;
}($Command));
export { AddTagsToOnPremisesInstancesCommand };
//# sourceMappingURL=AddTagsToOnPremisesInstancesCommand.js.map