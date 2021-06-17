import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListMobileDeviceAccessRulesRequest, ListMobileDeviceAccessRulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMobileDeviceAccessRulesCommandInput extends ListMobileDeviceAccessRulesRequest {
}
export interface ListMobileDeviceAccessRulesCommandOutput extends ListMobileDeviceAccessRulesResponse, __MetadataBearer {
}
/**
 * <p>Lists the mobile device access rules for the specified Amazon WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListMobileDeviceAccessRulesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListMobileDeviceAccessRulesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new ListMobileDeviceAccessRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMobileDeviceAccessRulesCommandInput} for command's `input` shape.
 * @see {@link ListMobileDeviceAccessRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMobileDeviceAccessRulesCommand extends $Command<ListMobileDeviceAccessRulesCommandInput, ListMobileDeviceAccessRulesCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListMobileDeviceAccessRulesCommandInput;
    constructor(input: ListMobileDeviceAccessRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMobileDeviceAccessRulesCommandInput, ListMobileDeviceAccessRulesCommandOutput>;
    private serialize;
    private deserialize;
}
