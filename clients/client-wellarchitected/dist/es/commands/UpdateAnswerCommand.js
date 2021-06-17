import { __extends } from "tslib";
import { UpdateAnswerInput, UpdateAnswerOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateAnswerCommand, serializeAws_restJson1UpdateAnswerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Update the answer to a specific question in a workload review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateAnswerCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateAnswerCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateAnswerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAnswerCommandInput} for command's `input` shape.
 * @see {@link UpdateAnswerCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAnswerCommand = /** @class */ (function (_super) {
    __extends(UpdateAnswerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAnswerCommand(input) {
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
    UpdateAnswerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "UpdateAnswerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAnswerInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAnswerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAnswerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAnswerCommand(input, context);
    };
    UpdateAnswerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAnswerCommand(output, context);
    };
    return UpdateAnswerCommand;
}($Command));
export { UpdateAnswerCommand };
//# sourceMappingURL=UpdateAnswerCommand.js.map