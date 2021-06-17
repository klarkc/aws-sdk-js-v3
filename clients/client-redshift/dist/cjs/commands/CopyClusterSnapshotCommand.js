"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyClusterSnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Copies the specified automated cluster snapshot to a new manual cluster snapshot.
 *             The source must be an automated snapshot and it must be in the available
 *             state.</p>
 *         <p>When you delete a cluster, Amazon Redshift deletes any automated snapshots of the
 *             cluster. Also, when the retention period of the snapshot expires, Amazon Redshift
 *             automatically deletes it. If you want to keep an automated snapshot for a longer period,
 *             you can make a manual copy of the snapshot. Manual snapshots are retained until you
 *             delete them.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CopyClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CopyClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new CopyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CopyClusterSnapshotCommand extends smithy_client_1.Command {
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
        const clientName = "RedshiftClient";
        const commandName = "CopyClusterSnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CopyClusterSnapshotMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CopyClusterSnapshotResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCopyClusterSnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCopyClusterSnapshotCommand(output, context);
    }
}
exports.CopyClusterSnapshotCommand = CopyClusterSnapshotCommand;
//# sourceMappingURL=CopyClusterSnapshotCommand.js.map