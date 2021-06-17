"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyDBClusterSnapshotAttributeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB
 *       cluster snapshot.</p>
 *          <p>To share a manual DB cluster snapshot with other Amazon accounts, specify
 *       <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code>
 *       parameter to add a list of IDs of the Amazon accounts that are authorized to restore the manual
 *       DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot
 *       public, which means that it can be copied or restored by all Amazon accounts. Do not add the
 *       <code>all</code> value for any manual DB cluster snapshots that contain private information
 *       that you don't want available to all Amazon accounts. If a manual DB cluster snapshot is
 *       encrypted, it can be shared, but only by specifying a list of authorized Amazon account IDs for
 *       the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that
 *       parameter in this case.</p>
 *          <p>To view which Amazon accounts have access to copy or restore a manual DB cluster snapshot, or
 *       whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterSnapshotAttributeCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterSnapshotAttributeCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new ModifyDBClusterSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyDBClusterSnapshotAttributeCommand extends smithy_client_1.Command {
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
        const clientName = "NeptuneClient";
        const commandName = "ModifyDBClusterSnapshotAttributeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ModifyDBClusterSnapshotAttributeMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ModifyDBClusterSnapshotAttributeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryModifyDBClusterSnapshotAttributeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryModifyDBClusterSnapshotAttributeCommand(output, context);
    }
}
exports.ModifyDBClusterSnapshotAttributeCommand = ModifyDBClusterSnapshotAttributeCommand;
//# sourceMappingURL=ModifyDBClusterSnapshotAttributeCommand.js.map