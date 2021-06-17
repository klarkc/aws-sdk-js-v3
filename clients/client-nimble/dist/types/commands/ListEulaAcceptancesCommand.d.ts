import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListEulaAcceptancesRequest, ListEulaAcceptancesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEulaAcceptancesCommandInput extends ListEulaAcceptancesRequest {
}
export interface ListEulaAcceptancesCommandOutput extends ListEulaAcceptancesResponse, __MetadataBearer {
}
/**
 * <p>List Eula Acceptances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListEulaAcceptancesCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListEulaAcceptancesCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListEulaAcceptancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEulaAcceptancesCommandInput} for command's `input` shape.
 * @see {@link ListEulaAcceptancesCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEulaAcceptancesCommand extends $Command<ListEulaAcceptancesCommandInput, ListEulaAcceptancesCommandOutput, NimbleClientResolvedConfig> {
    readonly input: ListEulaAcceptancesCommandInput;
    constructor(input: ListEulaAcceptancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEulaAcceptancesCommandInput, ListEulaAcceptancesCommandOutput>;
    private serialize;
    private deserialize;
}
