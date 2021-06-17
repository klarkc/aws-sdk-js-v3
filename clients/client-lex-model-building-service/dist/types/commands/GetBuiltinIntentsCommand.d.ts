import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { GetBuiltinIntentsRequest, GetBuiltinIntentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBuiltinIntentsCommandInput extends GetBuiltinIntentsRequest {
}
export interface GetBuiltinIntentsCommandOutput extends GetBuiltinIntentsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of built-in intents that meet the specified
 *       criteria.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:GetBuiltinIntents</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBuiltinIntentsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBuiltinIntentsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBuiltinIntentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBuiltinIntentsCommandInput} for command's `input` shape.
 * @see {@link GetBuiltinIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBuiltinIntentsCommand extends $Command<GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: GetBuiltinIntentsCommandInput;
    constructor(input: GetBuiltinIntentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput>;
    private serialize;
    private deserialize;
}
