import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { GetContactPolicyRequest, GetContactPolicyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContactPolicyCommandInput extends GetContactPolicyRequest {
}
export interface GetContactPolicyCommandOutput extends GetContactPolicyResult, __MetadataBearer {
}
/**
 * <p>Retrieves the resource policies attached to the specified contact or escalation
 *          plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactPolicyCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactPolicyCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new GetContactPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContactPolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContactPolicyCommand extends $Command<GetContactPolicyCommandInput, GetContactPolicyCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: GetContactPolicyCommandInput;
    constructor(input: GetContactPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContactPolicyCommandInput, GetContactPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
