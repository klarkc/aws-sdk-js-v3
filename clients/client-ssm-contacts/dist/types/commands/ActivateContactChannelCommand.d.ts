import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { ActivateContactChannelRequest, ActivateContactChannelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ActivateContactChannelCommandInput extends ActivateContactChannelRequest {
}
export interface ActivateContactChannelCommandOutput extends ActivateContactChannelResult, __MetadataBearer {
}
/**
 * <p>Activates a contact's contact channel. Incident Manager can't engage a contact until
 *          the
 *          contact channel has been activated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ActivateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ActivateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ActivateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateContactChannelCommandInput} for command's `input` shape.
 * @see {@link ActivateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ActivateContactChannelCommand extends $Command<ActivateContactChannelCommandInput, ActivateContactChannelCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: ActivateContactChannelCommandInput;
    constructor(input: ActivateContactChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ActivateContactChannelCommandInput, ActivateContactChannelCommandOutput>;
    private serialize;
    private deserialize;
}
