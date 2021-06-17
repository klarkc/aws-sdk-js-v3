import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDistributionRequest, DeleteDistributionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDistributionCommandInput extends DeleteDistributionRequest {
}
export interface DeleteDistributionCommandOutput extends DeleteDistributionResult, __MetadataBearer {
}
/**
 * <p>Deletes your Amazon Lightsail content delivery network (CDN) distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDistributionCommandInput} for command's `input` shape.
 * @see {@link DeleteDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDistributionCommand extends $Command<DeleteDistributionCommandInput, DeleteDistributionCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteDistributionCommandInput;
    constructor(input: DeleteDistributionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDistributionCommandInput, DeleteDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
