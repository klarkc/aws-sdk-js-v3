import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { RemoveAttributesFromFindingsRequest, RemoveAttributesFromFindingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveAttributesFromFindingsCommandInput extends RemoveAttributesFromFindingsRequest {
}
export interface RemoveAttributesFromFindingsCommandOutput extends RemoveAttributesFromFindingsResponse, __MetadataBearer {
}
/**
 * <p>Removes entire attributes (key and value pairs) from the findings that are specified
 *          by the ARNs of the findings where an attribute with the specified key exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, RemoveAttributesFromFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, RemoveAttributesFromFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new RemoveAttributesFromFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAttributesFromFindingsCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesFromFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveAttributesFromFindingsCommand extends $Command<RemoveAttributesFromFindingsCommandInput, RemoveAttributesFromFindingsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: RemoveAttributesFromFindingsCommandInput;
    constructor(input: RemoveAttributesFromFindingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveAttributesFromFindingsCommandInput, RemoveAttributesFromFindingsCommandOutput>;
    private serialize;
    private deserialize;
}
