import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListStudioComponentsRequest, ListStudioComponentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStudioComponentsCommandInput extends ListStudioComponentsRequest {
}
export interface ListStudioComponentsCommandOutput extends ListStudioComponentsResponse, __MetadataBearer {
}
/**
 * <p>Lists the StudioComponents in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStudioComponentsCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStudioComponentsCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStudioComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStudioComponentsCommandInput} for command's `input` shape.
 * @see {@link ListStudioComponentsCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStudioComponentsCommand extends $Command<ListStudioComponentsCommandInput, ListStudioComponentsCommandOutput, NimbleClientResolvedConfig> {
    readonly input: ListStudioComponentsCommandInput;
    constructor(input: ListStudioComponentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStudioComponentsCommandInput, ListStudioComponentsCommandOutput>;
    private serialize;
    private deserialize;
}
