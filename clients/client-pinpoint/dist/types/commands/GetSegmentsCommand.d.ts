import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetSegmentsRequest, GetSegmentsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSegmentsCommandInput extends GetSegmentsRequest {
}
export interface GetSegmentsCommandOutput extends GetSegmentsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSegmentsCommand extends $Command<GetSegmentsCommandInput, GetSegmentsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetSegmentsCommandInput;
    constructor(input: GetSegmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSegmentsCommandInput, GetSegmentsCommandOutput>;
    private serialize;
    private deserialize;
}
