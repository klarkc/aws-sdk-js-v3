import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { ListAccessesRequest, ListAccessesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAccessesCommandInput extends ListAccessesRequest {
}
export interface ListAccessesCommandOutput extends ListAccessesResponse, __MetadataBearer {
}
/**
 * <p>Lists the details for all the accesses you have on your server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListAccessesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListAccessesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ListAccessesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessesCommandInput} for command's `input` shape.
 * @see {@link ListAccessesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAccessesCommand extends $Command<ListAccessesCommandInput, ListAccessesCommandOutput, TransferClientResolvedConfig> {
    readonly input: ListAccessesCommandInput;
    constructor(input: ListAccessesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccessesCommandInput, ListAccessesCommandOutput>;
    private serialize;
    private deserialize;
}
