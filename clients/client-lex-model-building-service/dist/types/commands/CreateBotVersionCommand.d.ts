import { LexModelBuildingServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelBuildingServiceClient";
import { CreateBotVersionRequest, CreateBotVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateBotVersionCommandInput extends CreateBotVersionRequest {
}
export interface CreateBotVersionCommandOutput extends CreateBotVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new version of the bot based on the <code>$LATEST</code>
 *       version. If the <code>$LATEST</code> version of this resource hasn't
 *       changed since you created the last version, Amazon Lex doesn't create a new
 *       version. It returns the last created version.</p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of the bot.
 *         You can't update the numbered versions that you create with the
 *           <code>CreateBotVersion</code> operation.</p>
 *          </note>
 *          <p> When you create the first version of a bot, Amazon Lex sets the version
 *       to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *          <p> This operation requires permission for the
 *         <code>lex:CreateBotVersion</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateBotVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateBotVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new CreateBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBotVersionCommand extends $Command<CreateBotVersionCommandInput, CreateBotVersionCommandOutput, LexModelBuildingServiceClientResolvedConfig> {
    readonly input: CreateBotVersionCommandInput;
    constructor(input: CreateBotVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelBuildingServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBotVersionCommandInput, CreateBotVersionCommandOutput>;
    private serialize;
    private deserialize;
}
