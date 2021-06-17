import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { GetContactChannelRequest, GetContactChannelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetContactChannelCommandInput extends GetContactChannelRequest {
}
export interface GetContactChannelCommandOutput extends GetContactChannelResult, __MetadataBearer {
}
/**
 * <p>List details about a specific contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetContactChannelCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetContactChannelCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new GetContactChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactChannelCommandInput} for command's `input` shape.
 * @see {@link GetContactChannelCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetContactChannelCommand extends $Command<GetContactChannelCommandInput, GetContactChannelCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: GetContactChannelCommandInput;
    constructor(input: GetContactChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetContactChannelCommandInput, GetContactChannelCommandOutput>;
    private serialize;
    private deserialize;
}
