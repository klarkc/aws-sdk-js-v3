import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { ListPageReceiptsRequest, ListPageReceiptsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPageReceiptsCommandInput extends ListPageReceiptsRequest {
}
export interface ListPageReceiptsCommandOutput extends ListPageReceiptsResult, __MetadataBearer {
}
/**
 * <p>Lists all of the engagements to contact channels that have been acknowledged. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPageReceiptsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPageReceiptsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListPageReceiptsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPageReceiptsCommandInput} for command's `input` shape.
 * @see {@link ListPageReceiptsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPageReceiptsCommand extends $Command<ListPageReceiptsCommandInput, ListPageReceiptsCommandOutput, SSMContactsClientResolvedConfig> {
    readonly input: ListPageReceiptsCommandInput;
    constructor(input: ListPageReceiptsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMContactsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPageReceiptsCommandInput, ListPageReceiptsCommandOutput>;
    private serialize;
    private deserialize;
}
