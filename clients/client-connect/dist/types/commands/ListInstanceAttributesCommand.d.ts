import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListInstanceAttributesRequest, ListInstanceAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInstanceAttributesCommandInput extends ListInstanceAttributesRequest {
}
export interface ListInstanceAttributesCommandOutput extends ListInstanceAttributesResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all attribute types for the given instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstanceAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstanceAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListInstanceAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceAttributesCommandInput} for command's `input` shape.
 * @see {@link ListInstanceAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInstanceAttributesCommand extends $Command<ListInstanceAttributesCommandInput, ListInstanceAttributesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListInstanceAttributesCommandInput;
    constructor(input: ListInstanceAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstanceAttributesCommandInput, ListInstanceAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
