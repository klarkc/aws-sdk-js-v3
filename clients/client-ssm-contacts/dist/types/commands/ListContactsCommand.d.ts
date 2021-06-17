import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { ListContactsRequest, ListContactsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListContactsCommandInput extends ListContactsRequest {
}
export interface ListContactsCommandOutput extends ListContactsResult, __MetadataBearer {
}
/**
 * <p>Lists all contacts and escalation plans in Incident Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListContactsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListContactsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactsCommandInput} for command's `input` shape.
 * @see {@link ListContactsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListContactsCommand extends $Command<ListContactsCommandInput, ListContactsCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: ListContactsCommandInput;
    constructor(input: ListContactsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContactsCommandInput, ListContactsCommandOutput>;
    private serialize;
    private deserialize;
}
