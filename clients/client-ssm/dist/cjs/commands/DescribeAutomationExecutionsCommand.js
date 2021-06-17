"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAutomationExecutionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides details about all active and terminated Automation executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAutomationExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAutomationExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeAutomationExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutomationExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutomationExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAutomationExecutionsCommand extends smithy_client_1.Command {
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
        const clientName = "SSMClient";
        const commandName = "DescribeAutomationExecutionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeAutomationExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeAutomationExecutionsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeAutomationExecutionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeAutomationExecutionsCommand(output, context);
    }
}
exports.DescribeAutomationExecutionsCommand = DescribeAutomationExecutionsCommand;
//# sourceMappingURL=DescribeAutomationExecutionsCommand.js.map