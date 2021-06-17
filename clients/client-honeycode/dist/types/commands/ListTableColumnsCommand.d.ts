import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import { ListTableColumnsRequest, ListTableColumnsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTableColumnsCommandInput extends ListTableColumnsRequest {
}
export interface ListTableColumnsCommandOutput extends ListTableColumnsResult, __MetadataBearer {
}
/**
 * <p>
 *             The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, ListTableColumnsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, ListTableColumnsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new ListTableColumnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTableColumnsCommandInput} for command's `input` shape.
 * @see {@link ListTableColumnsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTableColumnsCommand extends $Command<ListTableColumnsCommandInput, ListTableColumnsCommandOutput, HoneycodeClientResolvedConfig> {
    readonly input: ListTableColumnsCommandInput;
    constructor(input: ListTableColumnsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HoneycodeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTableColumnsCommandInput, ListTableColumnsCommandOutput>;
    private serialize;
    private deserialize;
}
