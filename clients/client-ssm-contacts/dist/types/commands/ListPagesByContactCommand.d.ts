import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { ListPagesByContactRequest, ListPagesByContactResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPagesByContactCommandInput extends ListPagesByContactRequest {
}
export interface ListPagesByContactCommandOutput extends ListPagesByContactResult, __MetadataBearer {
}
/**
 * <p>Lists the engagements to a contact's contact channels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPagesByContactCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPagesByContactCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListPagesByContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPagesByContactCommandInput} for command's `input` shape.
 * @see {@link ListPagesByContactCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPagesByContactCommand extends $Command<ListPagesByContactCommandInput, ListPagesByContactCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: ListPagesByContactCommandInput;
    constructor(input: ListPagesByContactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPagesByContactCommandInput, ListPagesByContactCommandOutput>;
    private serialize;
    private deserialize;
}
