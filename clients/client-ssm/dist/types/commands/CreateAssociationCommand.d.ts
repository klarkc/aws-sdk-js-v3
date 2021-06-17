import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateAssociationRequest, CreateAssociationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAssociationCommandInput extends CreateAssociationRequest {
}
export interface CreateAssociationCommandOutput extends CreateAssociationResult, __MetadataBearer {
}
/**
 * <p>A State Manager association defines the state that you want to maintain on your instances.
 *    For example, an association can specify that anti-virus software must be installed and running on
 *    your instances, or that certain ports must be closed. For static targets, the association
 *    specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an AWS
 *    Resource Group or an AWS Autoscaling Group, State Manager applies the configuration when new
 *    instances are added to the group. The association also specifies actions to take when applying
 *    the configuration. For example, an association for anti-virus software might run once a day. If
 *    the software is not installed, then State Manager installs it. If the software is installed, but
 *    the service is not running, then the association might instruct State Manager to start the
 *    service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAssociationCommand extends $Command<CreateAssociationCommandInput, CreateAssociationCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateAssociationCommandInput;
    constructor(input: CreateAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAssociationCommandInput, CreateAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
