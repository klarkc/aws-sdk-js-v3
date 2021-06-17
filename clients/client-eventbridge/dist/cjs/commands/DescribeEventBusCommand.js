"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeEventBusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Displays details about an event bus in your account. This can include the external AWS
 *       accounts that are permitted to write events to your default event bus, and the associated
 *       policy. For custom event buses and partner event buses, it displays the name, ARN, policy,
 *       state, and creation time.</p>
 *          <p> To enable your account to receive events from other accounts on its default event bus,
 *       use <a>PutPermission</a>.</p>
 *          <p>For more information about partner event buses, see <a>CreateEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeEventBusCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeEventBusCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribeEventBusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventBusCommandInput} for command's `input` shape.
 * @see {@link DescribeEventBusCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeEventBusCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeEventBusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeEventBusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeEventBusResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeEventBusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeEventBusCommand(output, context);
    }
}
exports.DescribeEventBusCommand = DescribeEventBusCommand;
//# sourceMappingURL=DescribeEventBusCommand.js.map