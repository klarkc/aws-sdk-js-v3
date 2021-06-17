"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTaskHeartbeatCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern to report to Step Functions that the task represented by the specified
 *         <code>taskToken</code> is still making progress. This action resets the
 *         <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state
 *       machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself
 *       create an event in the execution history. However, if the task times out, the execution
 *       history contains an <code>ActivityTimedOut</code> entry for activities, or a
 *         <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or
 *         <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern.</p>
 *          <note>
 *             <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is
 *         its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval
 *         for heartbeats.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskHeartbeatCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskHeartbeatCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new SendTaskHeartbeatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendTaskHeartbeatCommandInput} for command's `input` shape.
 * @see {@link SendTaskHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SendTaskHeartbeatCommand extends smithy_client_1.Command {
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
        const clientName = "SFNClient";
        const commandName = "SendTaskHeartbeatCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SendTaskHeartbeatInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SendTaskHeartbeatOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0SendTaskHeartbeatCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0SendTaskHeartbeatCommand(output, context);
    }
}
exports.SendTaskHeartbeatCommand = SendTaskHeartbeatCommand;
//# sourceMappingURL=SendTaskHeartbeatCommand.js.map