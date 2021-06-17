import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListApprovedOriginsRequest, ListApprovedOriginsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListApprovedOriginsCommandInput extends ListApprovedOriginsRequest {
}
export interface ListApprovedOriginsCommandOutput extends ListApprovedOriginsResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all approved origins associated with the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListApprovedOriginsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListApprovedOriginsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListApprovedOriginsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApprovedOriginsCommandInput} for command's `input` shape.
 * @see {@link ListApprovedOriginsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListApprovedOriginsCommand extends $Command<ListApprovedOriginsCommandInput, ListApprovedOriginsCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListApprovedOriginsCommandInput;
    constructor(input: ListApprovedOriginsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApprovedOriginsCommandInput, ListApprovedOriginsCommandOutput>;
    private serialize;
    private deserialize;
}
