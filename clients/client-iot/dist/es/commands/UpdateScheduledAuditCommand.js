import { __extends } from "tslib";
import { UpdateScheduledAuditRequest, UpdateScheduledAuditResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateScheduledAuditCommand, serializeAws_restJson1UpdateScheduledAuditCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a scheduled audit, including which checks are performed and
 *           how often the audit takes place.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateScheduledAuditCommand = /** @class */ (function (_super) {
    __extends(UpdateScheduledAuditCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateScheduledAuditCommand(input) {
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
    UpdateScheduledAuditCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateScheduledAuditCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateScheduledAuditRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateScheduledAuditResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateScheduledAuditCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateScheduledAuditCommand(input, context);
    };
    UpdateScheduledAuditCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateScheduledAuditCommand(output, context);
    };
    return UpdateScheduledAuditCommand;
}($Command));
export { UpdateScheduledAuditCommand };
//# sourceMappingURL=UpdateScheduledAuditCommand.js.map