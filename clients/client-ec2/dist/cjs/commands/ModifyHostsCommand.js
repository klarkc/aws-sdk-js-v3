"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyHostsCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled,
 *             any instances that you launch with a tenancy of <code>host</code> but without a specific host
 *         	ID are placed onto any available Dedicated Host in your account that has auto-placement enabled.
 *         	When auto-placement is disabled, you need to provide a host ID to have the instance launch onto
 *         	a specific host. If no host ID is provided, the instance is launched onto a suitable host with
 *         	auto-placement enabled.</p>
 *     	    <p>You can also use this API action to modify a Dedicated Host to support either multiple
 *     		instance types in an instance family, or to support a specific instance type only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyHostsCommandInput} for command's `input` shape.
 * @see {@link ModifyHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyHostsCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyHostsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyHostsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyHostsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyHostsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyHostsCommand(output, context);
    }
}
exports.ModifyHostsCommand = ModifyHostsCommand;
//# sourceMappingURL=ModifyHostsCommand.js.map