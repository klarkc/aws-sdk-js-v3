import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectDominantLanguageRequest, DetectDominantLanguageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetectDominantLanguageCommandInput extends DetectDominantLanguageRequest {
}
export interface DetectDominantLanguageCommandOutput extends DetectDominantLanguageResponse, __MetadataBearer {
}
/**
 * <p>Determines the dominant language of the input text. For a list of languages that Amazon
 *       Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectDominantLanguageCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectDominantLanguageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectDominantLanguageCommandInput} for command's `input` shape.
 * @see {@link DetectDominantLanguageCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectDominantLanguageCommand extends $Command<DetectDominantLanguageCommandInput, DetectDominantLanguageCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectDominantLanguageCommandInput;
    constructor(input: DetectDominantLanguageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectDominantLanguageCommandInput, DetectDominantLanguageCommandOutput>;
    private serialize;
    private deserialize;
}
