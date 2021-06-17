import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetSegmentImportJobsRequest, GetSegmentImportJobsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSegmentImportJobsCommandInput extends GetSegmentImportJobsRequest {
}
export interface GetSegmentImportJobsCommandOutput extends GetSegmentImportJobsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the import jobs for a segment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentImportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentImportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentImportJobsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSegmentImportJobsCommand extends $Command<GetSegmentImportJobsCommandInput, GetSegmentImportJobsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetSegmentImportJobsCommandInput;
    constructor(input: GetSegmentImportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSegmentImportJobsCommandInput, GetSegmentImportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
