"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReplicationJobCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified replication job.</p>
 *         <p>After you delete a replication job, there are no further replication runs. AWS
 *             deletes the contents of the Amazon S3 bucket used to store AWS SMS artifacts. The AMIs created
 *             by the replication runs are not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteReplicationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReplicationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteReplicationJobCommand extends smithy_client_1.Command {
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
        const clientName = "SMSClient";
        const commandName = "DeleteReplicationJobCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteReplicationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteReplicationJobResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteReplicationJobCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteReplicationJobCommand(output, context);
    }
}
exports.DeleteReplicationJobCommand = DeleteReplicationJobCommand;
//# sourceMappingURL=DeleteReplicationJobCommand.js.map