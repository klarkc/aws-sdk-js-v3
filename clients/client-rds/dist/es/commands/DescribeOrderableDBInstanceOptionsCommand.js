import { __extends } from "tslib";
import { DescribeOrderableDBInstanceOptionsMessage, OrderableDBInstanceOptionsMessage } from "../models/models_1";
import { deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand, serializeAws_queryDescribeOrderableDBInstanceOptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of orderable DB instance options for the specified engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOrderableDBInstanceOptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOrderableDBInstanceOptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeOrderableDBInstanceOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrderableDBInstanceOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableDBInstanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrderableDBInstanceOptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeOrderableDBInstanceOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrderableDBInstanceOptionsCommand(input) {
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
    DescribeOrderableDBInstanceOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeOrderableDBInstanceOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrderableDBInstanceOptionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: OrderableDBInstanceOptionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrderableDBInstanceOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeOrderableDBInstanceOptionsCommand(input, context);
    };
    DescribeOrderableDBInstanceOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand(output, context);
    };
    return DescribeOrderableDBInstanceOptionsCommand;
}($Command));
export { DescribeOrderableDBInstanceOptionsCommand };
//# sourceMappingURL=DescribeOrderableDBInstanceOptionsCommand.js.map