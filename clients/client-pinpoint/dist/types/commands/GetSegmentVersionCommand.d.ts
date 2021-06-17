import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetSegmentVersionRequest, GetSegmentVersionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSegmentVersionCommandInput extends GetSegmentVersionRequest {
}
export interface GetSegmentVersionCommandOutput extends GetSegmentVersionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentVersionCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentVersionCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentVersionCommandInput} for command's `input` shape.
 * @see {@link GetSegmentVersionCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSegmentVersionCommand extends $Command<GetSegmentVersionCommandInput, GetSegmentVersionCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetSegmentVersionCommandInput;
    constructor(input: GetSegmentVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSegmentVersionCommandInput, GetSegmentVersionCommandOutput>;
    private serialize;
    private deserialize;
}
