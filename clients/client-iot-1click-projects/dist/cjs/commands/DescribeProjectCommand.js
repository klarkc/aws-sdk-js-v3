"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeProjectCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns an object describing a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, DescribeProjectCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, DescribeProjectCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeProjectCommand extends smithy_client_1.Command {
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
        const clientName = "IoT1ClickProjectsClient";
        const commandName = "DescribeProjectCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeProjectResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeProjectCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeProjectCommand(output, context);
    }
}
exports.DescribeProjectCommand = DescribeProjectCommand;
//# sourceMappingURL=DescribeProjectCommand.js.map