import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { ListProtectionsRequest, ListProtectionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProtectionsCommandInput extends ListProtectionsRequest {
}
export interface ListProtectionsCommandOutput extends ListProtectionsResponse, __MetadataBearer {
}
/**
 * <p>Lists all <a>Protection</a> objects for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, ListProtectionsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, ListProtectionsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new ListProtectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtectionsCommandInput} for command's `input` shape.
 * @see {@link ListProtectionsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProtectionsCommand extends $Command<ListProtectionsCommandInput, ListProtectionsCommandOutput, ShieldClientResolvedConfig> {
    readonly input: ListProtectionsCommandInput;
    constructor(input: ListProtectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProtectionsCommandInput, ListProtectionsCommandOutput>;
    private serialize;
    private deserialize;
}
