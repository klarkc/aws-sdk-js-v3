"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeNetworkInterfaceAttributeCommand = void 0;
const models_3_1 = require("../models/models_3");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes a network interface attribute. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeNetworkInterfaceAttributeCommand extends smithy_client_1.Command {
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
        const clientName = "EC2Client";
        const commandName = "DescribeNetworkInterfaceAttributeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_3_1.DescribeNetworkInterfaceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_3_1.DescribeNetworkInterfaceAttributeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeNetworkInterfaceAttributeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeNetworkInterfaceAttributeCommand(output, context);
    }
}
exports.DescribeNetworkInterfaceAttributeCommand = DescribeNetworkInterfaceAttributeCommand;
//# sourceMappingURL=DescribeNetworkInterfaceAttributeCommand.js.map