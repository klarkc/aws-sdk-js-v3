import { __extends } from "tslib";
import { CreateScheduledAuditRequest, CreateScheduledAuditResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateScheduledAuditCommand, serializeAws_restJson1CreateScheduledAuditCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a scheduled audit that is run at a specified
 *           time interval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateScheduledAuditCommand = /** @class */ (function (_super) {
    __extends(CreateScheduledAuditCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateScheduledAuditCommand(input) {
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
    CreateScheduledAuditCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateScheduledAuditCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateScheduledAuditRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateScheduledAuditResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateScheduledAuditCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateScheduledAuditCommand(input, context);
    };
    CreateScheduledAuditCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateScheduledAuditCommand(output, context);
    };
    return CreateScheduledAuditCommand;
}($Command));
export { CreateScheduledAuditCommand };
//# sourceMappingURL=CreateScheduledAuditCommand.js.map