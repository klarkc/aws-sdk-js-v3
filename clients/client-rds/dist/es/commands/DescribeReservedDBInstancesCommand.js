import { __extends } from "tslib";
import { DescribeReservedDBInstancesMessage, ReservedDBInstanceMessage } from "../models/models_1";
import { deserializeAws_queryDescribeReservedDBInstancesCommand, serializeAws_queryDescribeReservedDBInstancesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about reserved DB instances for this account, or about a specified reserved DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeReservedDBInstancesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeReservedDBInstancesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeReservedDBInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedDBInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedDBInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedDBInstancesCommand(input) {
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
    DescribeReservedDBInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeReservedDBInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedDBInstancesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ReservedDBInstanceMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedDBInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeReservedDBInstancesCommand(input, context);
    };
    DescribeReservedDBInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeReservedDBInstancesCommand(output, context);
    };
    return DescribeReservedDBInstancesCommand;
}($Command));
export { DescribeReservedDBInstancesCommand };
//# sourceMappingURL=DescribeReservedDBInstancesCommand.js.map