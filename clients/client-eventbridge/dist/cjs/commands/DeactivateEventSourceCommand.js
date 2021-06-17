"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeactivateEventSourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>You can use this operation to temporarily stop receiving events from the specified partner
 *       event source. The matching event bus is not deleted. </p>
 *          <p>When you deactivate a partner event source, the source goes into PENDING state. If it
 *       remains in PENDING state for more than two weeks, it is deleted.</p>
 *          <p>To activate a deactivated partner event source, use <a>ActivateEventSource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeactivateEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeactivateEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DeactivateEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeactivateEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeactivateEventSourceCommand extends smithy_client_1.Command {
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
        const clientName = "EventBridgeClient";
        const commandName = "DeactivateEventSourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeactivateEventSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeactivateEventSourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeactivateEventSourceCommand(output, context);
    }
}
exports.DeactivateEventSourceCommand = DeactivateEventSourceCommand;
//# sourceMappingURL=DeactivateEventSourceCommand.js.map