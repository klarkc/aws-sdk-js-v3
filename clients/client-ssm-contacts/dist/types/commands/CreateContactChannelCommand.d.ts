import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { CreateContactChannelRequest, CreateContactChannelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContactChannelCommandInput extends CreateContactChannelRequest {
}
export interface CreateContactChannelCommandOutput extends CreateContactChannelResult, __MetadataBearer {
}
/**
 * <p>A contact channel is the method that Incident Manager uses to engage your contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new CreateContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactChannelCommandInput} for command's `input` shape.
 * @see {@link CreateContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContactChannelCommand extends $Command<CreateContactChannelCommandInput, CreateContactChannelCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: CreateContactChannelCommandInput;
    constructor(input: CreateContactChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContactChannelCommandInput, CreateContactChannelCommandOutput>;
    private serialize;
    private deserialize;
}
