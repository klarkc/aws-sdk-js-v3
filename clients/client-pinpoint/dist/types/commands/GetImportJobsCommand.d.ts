import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetImportJobsRequest, GetImportJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetImportJobsCommandInput extends GetImportJobsRequest {
}
export interface GetImportJobsCommandOutput extends GetImportJobsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of all the import jobs for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetImportJobsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetImportJobsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImportJobsCommandInput} for command's `input` shape.
 * @see {@link GetImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetImportJobsCommand extends $Command<GetImportJobsCommandInput, GetImportJobsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetImportJobsCommandInput;
    constructor(input: GetImportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetImportJobsCommandInput, GetImportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
