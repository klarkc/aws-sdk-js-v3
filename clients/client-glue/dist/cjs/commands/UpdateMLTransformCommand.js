"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMLTransformCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p>
 *
 *          <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code>
 *       operation to assess how well your new parameters achieved your goals (such as improving the
 *       quality of your machine learning transform, or making it more cost-effective).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMLTransformCommandInput} for command's `input` shape.
 * @see {@link UpdateMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateMLTransformCommand extends smithy_client_1.Command {
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
        const clientName = "GlueClient";
        const commandName = "UpdateMLTransformCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.UpdateMLTransformRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.UpdateMLTransformResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateMLTransformCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateMLTransformCommand(output, context);
    }
}
exports.UpdateMLTransformCommand = UpdateMLTransformCommand;
//# sourceMappingURL=UpdateMLTransformCommand.js.map