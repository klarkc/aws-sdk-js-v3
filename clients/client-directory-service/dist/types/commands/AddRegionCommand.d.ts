import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { AddRegionRequest, AddRegionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddRegionCommandInput extends AddRegionRequest {
}
export interface AddRegionCommandOutput extends AddRegionResult, __MetadataBearer {
}
/**
 * <p>Adds two domain controllers in the specified Region for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, AddRegionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, AddRegionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new AddRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddRegionCommandInput} for command's `input` shape.
 * @see {@link AddRegionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddRegionCommand extends $Command<AddRegionCommandInput, AddRegionCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: AddRegionCommandInput;
    constructor(input: AddRegionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddRegionCommandInput, AddRegionCommandOutput>;
    private serialize;
    private deserialize;
}
