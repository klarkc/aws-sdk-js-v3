"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyIdentityIdFormatCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the ID format of a resource for a specified IAM user, IAM role, or the root
 *        user for an account; or all IAM users, IAM roles, and the root user for an account. You can
 *        specify that resources should receive longer IDs (17-character IDs) when they are created. </p>
 *          <p>This request can only be used to modify longer ID settings for resource types that are
 *        within the opt-in period. Resources currently in their opt-in period include:
 *                 <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *                 <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *                 <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *                 <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
 *             | <code>network-acl-association</code> | <code>network-interface</code> |
 *                 <code>network-interface-attachment</code> | <code>prefix-list</code> |
 *                 <code>route-table</code> | <code>route-table-association</code> |
 *                 <code>security-group</code> | <code>subnet</code> |
 *                 <code>subnet-cidr-block-association</code> | <code>vpc</code> |
 *         <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
 *          <p>This setting applies to the principal specified in the request; it does not apply to the
 *       principal that makes the request. </p>
 *          <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these
 *       settings and provided that they have permission to use the relevant <code>Describe</code>
 *       command for the resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIdentityIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIdentityIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyIdentityIdFormatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyIdentityIdFormatCommandInput} for command's `input` shape.
 * @see {@link ModifyIdentityIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyIdentityIdFormatCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyIdentityIdFormatCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyIdentityIdFormatRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyIdentityIdFormatCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyIdentityIdFormatCommand(output, context);
    }
}
exports.ModifyIdentityIdFormatCommand = ModifyIdentityIdFormatCommand;
//# sourceMappingURL=ModifyIdentityIdFormatCommand.js.map