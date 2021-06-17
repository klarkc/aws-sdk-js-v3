import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { GetDefaultRetentionPolicyRequest, GetDefaultRetentionPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDefaultRetentionPolicyCommandInput extends GetDefaultRetentionPolicyRequest {
}
export interface GetDefaultRetentionPolicyCommandOutput extends GetDefaultRetentionPolicyResponse, __MetadataBearer {
}
/**
 * <p>Gets the default retention policy details for the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetDefaultRetentionPolicyCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetDefaultRetentionPolicyCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetDefaultRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDefaultRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDefaultRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDefaultRetentionPolicyCommand extends $Command<GetDefaultRetentionPolicyCommandInput, GetDefaultRetentionPolicyCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: GetDefaultRetentionPolicyCommandInput;
    constructor(input: GetDefaultRetentionPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDefaultRetentionPolicyCommandInput, GetDefaultRetentionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
