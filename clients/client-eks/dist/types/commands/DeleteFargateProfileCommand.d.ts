import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DeleteFargateProfileRequest, DeleteFargateProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFargateProfileCommandInput extends DeleteFargateProfileRequest {
}
export interface DeleteFargateProfileCommandOutput extends DeleteFargateProfileResponse, __MetadataBearer {
}
/**
 * <p>Deletes an AWS Fargate profile.</p>
 *         <p>When you delete a Fargate profile, any pods running on Fargate that were created with the
 *             profile are deleted. If those pods match another Fargate profile, then they are scheduled
 *             on Fargate with that profile. If they no longer match any Fargate profiles, then they are not
 *             scheduled on Fargate and they may remain in a pending state.</p>
 *         <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a
 *             time. You must wait for a Fargate profile to finish deleting before you can delete any
 *             other profiles in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeleteFargateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFargateProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteFargateProfileCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFargateProfileCommand extends $Command<DeleteFargateProfileCommandInput, DeleteFargateProfileCommandOutput, EKSClientResolvedConfig> {
    readonly input: DeleteFargateProfileCommandInput;
    constructor(input: DeleteFargateProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFargateProfileCommandInput, DeleteFargateProfileCommandOutput>;
    private serialize;
    private deserialize;
}
