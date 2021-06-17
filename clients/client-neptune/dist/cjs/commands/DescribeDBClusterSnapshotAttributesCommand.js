"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDBClusterSnapshotAttributesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster
 *       snapshot.</p>
 *          <p>When sharing snapshots with other Amazon accounts,
 *       <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute
 *       and a list of IDs for the Amazon accounts that are authorized to copy or restore the manual DB
 *       cluster snapshot. If <code>all</code> is included in the list of values for the
 *       <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be
 *       copied or restored by all Amazon accounts.</p>
 *          <p>To add or remove access for an Amazon account to copy or restore a manual DB cluster
 *       snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBClusterSnapshotAttributesCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBClusterSnapshotAttributesCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeDBClusterSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterSnapshotAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotAttributesCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeDBClusterSnapshotAttributesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeDBClusterSnapshotAttributesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeDBClusterSnapshotAttributesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeDBClusterSnapshotAttributesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeDBClusterSnapshotAttributesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand(output, context);
    }
}
exports.DescribeDBClusterSnapshotAttributesCommand = DescribeDBClusterSnapshotAttributesCommand;
//# sourceMappingURL=DescribeDBClusterSnapshotAttributesCommand.js.map