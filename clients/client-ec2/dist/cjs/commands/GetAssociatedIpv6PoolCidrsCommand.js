"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAssociatedIpv6PoolCidrsCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetAssociatedIpv6PoolCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetAssociatedIpv6PoolCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetAssociatedIpv6PoolCidrsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociatedIpv6PoolCidrsCommandInput} for command's `input` shape.
 * @see {@link GetAssociatedIpv6PoolCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetAssociatedIpv6PoolCidrsCommand extends smithy_client_1.Command {
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
        const commandName = "GetAssociatedIpv6PoolCidrsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.GetAssociatedIpv6PoolCidrsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.GetAssociatedIpv6PoolCidrsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2GetAssociatedIpv6PoolCidrsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2GetAssociatedIpv6PoolCidrsCommand(output, context);
    }
}
exports.GetAssociatedIpv6PoolCidrsCommand = GetAssociatedIpv6PoolCidrsCommand;
//# sourceMappingURL=GetAssociatedIpv6PoolCidrsCommand.js.map