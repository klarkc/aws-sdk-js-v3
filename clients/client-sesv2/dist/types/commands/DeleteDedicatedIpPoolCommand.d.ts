import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { DeleteDedicatedIpPoolRequest, DeleteDedicatedIpPoolResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDedicatedIpPoolCommandInput extends DeleteDedicatedIpPoolRequest {
}
export interface DeleteDedicatedIpPoolCommandOutput extends DeleteDedicatedIpPoolResponse, __MetadataBearer {
}
/**
 * <p>Delete a dedicated IP pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteDedicatedIpPoolCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteDedicatedIpPoolCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteDedicatedIpPoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDedicatedIpPoolCommandInput} for command's `input` shape.
 * @see {@link DeleteDedicatedIpPoolCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDedicatedIpPoolCommand extends $Command<DeleteDedicatedIpPoolCommandInput, DeleteDedicatedIpPoolCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: DeleteDedicatedIpPoolCommandInput;
    constructor(input: DeleteDedicatedIpPoolCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDedicatedIpPoolCommandInput, DeleteDedicatedIpPoolCommandOutput>;
    private serialize;
    private deserialize;
}
