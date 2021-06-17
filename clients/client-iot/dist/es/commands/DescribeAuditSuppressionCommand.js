import { __extends } from "tslib";
import { DescribeAuditSuppressionRequest, DescribeAuditSuppressionResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeAuditSuppressionCommand, serializeAws_restJson1DescribeAuditSuppressionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Gets information about a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAuditSuppressionCommand = /** @class */ (function (_super) {
    __extends(DescribeAuditSuppressionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAuditSuppressionCommand(input) {
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
    DescribeAuditSuppressionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeAuditSuppressionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAuditSuppressionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAuditSuppressionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAuditSuppressionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAuditSuppressionCommand(input, context);
    };
    DescribeAuditSuppressionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAuditSuppressionCommand(output, context);
    };
    return DescribeAuditSuppressionCommand;
}($Command));
export { DescribeAuditSuppressionCommand };
//# sourceMappingURL=DescribeAuditSuppressionCommand.js.map