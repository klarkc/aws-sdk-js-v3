import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateDistributionRequest, UpdateDistributionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDistributionCommandInput extends UpdateDistributionRequest {
}
export interface UpdateDistributionCommandOutput extends UpdateDistributionResult, __MetadataBearer {
}
/**
 * <p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p>
 *          <p>Use this action to update the configuration of your existing distribution</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDistributionCommand extends $Command<UpdateDistributionCommandInput, UpdateDistributionCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateDistributionCommandInput;
    constructor(input: UpdateDistributionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDistributionCommandInput, UpdateDistributionCommandOutput>;
    private serialize;
    private deserialize;
}
