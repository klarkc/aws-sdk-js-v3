import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetExportJobsRequest, GetExportJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetExportJobsCommandInput extends GetExportJobsRequest {
}
export interface GetExportJobsCommandOutput extends GetExportJobsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of all the export jobs for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetExportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetExportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExportJobsCommandInput} for command's `input` shape.
 * @see {@link GetExportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetExportJobsCommand extends $Command<GetExportJobsCommandInput, GetExportJobsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetExportJobsCommandInput;
    constructor(input: GetExportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExportJobsCommandInput, GetExportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
