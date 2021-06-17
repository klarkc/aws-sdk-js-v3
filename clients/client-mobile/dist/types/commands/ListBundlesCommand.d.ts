import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { ListBundlesRequest, ListBundlesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBundlesCommandInput extends ListBundlesRequest {
}
export interface ListBundlesCommandOutput extends ListBundlesResult, __MetadataBearer {
}
/**
 * <p>
 *             List all available bundles.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ListBundlesCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ListBundlesCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ListBundlesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBundlesCommandInput} for command's `input` shape.
 * @see {@link ListBundlesCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBundlesCommand extends $Command<ListBundlesCommandInput, ListBundlesCommandOutput, MobileClientResolvedConfig> {
    readonly input: ListBundlesCommandInput;
    constructor(input: ListBundlesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MobileClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBundlesCommandInput, ListBundlesCommandOutput>;
    private serialize;
    private deserialize;
}
