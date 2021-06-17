import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectEntitiesRequest, DetectEntitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetectEntitiesCommandInput extends DetectEntitiesRequest {
}
export interface DetectEntitiesCommandOutput extends DetectEntitiesResponse, __MetadataBearer {
}
/**
 * <p>Inspects text for named entities, and returns information about them. For more
 *       information, about named entities, see <a>how-entities</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectEntitiesCommandInput} for command's `input` shape.
 * @see {@link DetectEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectEntitiesCommand extends $Command<DetectEntitiesCommandInput, DetectEntitiesCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectEntitiesCommandInput;
    constructor(input: DetectEntitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectEntitiesCommandInput, DetectEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}
