"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartExecutionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts a state machine execution.</p>
 *          <note>
 *             <p>
 *                <code>StartExecution</code> is idempotent. If <code>StartExecution</code> is called with
 *         the same name and input as a running execution, the call will succeed and return the same
 *         response as the original request. If the execution is closed or if the input is different,
 *         it will return a 400 <code>ExecutionAlreadyExists</code> error. Names can be reused after 90
 *         days. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new StartExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExecutionCommandInput} for command's `input` shape.
 * @see {@link StartExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StartExecutionCommand extends smithy_client_1.Command {
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
        const commandName = "StartExecutionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StartExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StartExecutionOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0StartExecutionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0StartExecutionCommand(output, context);
    }
}
exports.StartExecutionCommand = StartExecutionCommand;
//# sourceMappingURL=StartExecutionCommand.js.map