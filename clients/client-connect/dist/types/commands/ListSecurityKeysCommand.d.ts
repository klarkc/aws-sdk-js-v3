import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListSecurityKeysRequest, ListSecurityKeysResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSecurityKeysCommandInput extends ListSecurityKeysRequest {
}
export interface ListSecurityKeysCommandOutput extends ListSecurityKeysResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all security keys associated with the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListSecurityKeysCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListSecurityKeysCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListSecurityKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityKeysCommandInput} for command's `input` shape.
 * @see {@link ListSecurityKeysCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSecurityKeysCommand extends $Command<ListSecurityKeysCommandInput, ListSecurityKeysCommandOutput, ConnectClientResolvedConfig> {
    readonly input: ListSecurityKeysCommandInput;
    constructor(input: ListSecurityKeysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSecurityKeysCommandInput, ListSecurityKeysCommandOutput>;
    private serialize;
    private deserialize;
}
