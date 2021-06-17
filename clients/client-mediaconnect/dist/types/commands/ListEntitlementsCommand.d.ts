import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListEntitlementsRequest, ListEntitlementsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEntitlementsCommandInput extends ListEntitlementsRequest {
}
export interface ListEntitlementsCommandOutput extends ListEntitlementsResponse, __MetadataBearer {
}
/**
 * Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListEntitlementsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListEntitlementsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new ListEntitlementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntitlementsCommandInput} for command's `input` shape.
 * @see {@link ListEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEntitlementsCommand extends $Command<ListEntitlementsCommandInput, ListEntitlementsCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: ListEntitlementsCommandInput;
    constructor(input: ListEntitlementsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEntitlementsCommandInput, ListEntitlementsCommandOutput>;
    private serialize;
    private deserialize;
}
