import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetSegmentVersionsRequest, GetSegmentVersionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSegmentVersionsCommandInput extends GetSegmentVersionsRequest {
}
export interface GetSegmentVersionsCommandOutput extends GetSegmentVersionsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentVersionsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentVersionsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentVersionsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentVersionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSegmentVersionsCommand extends $Command<GetSegmentVersionsCommandInput, GetSegmentVersionsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetSegmentVersionsCommandInput;
    constructor(input: GetSegmentVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSegmentVersionsCommandInput, GetSegmentVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
