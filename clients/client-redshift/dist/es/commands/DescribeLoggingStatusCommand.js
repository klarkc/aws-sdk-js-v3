import { __extends } from "tslib";
import { DescribeLoggingStatusMessage, LoggingStatus } from "../models/models_0";
import { deserializeAws_queryDescribeLoggingStatusCommand, serializeAws_queryDescribeLoggingStatusCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes whether information, such as queries and connection attempts, is being
 *             logged for the specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeLoggingStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeLoggingStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeLoggingStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoggingStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLoggingStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeLoggingStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLoggingStatusCommand(input) {
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
    DescribeLoggingStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeLoggingStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLoggingStatusMessage.filterSensitiveLog,
            outputFilterSensitiveLog: LoggingStatus.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLoggingStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeLoggingStatusCommand(input, context);
    };
    DescribeLoggingStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeLoggingStatusCommand(output, context);
    };
    return DescribeLoggingStatusCommand;
}($Command));
export { DescribeLoggingStatusCommand };
//# sourceMappingURL=DescribeLoggingStatusCommand.js.map