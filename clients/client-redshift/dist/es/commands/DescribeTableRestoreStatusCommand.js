import { __extends } from "tslib";
import { DescribeTableRestoreStatusMessage, TableRestoreStatusMessage } from "../models/models_1";
import { deserializeAws_queryDescribeTableRestoreStatusCommand, serializeAws_queryDescribeTableRestoreStatusCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value
 *             for the <code>TableRestoreRequestId</code> parameter, then
 *                 <code>DescribeTableRestoreStatus</code> returns the status of all table restore
 *             requests ordered by the date and time of the request in ascending order. Otherwise
 *                 <code>DescribeTableRestoreStatus</code> returns the status of the table specified by
 *                 <code>TableRestoreRequestId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeTableRestoreStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeTableRestoreStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTableRestoreStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeTableRestoreStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTableRestoreStatusCommand(input) {
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
    DescribeTableRestoreStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeTableRestoreStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTableRestoreStatusMessage.filterSensitiveLog,
            outputFilterSensitiveLog: TableRestoreStatusMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTableRestoreStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeTableRestoreStatusCommand(input, context);
    };
    DescribeTableRestoreStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeTableRestoreStatusCommand(output, context);
    };
    return DescribeTableRestoreStatusCommand;
}($Command));
export { DescribeTableRestoreStatusCommand };
//# sourceMappingURL=DescribeTableRestoreStatusCommand.js.map