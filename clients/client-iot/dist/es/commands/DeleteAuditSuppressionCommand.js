import { __extends } from "tslib";
import { DeleteAuditSuppressionRequest, DeleteAuditSuppressionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAuditSuppressionCommand, serializeAws_restJson1DeleteAuditSuppressionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Deletes a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link DeleteAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAuditSuppressionCommand = /** @class */ (function (_super) {
    __extends(DeleteAuditSuppressionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAuditSuppressionCommand(input) {
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
    DeleteAuditSuppressionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteAuditSuppressionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAuditSuppressionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAuditSuppressionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAuditSuppressionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAuditSuppressionCommand(input, context);
    };
    DeleteAuditSuppressionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAuditSuppressionCommand(output, context);
    };
    return DeleteAuditSuppressionCommand;
}($Command));
export { DeleteAuditSuppressionCommand };
//# sourceMappingURL=DeleteAuditSuppressionCommand.js.map