import { __extends } from "tslib";
import { DeleteParameterRequest, DeleteParameterResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteParameterCommand, serializeAws_json1_1DeleteParameterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a parameter from the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteParameterCommandInput} for command's `input` shape.
 * @see {@link DeleteParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteParameterCommand = /** @class */ (function (_super) {
    __extends(DeleteParameterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteParameterCommand(input) {
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
    DeleteParameterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteParameterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteParameterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteParameterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteParameterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteParameterCommand(input, context);
    };
    DeleteParameterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteParameterCommand(output, context);
    };
    return DeleteParameterCommand;
}($Command));
export { DeleteParameterCommand };
//# sourceMappingURL=DeleteParameterCommand.js.map