import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { RemoveAttributesRequest, RemoveAttributesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RemoveAttributesCommandInput extends RemoveAttributesRequest {
}
export interface RemoveAttributesCommandOutput extends RemoveAttributesResponse, __MetadataBearer {
}
/**
 * <p>Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, RemoveAttributesCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, RemoveAttributesCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new RemoveAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveAttributesCommandInput} for command's `input` shape.
 * @see {@link RemoveAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RemoveAttributesCommand extends $Command<RemoveAttributesCommandInput, RemoveAttributesCommandOutput, PinpointClientResolvedConfig> {
    readonly input: RemoveAttributesCommandInput;
    constructor(input: RemoveAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveAttributesCommandInput, RemoveAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
