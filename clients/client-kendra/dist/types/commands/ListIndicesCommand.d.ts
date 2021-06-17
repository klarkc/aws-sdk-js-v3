import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { ListIndicesRequest, ListIndicesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIndicesCommandInput extends ListIndicesRequest {
}
export interface ListIndicesCommandOutput extends ListIndicesResponse, __MetadataBearer {
}
/**
 * <p>Lists the Amazon Kendra indexes that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListIndicesCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListIndicesCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListIndicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIndicesCommandInput} for command's `input` shape.
 * @see {@link ListIndicesCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIndicesCommand extends $Command<ListIndicesCommandInput, ListIndicesCommandOutput, KendraClientResolvedConfig> {
    readonly input: ListIndicesCommandInput;
    constructor(input: ListIndicesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIndicesCommandInput, ListIndicesCommandOutput>;
    private serialize;
    private deserialize;
}
