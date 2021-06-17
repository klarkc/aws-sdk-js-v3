import { __extends } from "tslib";
import { DeleteHumanTaskUiRequest, DeleteHumanTaskUiResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteHumanTaskUiCommand, serializeAws_json1_1DeleteHumanTaskUiCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this operation to delete a human task user interface (worker task template).</p>
 *          <p>
 *       To see a list of human task user interfaces
 *       (work task templates) in your account, use .
 *       When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link DeleteHumanTaskUiCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteHumanTaskUiCommand = /** @class */ (function (_super) {
    __extends(DeleteHumanTaskUiCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteHumanTaskUiCommand(input) {
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
    DeleteHumanTaskUiCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteHumanTaskUiCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteHumanTaskUiRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteHumanTaskUiResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteHumanTaskUiCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteHumanTaskUiCommand(input, context);
    };
    DeleteHumanTaskUiCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteHumanTaskUiCommand(output, context);
    };
    return DeleteHumanTaskUiCommand;
}($Command));
export { DeleteHumanTaskUiCommand };
//# sourceMappingURL=DeleteHumanTaskUiCommand.js.map