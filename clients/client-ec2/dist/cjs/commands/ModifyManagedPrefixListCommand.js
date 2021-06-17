"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyManagedPrefixListCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the specified managed prefix list.</p>
 *         <p>Adding or removing entries in a prefix list creates a new version of the prefix list.
 *             Changing the name of the prefix list does not affect the version.</p>
 *         <p>If you specify a current version number that does not match the true current version
 *             number, the request fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyManagedPrefixListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyManagedPrefixListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyManagedPrefixListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyManagedPrefixListCommandInput} for command's `input` shape.
 * @see {@link ModifyManagedPrefixListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyManagedPrefixListCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyManagedPrefixListCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyManagedPrefixListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyManagedPrefixListResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyManagedPrefixListCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyManagedPrefixListCommand(output, context);
    }
}
exports.ModifyManagedPrefixListCommand = ModifyManagedPrefixListCommand;
//# sourceMappingURL=ModifyManagedPrefixListCommand.js.map