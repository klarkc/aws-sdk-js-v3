import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { CreateHarvestJobRequest, CreateHarvestJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateHarvestJobCommandInput extends CreateHarvestJobRequest {
}
export interface CreateHarvestJobCommandOutput extends CreateHarvestJobResponse, __MetadataBearer {
}
/**
 * Creates a new HarvestJob record.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateHarvestJobCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateHarvestJobCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new CreateHarvestJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHarvestJobCommandInput} for command's `input` shape.
 * @see {@link CreateHarvestJobCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateHarvestJobCommand extends $Command<CreateHarvestJobCommandInput, CreateHarvestJobCommandOutput, MediaPackageClientResolvedConfig> {
    readonly input: CreateHarvestJobCommandInput;
    constructor(input: CreateHarvestJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHarvestJobCommandInput, CreateHarvestJobCommandOutput>;
    private serialize;
    private deserialize;
}
