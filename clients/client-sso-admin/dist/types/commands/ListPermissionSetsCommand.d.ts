import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { ListPermissionSetsRequest, ListPermissionSetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPermissionSetsCommandInput extends ListPermissionSetsRequest {
}
export interface ListPermissionSetsCommandOutput extends ListPermissionSetsResponse, __MetadataBearer {
}
/**
 * <p>Lists the <a>PermissionSet</a>s in an SSO instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListPermissionSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionSetsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetsCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPermissionSetsCommand extends $Command<ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: ListPermissionSetsCommandInput;
    constructor(input: ListPermissionSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput>;
    private serialize;
    private deserialize;
}
