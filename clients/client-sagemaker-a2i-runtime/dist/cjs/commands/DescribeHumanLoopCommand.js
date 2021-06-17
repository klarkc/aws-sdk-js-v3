"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeHumanLoopCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns information about the specified human loop. If the human loop was deleted, this
 *       operation will return a <code>ResourceNotFoundException</code> error. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new DescribeHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHumanLoopCommandInput} for command's `input` shape.
 * @see {@link DescribeHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeHumanLoopCommand extends smithy_client_1.Command {
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
        const clientName = "SageMakerA2IRuntimeClient";
        const commandName = "DescribeHumanLoopCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeHumanLoopRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeHumanLoopResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeHumanLoopCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeHumanLoopCommand(output, context);
    }
}
exports.DescribeHumanLoopCommand = DescribeHumanLoopCommand;
//# sourceMappingURL=DescribeHumanLoopCommand.js.map