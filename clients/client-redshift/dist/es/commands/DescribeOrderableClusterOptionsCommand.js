import { __extends } from "tslib";
import { DescribeOrderableClusterOptionsMessage, OrderableClusterOptionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeOrderableClusterOptionsCommand, serializeAws_queryDescribeOrderableClusterOptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of orderable cluster options. Before you create a new cluster you
 *             can use this operation to find what options are available, such as the EC2 Availability
 *             Zones (AZ) in the specific AWS Region that you can specify, and the node types you can
 *             request. The node types differ by available storage, memory, CPU and price. With the
 *             cost involved you might want to obtain a list of cluster options in the specific region
 *             and specify values when creating a cluster.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeOrderableClusterOptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeOrderableClusterOptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeOrderableClusterOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrderableClusterOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableClusterOptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrderableClusterOptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeOrderableClusterOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrderableClusterOptionsCommand(input) {
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
    DescribeOrderableClusterOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeOrderableClusterOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrderableClusterOptionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: OrderableClusterOptionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrderableClusterOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeOrderableClusterOptionsCommand(input, context);
    };
    DescribeOrderableClusterOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeOrderableClusterOptionsCommand(output, context);
    };
    return DescribeOrderableClusterOptionsCommand;
}($Command));
export { DescribeOrderableClusterOptionsCommand };
//# sourceMappingURL=DescribeOrderableClusterOptionsCommand.js.map