import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { CreateImportJobRequest, CreateImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateImportJobCommandInput extends CreateImportJobRequest {
}
export interface CreateImportJobCommandOutput extends CreateImportJobResponse, __MetadataBearer {
}
/**
 * <p>Creates an import job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateImportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateImportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateImportJobCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateImportJobCommand extends $Command<CreateImportJobCommandInput, CreateImportJobCommandOutput, PinpointClientResolvedConfig> {
    readonly input: CreateImportJobCommandInput;
    constructor(input: CreateImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateImportJobCommandInput, CreateImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
