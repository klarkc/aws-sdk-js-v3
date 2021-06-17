import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectKeyPhrasesRequest, DetectKeyPhrasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetectKeyPhrasesCommandInput extends DetectKeyPhrasesRequest {
}
export interface DetectKeyPhrasesCommandOutput extends DetectKeyPhrasesResponse, __MetadataBearer {
}
/**
 * <p>Detects the key noun phrases found in the text. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectKeyPhrasesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectKeyPhrasesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectKeyPhrasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectKeyPhrasesCommandInput} for command's `input` shape.
 * @see {@link DetectKeyPhrasesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectKeyPhrasesCommand extends $Command<DetectKeyPhrasesCommandInput, DetectKeyPhrasesCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectKeyPhrasesCommandInput;
    constructor(input: DetectKeyPhrasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectKeyPhrasesCommandInput, DetectKeyPhrasesCommandOutput>;
    private serialize;
    private deserialize;
}
