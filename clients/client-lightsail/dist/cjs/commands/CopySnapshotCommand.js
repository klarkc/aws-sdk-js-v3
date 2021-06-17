"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopySnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an
 *       automatic snapshot of an instance or disk as a manual snapshot. This operation can also be
 *       used to copy a manual or automatic snapshot of an instance or a disk from one AWS Region to
 *       another in Amazon Lightsail.</p>
 *          <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source
 *         region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code>
 *       parameters.</p>
 *          <p>When copying an <i>automatic snapshot</i>, be sure to define the
 *         <code>source region</code>, <code>source resource name</code>, <code>target snapshot
 *         name</code>, and either the <code>restore date</code> or the <code>use latest restorable
 *         auto snapshot</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CopySnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CopySnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CopySnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopySnapshotCommandInput} for command's `input` shape.
 * @see {@link CopySnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CopySnapshotCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "CopySnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CopySnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CopySnapshotResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CopySnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CopySnapshotCommand(output, context);
    }
}
exports.CopySnapshotCommand = CopySnapshotCommand;
//# sourceMappingURL=CopySnapshotCommand.js.map