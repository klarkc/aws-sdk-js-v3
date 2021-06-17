import { __extends } from "tslib";
import { DeleteMitigationActionRequest, DeleteMitigationActionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteMitigationActionCommand, serializeAws_restJson1DeleteMitigationActionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a defined mitigation action from your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteMitigationActionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteMitigationActionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteMitigationActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMitigationActionCommandInput} for command's `input` shape.
 * @see {@link DeleteMitigationActionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMitigationActionCommand = /** @class */ (function (_super) {
    __extends(DeleteMitigationActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMitigationActionCommand(input) {
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
    DeleteMitigationActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteMitigationActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMitigationActionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMitigationActionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMitigationActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteMitigationActionCommand(input, context);
    };
    DeleteMitigationActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteMitigationActionCommand(output, context);
    };
    return DeleteMitigationActionCommand;
}($Command));
export { DeleteMitigationActionCommand };
//# sourceMappingURL=DeleteMitigationActionCommand.js.map