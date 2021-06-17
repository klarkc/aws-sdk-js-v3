import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateWorkforceRequest, UpdateWorkforceResponse } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateWorkforceCommandInput extends UpdateWorkforceRequest {
}
export interface UpdateWorkforceCommandOutput extends UpdateWorkforceResponse, __MetadataBearer {
}
/**
 * <p>Use this operation to update your workforce. You can use this operation to
 *         require that workers use specific IP addresses to work on tasks
 *         and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p>
 *
 *         <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses.
 *         You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>.
 *         By default, a workforce isn't restricted to specific IP addresses. If you specify a
 *             range of IP addresses, workers who attempt to access tasks using any IP address outside
 *             the specified range are denied and get a <code>Not Found</code> error message on
 *             the worker portal.</p>
 *         <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using
 *             your own OIDC IdP. </p>
 *         <important>
 *             <p>You can only update your OIDC IdP configuration when there are no work teams
 *                 associated with your workforce. You can delete work teams using the  operation.</p>
 *         </important>
 *         <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you
 *         can view details about your update workforce using the
 *             operation.</p>
 *         <important>
 *             <p>This operation only applies to private workforces.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateWorkforceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkforceCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateWorkforceCommand extends $Command<UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateWorkforceCommandInput;
    constructor(input: UpdateWorkforceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput>;
    private serialize;
    private deserialize;
}
