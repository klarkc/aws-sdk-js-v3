import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { DeactivateContactChannelRequest, DeactivateContactChannelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeactivateContactChannelCommandInput extends DeactivateContactChannelRequest {
}
export interface DeactivateContactChannelCommandOutput extends DeactivateContactChannelResult, __MetadataBearer {
}
/**
 * <p>To no longer receive Incident Manager engagements to a contact channel, you can deactivate
 *          the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DeactivateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DeactivateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DeactivateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeactivateContactChannelCommandInput} for command's `input` shape.
 * @see {@link DeactivateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeactivateContactChannelCommand extends $Command<DeactivateContactChannelCommandInput, DeactivateContactChannelCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: DeactivateContactChannelCommandInput;
    constructor(input: DeactivateContactChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeactivateContactChannelCommandInput, DeactivateContactChannelCommandOutput>;
    private serialize;
    private deserialize;
}
