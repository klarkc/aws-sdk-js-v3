"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutFunctionEventInvokeConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Configures options for <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html">asynchronous
 *         invocation</a> on a function, version, or alias. If a configuration already exists for a function, version,
 *       or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without
 *       affecting existing settings for other options, use <a>UpdateFunctionEventInvokeConfig</a>.</p>
 *          <p>By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains
 *       events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous
 *       invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with
 *         <a>UpdateFunctionConfiguration</a>.</p>
 *          <p>To send an invocation record to a queue, topic, function, or event bus, specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">destination</a>. You can configure separate destinations for successful invocations (on-success) and events
 *       that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a
 *       dead-letter queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PutFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link PutFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutFunctionEventInvokeConfigCommand extends smithy_client_1.Command {
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
        const clientName = "LambdaClient";
        const commandName = "PutFunctionEventInvokeConfigCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutFunctionEventInvokeConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.FunctionEventInvokeConfig.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutFunctionEventInvokeConfigCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutFunctionEventInvokeConfigCommand(output, context);
    }
}
exports.PutFunctionEventInvokeConfigCommand = PutFunctionEventInvokeConfigCommand;
//# sourceMappingURL=PutFunctionEventInvokeConfigCommand.js.map