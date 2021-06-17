import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { BatchDetectEntitiesRequest, BatchDetectEntitiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDetectEntitiesCommandInput extends BatchDetectEntitiesRequest {
}
export interface BatchDetectEntitiesCommandOutput extends BatchDetectEntitiesResponse, __MetadataBearer {
}
/**
 * <p>Inspects the text of a batch of documents for named entities and returns information
 *       about them. For more information about named entities, see <a>how-entities</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, BatchDetectEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, BatchDetectEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new BatchDetectEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDetectEntitiesCommandInput} for command's `input` shape.
 * @see {@link BatchDetectEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDetectEntitiesCommand extends $Command<BatchDetectEntitiesCommandInput, BatchDetectEntitiesCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: BatchDetectEntitiesCommandInput;
    constructor(input: BatchDetectEntitiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDetectEntitiesCommandInput, BatchDetectEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}
