"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNetworkInterfacePermissionCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a permission for a network interface. By default, you cannot delete the
 * 			permission if the account for which you're removing the permission has attached the
 * 			network interface to an instance. However, you can force delete the permission,
 * 			regardless of any attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInterfacePermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInterfacePermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInterfacePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInterfacePermissionCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInterfacePermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteNetworkInterfacePermissionCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteNetworkInterfacePermissionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DeleteNetworkInterfacePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DeleteNetworkInterfacePermissionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DeleteNetworkInterfacePermissionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DeleteNetworkInterfacePermissionCommand(output, context);
    }
}
exports.DeleteNetworkInterfacePermissionCommand = DeleteNetworkInterfacePermissionCommand;
//# sourceMappingURL=DeleteNetworkInterfacePermissionCommand.js.map