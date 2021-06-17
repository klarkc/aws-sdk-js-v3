import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateBotVersionRequest, CreateBotVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateBotVersionCommandInput extends CreateBotVersionRequest {
}
export interface CreateBotVersionCommandOutput extends CreateBotVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new version of the bot based on the <code>DRAFT</code>
 *          version. If the <code>DRAFT</code> version of this resource hasn't
 *          changed since you created the last version, Amazon Lex doesn't create a new
 *          version, it returns the last created version.</p>
 *          <p>When you create the first version of a bot, Amazon Lex sets the version
 *          to 1. Subsequent versions increment by 1.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBotVersionCommand extends $Command<CreateBotVersionCommandInput, CreateBotVersionCommandOutput, LexModelsV2ClientResolvedConfig> {
    readonly input: CreateBotVersionCommandInput;
    constructor(input: CreateBotVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LexModelsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBotVersionCommandInput, CreateBotVersionCommandOutput>;
    private serialize;
    private deserialize;
}
