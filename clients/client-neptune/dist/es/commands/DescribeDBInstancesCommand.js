import { __extends } from "tslib";
import { DBInstanceMessage, DescribeDBInstancesMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBInstancesCommand, serializeAws_queryDescribeDBInstancesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about provisioned instances, and supports pagination.</p>
 *
 *          <note>
 *             <p>This operation can also return information for Amazon RDS instances
 *     and Amazon DocDB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBInstancesCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBInstancesCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBInstancesCommand = /** @class */ (function (_super) {
    __extends(DescribeDBInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBInstancesCommand(input) {
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
    DescribeDBInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DescribeDBInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBInstancesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBInstanceMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBInstancesCommand(input, context);
    };
    DescribeDBInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBInstancesCommand(output, context);
    };
    return DescribeDBInstancesCommand;
}($Command));
export { DescribeDBInstancesCommand };
//# sourceMappingURL=DescribeDBInstancesCommand.js.map