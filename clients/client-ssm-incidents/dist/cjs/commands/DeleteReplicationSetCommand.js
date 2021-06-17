"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReplicationSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes all Regions in your replication set. Deleting the replication set deletes all
 *             Incident Manager data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteReplicationSetCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteReplicationSetCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteReplicationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationSetCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteReplicationSetCommand extends smithy_client_1.Command {
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
        const clientName = "SSMIncidentsClient";
        const commandName = "DeleteReplicationSetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteReplicationSetInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteReplicationSetOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteReplicationSetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteReplicationSetCommand(output, context);
    }
}
exports.DeleteReplicationSetCommand = DeleteReplicationSetCommand;
//# sourceMappingURL=DeleteReplicationSetCommand.js.map