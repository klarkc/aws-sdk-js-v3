import { __extends } from "tslib";
import { ClusterVersionsMessage, DescribeClusterVersionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeClusterVersionsCommand, serializeAws_queryDescribeClusterVersionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns descriptions of the available Amazon Redshift cluster versions. You can call this
 *             operation even before creating any clusters to learn more about the Amazon Redshift versions.
 *
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterVersionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterVersionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterVersionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeClusterVersionsCommand = /** @class */ (function (_super) {
    __extends(DescribeClusterVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeClusterVersionsCommand(input) {
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
    DescribeClusterVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeClusterVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeClusterVersionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ClusterVersionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeClusterVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeClusterVersionsCommand(input, context);
    };
    DescribeClusterVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeClusterVersionsCommand(output, context);
    };
    return DescribeClusterVersionsCommand;
}($Command));
export { DescribeClusterVersionsCommand };
//# sourceMappingURL=DescribeClusterVersionsCommand.js.map