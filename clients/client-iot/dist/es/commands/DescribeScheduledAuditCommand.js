import { __extends } from "tslib";
import { DescribeScheduledAuditRequest, DescribeScheduledAuditResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeScheduledAuditCommand, serializeAws_restJson1DescribeScheduledAuditCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a scheduled audit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeScheduledAuditCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScheduledAuditCommand = /** @class */ (function (_super) {
    __extends(DescribeScheduledAuditCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeScheduledAuditCommand(input) {
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
    DescribeScheduledAuditCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeScheduledAuditCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeScheduledAuditRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeScheduledAuditResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeScheduledAuditCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeScheduledAuditCommand(input, context);
    };
    DescribeScheduledAuditCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeScheduledAuditCommand(output, context);
    };
    return DescribeScheduledAuditCommand;
}($Command));
export { DescribeScheduledAuditCommand };
//# sourceMappingURL=DescribeScheduledAuditCommand.js.map