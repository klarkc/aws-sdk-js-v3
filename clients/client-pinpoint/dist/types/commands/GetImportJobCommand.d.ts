import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetImportJobRequest, GetImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetImportJobCommandInput extends GetImportJobRequest {
}
export interface GetImportJobCommandOutput extends GetImportJobResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of a specific import job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetImportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetImportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImportJobCommandInput} for command's `input` shape.
 * @see {@link GetImportJobCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetImportJobCommand extends $Command<GetImportJobCommandInput, GetImportJobCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetImportJobCommandInput;
    constructor(input: GetImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetImportJobCommandInput, GetImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
