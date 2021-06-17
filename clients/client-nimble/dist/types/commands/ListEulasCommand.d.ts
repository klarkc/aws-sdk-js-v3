import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListEulasRequest, ListEulasResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEulasCommandInput extends ListEulasRequest {
}
export interface ListEulasCommandOutput extends ListEulasResponse, __MetadataBearer {
}
/**
 * <p>List Eulas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListEulasCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListEulasCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListEulasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEulasCommandInput} for command's `input` shape.
 * @see {@link ListEulasCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEulasCommand extends $Command<ListEulasCommandInput, ListEulasCommandOutput, NimbleClientResolvedConfig> {
    readonly input: ListEulasCommandInput;
    constructor(input: ListEulasCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEulasCommandInput, ListEulasCommandOutput>;
    private serialize;
    private deserialize;
}
