import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DisassociateEnvironmentOperationsRoleMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateEnvironmentOperationsRoleCommandInput extends DisassociateEnvironmentOperationsRoleMessage {
}
export interface DisassociateEnvironmentOperationsRoleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses
 *       the caller's permissions for permissions to downstream services during subsequent calls acting
 *       on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
 *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DisassociateEnvironmentOperationsRoleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DisassociateEnvironmentOperationsRoleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new DisassociateEnvironmentOperationsRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateEnvironmentOperationsRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateEnvironmentOperationsRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateEnvironmentOperationsRoleCommand extends $Command<DisassociateEnvironmentOperationsRoleCommandInput, DisassociateEnvironmentOperationsRoleCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: DisassociateEnvironmentOperationsRoleCommandInput;
    constructor(input: DisassociateEnvironmentOperationsRoleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateEnvironmentOperationsRoleCommandInput, DisassociateEnvironmentOperationsRoleCommandOutput>;
    private serialize;
    private deserialize;
}
