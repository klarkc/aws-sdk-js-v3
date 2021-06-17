import { __extends } from "tslib";
import { DBClusterMessage, DescribeDBClustersMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBClustersCommand, serializeAws_queryDescribeDBClustersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about provisioned DB clusters, and supports
 *       pagination.</p>
 *
 *          <note>
 *             <p>This operation can also return information for Amazon RDS clusters
 *     and Amazon DocDB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClustersCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClustersCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClustersCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBClustersCommand = /** @class */ (function (_super) {
    __extends(DescribeDBClustersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBClustersCommand(input) {
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
    DescribeDBClustersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DescribeDBClustersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBClustersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBClustersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBClustersCommand(input, context);
    };
    DescribeDBClustersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBClustersCommand(output, context);
    };
    return DescribeDBClustersCommand;
}($Command));
export { DescribeDBClustersCommand };
//# sourceMappingURL=DescribeDBClustersCommand.js.map