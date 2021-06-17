import { __extends } from "tslib";
import { DeleteMLModelInput, DeleteMLModelOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteMLModelCommand, serializeAws_json1_1DeleteMLModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p>
 *         <p>After using the <code>DeleteMLModel</code> operation, you can use the
 *           <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p>
 *
 *         <p>
 *             <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteMLModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMLModelCommandInput} for command's `input` shape.
 * @see {@link DeleteMLModelCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMLModelCommand = /** @class */ (function (_super) {
    __extends(DeleteMLModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMLModelCommand(input) {
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
    DeleteMLModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MachineLearningClient";
        var commandName = "DeleteMLModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMLModelInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMLModelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMLModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMLModelCommand(input, context);
    };
    DeleteMLModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMLModelCommand(output, context);
    };
    return DeleteMLModelCommand;
}($Command));
export { DeleteMLModelCommand };
//# sourceMappingURL=DeleteMLModelCommand.js.map