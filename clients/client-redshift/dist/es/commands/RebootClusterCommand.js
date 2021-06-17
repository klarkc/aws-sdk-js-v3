import { __extends } from "tslib";
import { RebootClusterMessage, RebootClusterResult } from "../models/models_1";
import { deserializeAws_queryRebootClusterCommand, serializeAws_queryRebootClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Reboots a cluster. This action is taken as soon as possible. It results in a
 *             momentary outage to the cluster, during which the cluster status is set to
 *                 <code>rebooting</code>. A cluster event is created when the reboot is completed. Any
 *             pending cluster modifications (see <a>ModifyCluster</a>) are applied at this
 *             reboot.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RebootClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RebootClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RebootClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootClusterCommandInput} for command's `input` shape.
 * @see {@link RebootClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RebootClusterCommand = /** @class */ (function (_super) {
    __extends(RebootClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RebootClusterCommand(input) {
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
    RebootClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "RebootClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RebootClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RebootClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RebootClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRebootClusterCommand(input, context);
    };
    RebootClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRebootClusterCommand(output, context);
    };
    return RebootClusterCommand;
}($Command));
export { RebootClusterCommand };
//# sourceMappingURL=RebootClusterCommand.js.map