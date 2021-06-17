import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { PutContactPolicyRequest, PutContactPolicyResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutContactPolicyCommandInput extends PutContactPolicyRequest {
}
export interface PutContactPolicyCommandOutput extends PutContactPolicyResult, __MetadataBearer {
}
/**
 * <p>Adds a resource to the specified contact or escalation plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, PutContactPolicyCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, PutContactPolicyCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new PutContactPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutContactPolicyCommandInput} for command's `input` shape.
 * @see {@link PutContactPolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutContactPolicyCommand extends $Command<PutContactPolicyCommandInput, PutContactPolicyCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: PutContactPolicyCommandInput;
    constructor(input: PutContactPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutContactPolicyCommandInput, PutContactPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
