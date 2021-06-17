"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailoverGlobalClusterCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class FailoverGlobalClusterCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "RDSClient";
        const commandName = "FailoverGlobalClusterCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.FailoverGlobalClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.FailoverGlobalClusterResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryFailoverGlobalClusterCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryFailoverGlobalClusterCommand(output, context);
    }
}
exports.FailoverGlobalClusterCommand = FailoverGlobalClusterCommand;
//# sourceMappingURL=FailoverGlobalClusterCommand.js.map