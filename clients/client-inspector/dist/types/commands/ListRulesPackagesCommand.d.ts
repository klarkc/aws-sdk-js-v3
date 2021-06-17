import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListRulesPackagesRequest, ListRulesPackagesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRulesPackagesCommandInput extends ListRulesPackagesRequest {
}
export interface ListRulesPackagesCommandOutput extends ListRulesPackagesResponse, __MetadataBearer {
}
/**
 * <p>Lists all available Amazon Inspector rules packages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListRulesPackagesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListRulesPackagesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListRulesPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRulesPackagesCommandInput} for command's `input` shape.
 * @see {@link ListRulesPackagesCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRulesPackagesCommand extends $Command<ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListRulesPackagesCommandInput;
    constructor(input: ListRulesPackagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput>;
    private serialize;
    private deserialize;
}
