import { __extends } from "tslib";
import { ClustersMessage, DescribeClustersMessage } from "../models/models_0";
import { deserializeAws_queryDescribeClustersCommand, serializeAws_queryDescribeClustersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns properties of provisioned clusters including general cluster properties,
 *             cluster database properties, maintenance and backup properties, and security and access
 *             properties. This operation supports pagination.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all clusters that match any combination of the specified keys and values. For example,
 *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all clusters that have any
 *             combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, clusters are returned
 *             regardless of whether they have tag keys or values associated with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClustersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClustersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeClustersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClustersCommand = /** @class */ (function (_super) {
    __extends(DescribeClustersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClustersCommand(input) {
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
    DescribeClustersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeClustersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClustersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ClustersMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClustersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeClustersCommand(input, context);
    };
    DescribeClustersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeClustersCommand(output, context);
    };
    return DescribeClustersCommand;
}($Command));
export { DescribeClustersCommand };
//# sourceMappingURL=DescribeClustersCommand.js.map