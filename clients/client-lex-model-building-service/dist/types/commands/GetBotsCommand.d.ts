import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { GetBotsRequest, GetBotsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBotsCommandInput extends GetBotsRequest {
}
export interface GetBotsCommandOutput extends GetBotsResponse, __MetadataBearer {
}
/**
 * <p>Returns bot information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you provide the <code>nameContains</code> field, the
 *           response includes information for the <code>$LATEST</code> version of
 *           all bots whose name contains the specified string.</p>
 *             </li>
 *             <li>
 *                <p>If you don't specify the <code>nameContains</code> field, the
 *           operation returns information about the <code>$LATEST</code> version
 *           of all of your bots.</p>
 *             </li>
 *          </ul>
 *          <p>This operation requires permission for the <code>lex:GetBots</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotsCommandInput} for command's `input` shape.
 * @see {@link GetBotsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBotsCommand extends $Command<GetBotsCommandInput, GetBotsCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: GetBotsCommandInput;
    constructor(input: GetBotsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBotsCommandInput, GetBotsCommandOutput>;
    private serialize;
    private deserialize;
}
