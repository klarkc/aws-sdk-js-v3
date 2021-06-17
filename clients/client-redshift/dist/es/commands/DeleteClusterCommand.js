import { __extends } from "tslib";
import { DeleteClusterMessage, DeleteClusterResult } from "../models/models_0";
import { deserializeAws_queryDeleteClusterCommand, serializeAws_queryDeleteClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a previously provisioned cluster without its final snapshot being created. A successful response from the web
 *             service indicates that the request was received correctly. Use <a>DescribeClusters</a> to monitor the status of the deletion. The delete
 *             operation cannot be canceled or reverted once submitted.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *         <p>If you want to shut down the cluster and retain it for future use, set
 *                 <i>SkipFinalClusterSnapshot</i> to <code>false</code> and specify a
 *             name for <i>FinalClusterSnapshotIdentifier</i>. You can later restore this
 *             snapshot to resume using the cluster. If a final cluster snapshot is requested, the
 *             status of the cluster will be "final-snapshot" while the snapshot is being taken, then
 *             it's "deleting" once Amazon Redshift begins deleting the cluster. </p>
 *         <p>
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteClusterCommand = /** @class */ (function (_super) {
    __extends(DeleteClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClusterCommand(input) {
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
    DeleteClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteClusterCommand(input, context);
    };
    DeleteClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteClusterCommand(output, context);
    };
    return DeleteClusterCommand;
}($Command));
export { DeleteClusterCommand };
//# sourceMappingURL=DeleteClusterCommand.js.map