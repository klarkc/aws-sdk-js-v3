import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { ListProfilePermissionsRequest, ListProfilePermissionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProfilePermissionsCommandInput extends ListProfilePermissionsRequest {
}
export interface ListProfilePermissionsCommandOutput extends ListProfilePermissionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the cross-account permissions associated with a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListProfilePermissionsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListProfilePermissionsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListProfilePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfilePermissionsCommandInput} for command's `input` shape.
 * @see {@link ListProfilePermissionsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProfilePermissionsCommand extends $Command<ListProfilePermissionsCommandInput, ListProfilePermissionsCommandOutput, SignerClientResolvedConfig> {
    readonly input: ListProfilePermissionsCommandInput;
    constructor(input: ListProfilePermissionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProfilePermissionsCommandInput, ListProfilePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
