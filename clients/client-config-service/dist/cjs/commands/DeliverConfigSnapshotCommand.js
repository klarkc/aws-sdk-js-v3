"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliverConfigSnapshotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Schedules delivery of a configuration snapshot to the Amazon S3
 * 			bucket in the specified delivery channel. After the delivery has
 * 			started, AWS Config sends the following notifications using an
 * 			Amazon SNS topic that you have specified.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Notification of the start of the delivery.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Notification of the completion of the delivery, if the
 * 					delivery was successfully completed.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Notification of delivery failure, if the delivery
 * 					failed.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeliverConfigSnapshotCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeliverConfigSnapshotCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeliverConfigSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeliverConfigSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeliverConfigSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeliverConfigSnapshotCommand extends smithy_client_1.Command {
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
        const clientName = "ConfigServiceClient";
        const commandName = "DeliverConfigSnapshotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeliverConfigSnapshotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeliverConfigSnapshotResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeliverConfigSnapshotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeliverConfigSnapshotCommand(output, context);
    }
}
exports.DeliverConfigSnapshotCommand = DeliverConfigSnapshotCommand;
//# sourceMappingURL=DeliverConfigSnapshotCommand.js.map