"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelJobCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Cancels the specified job. You can only cancel a job before its <code>JobState</code>
 *       value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or
 *         <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the
 *       response element data returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CancelJobCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CancelJobCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CancelJobCommand extends smithy_client_1.Command {
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
        const clientName = "SnowballClient";
        const commandName = "CancelJobCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CancelJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CancelJobResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CancelJobCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CancelJobCommand(output, context);
    }
}
exports.CancelJobCommand = CancelJobCommand;
//# sourceMappingURL=CancelJobCommand.js.map