"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeIdFormatCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the ID format settings for your resources on a per-Region basis, for example, to view which resource types are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types.</p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *            <code>network-acl</code> | <code>network-acl-association</code> |
 *            <code>network-interface</code> | <code>network-interface-attachment</code> |
 *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *            <code>route-table-association</code> | <code>security-group</code> |
 *            <code>snapshot</code> | <code>subnet</code> |
 *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *          <p>These settings apply to the IAM user who makes the request; they do not apply to the entire
 *       AWS account. By default, an IAM user defaults to the same settings as the root user, unless
 *       they explicitly override the settings by running the <a>ModifyIdFormat</a> command. Resources
 *       created with longer IDs are visible to all IAM users, regardless of these settings and
 *       provided that they have permission to use the relevant <code>Describe</code> command for the
 *       resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeIdFormatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribeIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeIdFormatCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeIdFormatCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DescribeIdFormatRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DescribeIdFormatResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeIdFormatCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeIdFormatCommand(output, context);
    }
}
exports.DescribeIdFormatCommand = DescribeIdFormatCommand;
//# sourceMappingURL=DescribeIdFormatCommand.js.map