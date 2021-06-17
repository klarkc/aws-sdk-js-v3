import { __extends } from "tslib";
import { ClusterSecurityGroupMessage, DescribeClusterSecurityGroupsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeClusterSecurityGroupsCommand, serializeAws_queryDescribeClusterSecurityGroupsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about Amazon Redshift security groups. If the name of a security
 *             group is specified, the response will contain only information about only that security
 *             group.</p>
 *         <p>
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all security groups that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all security groups that
 *             have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, security groups are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterSecurityGroupsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterSecurityGroupsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClusterSecurityGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeClusterSecurityGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClusterSecurityGroupsCommand(input) {
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
    DescribeClusterSecurityGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeClusterSecurityGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClusterSecurityGroupsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ClusterSecurityGroupMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClusterSecurityGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeClusterSecurityGroupsCommand(input, context);
    };
    DescribeClusterSecurityGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeClusterSecurityGroupsCommand(output, context);
    };
    return DescribeClusterSecurityGroupsCommand;
}($Command));
export { DescribeClusterSecurityGroupsCommand };
//# sourceMappingURL=DescribeClusterSecurityGroupsCommand.js.map