import { __extends } from "tslib";
import { DeleteScheduledAuditRequest, DeleteScheduledAuditResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteScheduledAuditCommand, serializeAws_restJson1DeleteScheduledAuditCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a scheduled audit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteScheduledAuditCommand = /** @class */ (function (_super) {
    __extends(DeleteScheduledAuditCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteScheduledAuditCommand(input) {
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
    DeleteScheduledAuditCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteScheduledAuditCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteScheduledAuditRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteScheduledAuditResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteScheduledAuditCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteScheduledAuditCommand(input, context);
    };
    DeleteScheduledAuditCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteScheduledAuditCommand(output, context);
    };
    return DeleteScheduledAuditCommand;
}($Command));
export { DeleteScheduledAuditCommand };
//# sourceMappingURL=DeleteScheduledAuditCommand.js.map