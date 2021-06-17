import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateExportJobRequest, CreateExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateExportJobCommandInput extends CreateExportJobRequest {
}
export interface CreateExportJobCommandOutput extends CreateExportJobResponse, __MetadataBearer {
}
/**
 * <p>Creates an export job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateExportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateExportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateExportJobCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateExportJobCommand extends $Command<CreateExportJobCommandInput, CreateExportJobCommandOutput, PinpointClientResolvedConfig> {
    readonly input: CreateExportJobCommandInput;
    constructor(input: CreateExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateExportJobCommandInput, CreateExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
