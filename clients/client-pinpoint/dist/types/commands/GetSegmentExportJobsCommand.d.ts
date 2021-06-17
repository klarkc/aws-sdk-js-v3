import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetSegmentExportJobsRequest, GetSegmentExportJobsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSegmentExportJobsCommandInput extends GetSegmentExportJobsRequest {
}
export interface GetSegmentExportJobsCommandOutput extends GetSegmentExportJobsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the export jobs for a segment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentExportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentExportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentExportJobsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentExportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSegmentExportJobsCommand extends $Command<GetSegmentExportJobsCommandInput, GetSegmentExportJobsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetSegmentExportJobsCommandInput;
    constructor(input: GetSegmentExportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSegmentExportJobsCommandInput, GetSegmentExportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
