import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { ListProtectionGroupsRequest, ListProtectionGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProtectionGroupsCommandInput extends ListProtectionGroupsRequest {
}
export interface ListProtectionGroupsCommandOutput extends ListProtectionGroupsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the <a>ProtectionGroup</a> objects for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListProtectionGroupsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListProtectionGroupsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new ListProtectionGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtectionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProtectionGroupsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProtectionGroupsCommand extends $Command<ListProtectionGroupsCommandInput, ListProtectionGroupsCommandOutput, ShieldClientResolvedConfig> {
    readonly input: ListProtectionGroupsCommandInput;
    constructor(input: ListProtectionGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProtectionGroupsCommandInput, ListProtectionGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
