import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectPiiEntitiesRequest, DetectPiiEntitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetectPiiEntitiesCommandInput extends DetectPiiEntitiesRequest {
}
export interface DetectPiiEntitiesCommandOutput extends DetectPiiEntitiesResponse, __MetadataBearer {
}
/**
 * <p>Inspects the input text for entities that contain personally identifiable information
 *       (PII) and returns information about them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectPiiEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectPiiEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectPiiEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectPiiEntitiesCommandInput} for command's `input` shape.
 * @see {@link DetectPiiEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectPiiEntitiesCommand extends $Command<DetectPiiEntitiesCommandInput, DetectPiiEntitiesCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DetectPiiEntitiesCommandInput;
    constructor(input: DetectPiiEntitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectPiiEntitiesCommandInput, DetectPiiEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}
