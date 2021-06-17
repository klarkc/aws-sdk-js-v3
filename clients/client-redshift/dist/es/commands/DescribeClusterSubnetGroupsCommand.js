import { __extends } from "tslib";
import { ClusterSubnetGroupMessage, DescribeClusterSubnetGroupsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeClusterSubnetGroupsCommand, serializeAws_queryDescribeClusterSubnetGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns one or more cluster subnet group objects, which contain metadata about your
 *             cluster subnet groups. By default, this operation returns information about all cluster
 *             subnet groups that are defined in you AWS account.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all subnet groups that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all subnet groups that have
 *             any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, subnet groups are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterSubnetGroupsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterSubnetGroupsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClusterSubnetGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeClusterSubnetGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClusterSubnetGroupsCommand(input) {
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
    DescribeClusterSubnetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeClusterSubnetGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClusterSubnetGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ClusterSubnetGroupMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClusterSubnetGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeClusterSubnetGroupsCommand(input, context);
    };
    DescribeClusterSubnetGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeClusterSubnetGroupsCommand(output, context);
    };
    return DescribeClusterSubnetGroupsCommand;
}($Command));
export { DescribeClusterSubnetGroupsCommand };
//# sourceMappingURL=DescribeClusterSubnetGroupsCommand.js.map