import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { UpdateContactChannelRequest, UpdateContactChannelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateContactChannelCommandInput extends UpdateContactChannelRequest {
}
export interface UpdateContactChannelCommandOutput extends UpdateContactChannelResult, __MetadataBearer {
}
/**
 * <p>Updates a contact's contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, UpdateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, UpdateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new UpdateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateContactChannelCommand extends $Command<UpdateContactChannelCommandInput, UpdateContactChannelCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: UpdateContactChannelCommandInput;
    constructor(input: UpdateContactChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContactChannelCommandInput, UpdateContactChannelCommandOutput>;
    private serialize;
    private deserialize;
}
