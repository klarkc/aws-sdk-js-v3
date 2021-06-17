import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListTaskDefinitionsRequest, ListTaskDefinitionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTaskDefinitionsCommandInput extends ListTaskDefinitionsRequest {
}
export interface ListTaskDefinitionsCommandOutput extends ListTaskDefinitionsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of task definitions that are registered to your account. You can filter
 * 			the results by family name with the <code>familyPrefix</code> parameter or by status
 * 			with the <code>status</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTaskDefinitionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTaskDefinitionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTaskDefinitionsCommand extends $Command<ListTaskDefinitionsCommandInput, ListTaskDefinitionsCommandOutput, ECSClientResolvedConfig> {
    readonly input: ListTaskDefinitionsCommandInput;
    constructor(input: ListTaskDefinitionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTaskDefinitionsCommandInput, ListTaskDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
