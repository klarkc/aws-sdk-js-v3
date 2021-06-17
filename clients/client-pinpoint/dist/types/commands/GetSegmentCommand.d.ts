import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetSegmentRequest, GetSegmentResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSegmentCommandInput extends GetSegmentRequest {
}
export interface GetSegmentCommandOutput extends GetSegmentResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentCommandInput} for command's `input` shape.
 * @see {@link GetSegmentCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSegmentCommand extends $Command<GetSegmentCommandInput, GetSegmentCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetSegmentCommandInput;
    constructor(input: GetSegmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSegmentCommandInput, GetSegmentCommandOutput>;
    private serialize;
    private deserialize;
}
