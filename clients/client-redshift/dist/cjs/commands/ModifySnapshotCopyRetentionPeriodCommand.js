"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifySnapshotCopyRetentionPeriodCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the number of days to retain snapshots in the destination AWS Region after
 *             they are copied from the source AWS Region. By default, this operation only changes the
 *             retention period of copied automated snapshots. The retention periods for both new and
 *             existing copied automated snapshots are updated with the new retention period. You can
 *             set the manual option to change only the retention periods of copied manual snapshots.
 *             If you set this option, only newly copied manual snapshots have the new retention
 *             period. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifySnapshotCopyRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifySnapshotCopyRetentionPeriodCommand extends smithy_client_1.Command {
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
        const commandName = "ModifySnapshotCopyRetentionPeriodCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.ModifySnapshotCopyRetentionPeriodMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.ModifySnapshotCopyRetentionPeriodResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryModifySnapshotCopyRetentionPeriodCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand(output, context);
    }
}
exports.ModifySnapshotCopyRetentionPeriodCommand = ModifySnapshotCopyRetentionPeriodCommand;
//# sourceMappingURL=ModifySnapshotCopyRetentionPeriodCommand.js.map