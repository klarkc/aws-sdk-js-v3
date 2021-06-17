"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizeClusterSecurityGroupIngressCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether
 *             the application accessing your cluster is running on the Internet or an Amazon EC2
 *             instance, you can authorize inbound access to either a Classless Interdomain Routing
 *             (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as
 *             many as 20 ingress rules to an Amazon Redshift security group.</p>
 *         <p>If you authorize access to an Amazon EC2 security group, specify
 *                 <i>EC2SecurityGroupName</i> and
 *                 <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and
 *             Amazon Redshift cluster must be in the same AWS Region. </p>
 *         <p>If you authorize access to a CIDR/IP address range, specify
 *                 <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia
 *             article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>
 *         <p>You must also associate the security group with a cluster so that clients running
 *             on these IP addresses or the EC2 instance are authorized to connect to the cluster. For
 *             information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security
 *                 Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AuthorizeClusterSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AuthorizeClusterSecurityGroupIngressCommand extends smithy_client_1.Command {
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
        const clientName = "RedshiftClient";
        const commandName = "AuthorizeClusterSecurityGroupIngressCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AuthorizeClusterSecurityGroupIngressMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AuthorizeClusterSecurityGroupIngressResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(output, context);
    }
}
exports.AuthorizeClusterSecurityGroupIngressCommand = AuthorizeClusterSecurityGroupIngressCommand;
//# sourceMappingURL=AuthorizeClusterSecurityGroupIngressCommand.js.map