import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectSyntaxRequest, DetectSyntaxResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetectSyntaxCommandInput extends DetectSyntaxRequest {
}
export interface DetectSyntaxCommandOutput extends DetectSyntaxResponse, __MetadataBearer {
}
/**
 * <p>Inspects text for syntax and the part of speech of words in the document. For more
 *       information, <a>how-syntax</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectSyntaxCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectSyntaxCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectSyntaxCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectSyntaxCommandInput} for command's `input` shape.
 * @see {@link DetectSyntaxCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectSyntaxCommand extends $Command<DetectSyntaxCommandInput, DetectSyntaxCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectSyntaxCommandInput;
    constructor(input: DetectSyntaxCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectSyntaxCommandInput, DetectSyntaxCommandOutput>;
    private serialize;
    private deserialize;
}
