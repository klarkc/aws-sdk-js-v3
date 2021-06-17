import { __extends } from "tslib";
import { UpdateAuditSuppressionRequest, UpdateAuditSuppressionResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateAuditSuppressionCommand, serializeAws_restJson1UpdateAuditSuppressionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Updates a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link UpdateAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAuditSuppressionCommand = /** @class */ (function (_super) {
    __extends(UpdateAuditSuppressionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAuditSuppressionCommand(input) {
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
    UpdateAuditSuppressionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateAuditSuppressionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAuditSuppressionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAuditSuppressionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAuditSuppressionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateAuditSuppressionCommand(input, context);
    };
    UpdateAuditSuppressionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateAuditSuppressionCommand(output, context);
    };
    return UpdateAuditSuppressionCommand;
}($Command));
export { UpdateAuditSuppressionCommand };
//# sourceMappingURL=UpdateAuditSuppressionCommand.js.map