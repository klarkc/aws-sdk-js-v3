import { __extends } from "tslib";
import { UpdateMLModelInput, UpdateMLModelOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateMLModelCommand, serializeAws_json1_1UpdateMLModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p>
 *         <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new UpdateMLModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMLModelCommandInput} for command's `input` shape.
 * @see {@link UpdateMLModelCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMLModelCommand = /** @class */ (function (_super) {
    __extends(UpdateMLModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMLModelCommand(input) {
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
    UpdateMLModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "UpdateMLModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMLModelInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMLModelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMLModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMLModelCommand(input, context);
    };
    UpdateMLModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMLModelCommand(output, context);
    };
    return UpdateMLModelCommand;
}($Command));
export { UpdateMLModelCommand };
//# sourceMappingURL=UpdateMLModelCommand.js.map