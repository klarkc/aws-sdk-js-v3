import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { AssociateEnvironmentOperationsRoleMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateEnvironmentOperationsRoleCommandInput extends AssociateEnvironmentOperationsRoleMessage {
}
export interface AssociateEnvironmentOperationsRoleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk
 *       uses the associated operations role for permissions to downstream services during subsequent
 *       calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
 *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new AssociateEnvironmentOperationsRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEnvironmentOperationsRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnvironmentOperationsRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateEnvironmentOperationsRoleCommand extends $Command<AssociateEnvironmentOperationsRoleCommandInput, AssociateEnvironmentOperationsRoleCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: AssociateEnvironmentOperationsRoleCommandInput;
    constructor(input: AssociateEnvironmentOperationsRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateEnvironmentOperationsRoleCommandInput, AssociateEnvironmentOperationsRoleCommandOutput>;
    private serialize;
    private deserialize;
}
