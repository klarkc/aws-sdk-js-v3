import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { AcceptPageRequest, AcceptPageResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptPageCommandInput extends AcceptPageRequest {
}
export interface AcceptPageCommandOutput extends AcceptPageResult, __MetadataBearer {
}
/**
 * <p>Used to acknowledge an engagement to a contact channel during an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, AcceptPageCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, AcceptPageCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new AcceptPageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptPageCommandInput} for command's `input` shape.
 * @see {@link AcceptPageCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptPageCommand extends $Command<AcceptPageCommandInput, AcceptPageCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: AcceptPageCommandInput;
    constructor(input: AcceptPageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptPageCommandInput, AcceptPageCommandOutput>;
    private serialize;
    private deserialize;
}
