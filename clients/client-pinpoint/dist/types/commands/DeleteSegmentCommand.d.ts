import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteSegmentRequest, DeleteSegmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSegmentCommandInput extends DeleteSegmentRequest {
}
export interface DeleteSegmentCommandOutput extends DeleteSegmentResponse, __MetadataBearer {
}
/**
 * <p>Deletes a segment from an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteSegmentCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteSegmentCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteSegmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSegmentCommandInput} for command's `input` shape.
 * @see {@link DeleteSegmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSegmentCommand extends $Command<DeleteSegmentCommandInput, DeleteSegmentCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteSegmentCommandInput;
    constructor(input: DeleteSegmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSegmentCommandInput, DeleteSegmentCommandOutput>;
    private serialize;
    private deserialize;
}
