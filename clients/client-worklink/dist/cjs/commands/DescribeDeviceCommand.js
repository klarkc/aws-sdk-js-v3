"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDeviceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Provides information about a user's device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeDeviceCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeDeviceCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeDeviceCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeDeviceCommand extends smithy_client_1.Command {
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
        const clientName = "WorkLinkClient";
        const commandName = "DescribeDeviceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeDeviceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeDeviceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeDeviceCommand(output, context);
    }
}
exports.DescribeDeviceCommand = DescribeDeviceCommand;
//# sourceMappingURL=DescribeDeviceCommand.js.map