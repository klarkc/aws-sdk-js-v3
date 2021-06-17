"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutFunctionConcurrencyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency
 *       level.</p>
 *          <p>Concurrency settings apply to the function as a whole, including all published versions and the unpublished
 *       version. Reserving concurrency both ensures that your function has capacity to process the specified number of
 *       events simultaneously, and prevents it from scaling beyond that level. Use <a>GetFunction</a> to see
 *       the current setting for a function.</p>
 *          <p>Use <a>GetAccountSettings</a> to see your Regional concurrency limit. You can reserve concurrency
 *       for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for
 *       functions that aren't configured with a per-function limit. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionConcurrencyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionConcurrencyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PutFunctionConcurrencyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFunctionConcurrencyCommandInput} for command's `input` shape.
 * @see {@link PutFunctionConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutFunctionConcurrencyCommand extends smithy_client_1.Command {
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
        const commandName = "PutFunctionConcurrencyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutFunctionConcurrencyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.Concurrency.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1PutFunctionConcurrencyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1PutFunctionConcurrencyCommand(output, context);
    }
}
exports.PutFunctionConcurrencyCommand = PutFunctionConcurrencyCommand;
//# sourceMappingURL=PutFunctionConcurrencyCommand.js.map