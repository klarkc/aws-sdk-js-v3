import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListAccessControlRulesRequest, ListAccessControlRulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAccessControlRulesCommandInput extends ListAccessControlRulesRequest {
}
export interface ListAccessControlRulesCommandOutput extends ListAccessControlRulesResponse, __MetadataBearer {
}
/**
 * <p>Lists the access control rules for the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListAccessControlRulesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListAccessControlRulesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListAccessControlRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessControlRulesCommandInput} for command's `input` shape.
 * @see {@link ListAccessControlRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAccessControlRulesCommand extends $Command<ListAccessControlRulesCommandInput, ListAccessControlRulesCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListAccessControlRulesCommandInput;
    constructor(input: ListAccessControlRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccessControlRulesCommandInput, ListAccessControlRulesCommandOutput>;
    private serialize;
    private deserialize;
}
