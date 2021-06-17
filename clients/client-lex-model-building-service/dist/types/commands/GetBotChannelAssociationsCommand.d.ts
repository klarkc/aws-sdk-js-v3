import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { GetBotChannelAssociationsRequest, GetBotChannelAssociationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBotChannelAssociationsCommandInput extends GetBotChannelAssociationsRequest {
}
export interface GetBotChannelAssociationsCommandOutput extends GetBotChannelAssociationsResponse, __MetadataBearer {
}
/**
 * <p> Returns a list of all of the channels associated with the
 *       specified bot. </p>
 *          <p>The <code>GetBotChannelAssociations</code> operation requires
 *       permissions for the <code>lex:GetBotChannelAssociations</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotChannelAssociationsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotChannelAssociationsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotChannelAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotChannelAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetBotChannelAssociationsCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBotChannelAssociationsCommand extends $Command<GetBotChannelAssociationsCommandInput, GetBotChannelAssociationsCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: GetBotChannelAssociationsCommandInput;
    constructor(input: GetBotChannelAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBotChannelAssociationsCommandInput, GetBotChannelAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
