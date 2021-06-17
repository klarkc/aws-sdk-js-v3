import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListAccountSettingsRequest, ListAccountSettingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAccountSettingsCommandInput extends ListAccountSettingsRequest {
}
export interface ListAccountSettingsCommandOutput extends ListAccountSettingsResponse, __MetadataBearer {
}
/**
 * <p>Lists the account settings for a specified principal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListAccountSettingsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListAccountSettingsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link ListAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAccountSettingsCommand extends $Command<ListAccountSettingsCommandInput, ListAccountSettingsCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListAccountSettingsCommandInput;
    constructor(input: ListAccountSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccountSettingsCommandInput, ListAccountSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
