"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTopicCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a topic to which notifications can be published. Users can create at most
 *             100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="http://aws.amazon.com/sns/">https://aws.amazon.com/sns</a>. This action is
 *             idempotent, so if the requester already owns a topic with the specified name, that
 *             topic's ARN is returned without creating a new topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreateTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreateTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CreateTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTopicCommandInput} for command's `input` shape.
 * @see {@link CreateTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateTopicCommand extends smithy_client_1.Command {
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
        const clientName = "SNSClient";
        const commandName = "CreateTopicCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateTopicInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateTopicResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateTopicCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateTopicCommand(output, context);
    }
}
exports.CreateTopicCommand = CreateTopicCommand;
//# sourceMappingURL=CreateTopicCommand.js.map