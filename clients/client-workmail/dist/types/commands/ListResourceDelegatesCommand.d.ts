import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListResourceDelegatesRequest, ListResourceDelegatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListResourceDelegatesCommandInput extends ListResourceDelegatesRequest {
}
export interface ListResourceDelegatesCommandOutput extends ListResourceDelegatesResponse, __MetadataBearer {
}
/**
 * <p>Lists the delegates associated with a resource. Users and groups can be resource
 *          delegates and answer requests on behalf of the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListResourceDelegatesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListResourceDelegatesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListResourceDelegatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceDelegatesCommandInput} for command's `input` shape.
 * @see {@link ListResourceDelegatesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListResourceDelegatesCommand extends $Command<ListResourceDelegatesCommandInput, ListResourceDelegatesCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListResourceDelegatesCommandInput;
    constructor(input: ListResourceDelegatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceDelegatesCommandInput, ListResourceDelegatesCommandOutput>;
    private serialize;
    private deserialize;
}
