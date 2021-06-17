"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeToEventCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enables the process of sending Amazon Simple Notification Service (SNS) notifications
 *          about a specified event to a specified SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, SubscribeToEventCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, SubscribeToEventCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new SubscribeToEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubscribeToEventCommandInput} for command's `input` shape.
 * @see {@link SubscribeToEventCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SubscribeToEventCommand extends smithy_client_1.Command {
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
        const clientName = "InspectorClient";
        const commandName = "SubscribeToEventCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SubscribeToEventRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1SubscribeToEventCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1SubscribeToEventCommand(output, context);
    }
}
exports.SubscribeToEventCommand = SubscribeToEventCommand;
//# sourceMappingURL=SubscribeToEventCommand.js.map