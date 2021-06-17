import { __extends } from "tslib";
import { RemoveTagsFromOnPremisesInstancesInput } from "../models/models_0";
import { deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand, serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes one or more tags from one or more on-premises instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, RemoveTagsFromOnPremisesInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, RemoveTagsFromOnPremisesInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new RemoveTagsFromOnPremisesInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveTagsFromOnPremisesInstancesCommandInput} for command's `input` shape.
 * @see {@link RemoveTagsFromOnPremisesInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveTagsFromOnPremisesInstancesCommand = /** @class */ (function (_super) {
    __extends(RemoveTagsFromOnPremisesInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveTagsFromOnPremisesInstancesCommand(input) {
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
    RemoveTagsFromOnPremisesInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "RemoveTagsFromOnPremisesInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveTagsFromOnPremisesInstancesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveTagsFromOnPremisesInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand(input, context);
    };
    RemoveTagsFromOnPremisesInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemoveTagsFromOnPremisesInstancesCommand(output, context);
    };
    return RemoveTagsFromOnPremisesInstancesCommand;
}($Command));
export { RemoveTagsFromOnPremisesInstancesCommand };
//# sourceMappingURL=RemoveTagsFromOnPremisesInstancesCommand.js.map