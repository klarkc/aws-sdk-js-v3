import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetExportJobRequest, GetExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetExportJobCommandInput extends GetExportJobRequest {
}
export interface GetExportJobCommandOutput extends GetExportJobResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of a specific export job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetExportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetExportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExportJobCommandInput} for command's `input` shape.
 * @see {@link GetExportJobCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetExportJobCommand extends $Command<GetExportJobCommandInput, GetExportJobCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetExportJobCommandInput;
    constructor(input: GetExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExportJobCommandInput, GetExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
