import { __extends } from "tslib";
import { DeleteActivityInput, DeleteActivityOutput } from "../models/models_0";
import { deserializeAws_json1_0DeleteActivityCommand, serializeAws_json1_0DeleteActivityCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteActivityCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteActivityCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DeleteActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteActivityCommandInput} for command's `input` shape.
 * @see {@link DeleteActivityCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteActivityCommand = /** @class */ (function (_super) {
    __extends(DeleteActivityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteActivityCommand(input) {
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
    DeleteActivityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "DeleteActivityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteActivityInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteActivityOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteActivityCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteActivityCommand(input, context);
    };
    DeleteActivityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteActivityCommand(output, context);
    };
    return DeleteActivityCommand;
}($Command));
export { DeleteActivityCommand };
//# sourceMappingURL=DeleteActivityCommand.js.map