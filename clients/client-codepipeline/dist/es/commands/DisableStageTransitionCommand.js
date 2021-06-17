import { __extends } from "tslib";
import { DisableStageTransitionInput } from "../models/models_0";
import { deserializeAws_json1_1DisableStageTransitionCommand, serializeAws_json1_1DisableStageTransitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Prevents artifacts in a pipeline from transitioning to the next stage in the
 *             pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DisableStageTransitionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DisableStageTransitionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new DisableStageTransitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableStageTransitionCommandInput} for command's `input` shape.
 * @see {@link DisableStageTransitionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableStageTransitionCommand = /** @class */ (function (_super) {
    __extends(DisableStageTransitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableStageTransitionCommand(input) {
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
    DisableStageTransitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "DisableStageTransitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableStageTransitionInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableStageTransitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableStageTransitionCommand(input, context);
    };
    DisableStageTransitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableStageTransitionCommand(output, context);
    };
    return DisableStageTransitionCommand;
}($Command));
export { DisableStageTransitionCommand };
//# sourceMappingURL=DisableStageTransitionCommand.js.map