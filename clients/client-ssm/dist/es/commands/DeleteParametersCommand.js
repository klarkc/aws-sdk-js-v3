import { __extends } from "tslib";
import { DeleteParametersRequest, DeleteParametersResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteParametersCommand, serializeAws_json1_1DeleteParametersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a list of parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteParametersCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteParametersCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteParametersCommandInput} for command's `input` shape.
 * @see {@link DeleteParametersCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteParametersCommand = /** @class */ (function (_super) {
    __extends(DeleteParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteParametersCommand(input) {
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
    DeleteParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteParametersCommand(input, context);
    };
    DeleteParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteParametersCommand(output, context);
    };
    return DeleteParametersCommand;
}($Command));
export { DeleteParametersCommand };
//# sourceMappingURL=DeleteParametersCommand.js.map