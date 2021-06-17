import { __extends } from "tslib";
import { FailoverGlobalClusterMessage, FailoverGlobalClusterResult } from "../models/models_1";
import { deserializeAws_queryFailoverGlobalClusterCommand, serializeAws_queryFailoverGlobalClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p>
 *          <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be
 *        the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words,
 *      the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected
 *      secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p>
 *          <p>For more information about failing over an Amazon Aurora global database, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global
 *         databases</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on
 *        healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to
 *         reconfigure your Aurora global database topology.
 *        </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, FailoverGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, FailoverGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new FailoverGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var FailoverGlobalClusterCommand = /** @class */ (function (_super) {
    __extends(FailoverGlobalClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function FailoverGlobalClusterCommand(input) {
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
    FailoverGlobalClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "FailoverGlobalClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: FailoverGlobalClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: FailoverGlobalClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    FailoverGlobalClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryFailoverGlobalClusterCommand(input, context);
    };
    FailoverGlobalClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryFailoverGlobalClusterCommand(output, context);
    };
    return FailoverGlobalClusterCommand;
}($Command));
export { FailoverGlobalClusterCommand };
//# sourceMappingURL=FailoverGlobalClusterCommand.js.map