import { __extends } from "tslib";
import { DescribeAuditFindingRequest, DescribeAuditFindingResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeAuditFindingCommand, serializeAws_restJson1DescribeAuditFindingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a single audit finding. Properties include the reason for
 *       noncompliance, the severity of the issue,
 *       and the start time
 *       when the audit that returned the
 *       finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditFindingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditFindingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuditFindingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditFindingCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditFindingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAuditFindingCommand = /** @class */ (function (_super) {
    __extends(DescribeAuditFindingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAuditFindingCommand(input) {
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
    DescribeAuditFindingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeAuditFindingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAuditFindingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAuditFindingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAuditFindingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAuditFindingCommand(input, context);
    };
    DescribeAuditFindingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAuditFindingCommand(output, context);
    };
    return DescribeAuditFindingCommand;
}($Command));
export { DescribeAuditFindingCommand };
//# sourceMappingURL=DescribeAuditFindingCommand.js.map