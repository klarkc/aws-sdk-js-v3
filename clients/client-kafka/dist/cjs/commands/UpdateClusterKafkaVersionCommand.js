"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClusterKafkaVersionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the Apache Kafka version for the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateClusterKafkaVersionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateClusterKafkaVersionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new UpdateClusterKafkaVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClusterKafkaVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateClusterKafkaVersionCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateClusterKafkaVersionCommand extends smithy_client_1.Command {
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
        const clientName = "KafkaClient";
        const commandName = "UpdateClusterKafkaVersionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateClusterKafkaVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateClusterKafkaVersionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateClusterKafkaVersionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateClusterKafkaVersionCommand(output, context);
    }
}
exports.UpdateClusterKafkaVersionCommand = UpdateClusterKafkaVersionCommand;
//# sourceMappingURL=UpdateClusterKafkaVersionCommand.js.map