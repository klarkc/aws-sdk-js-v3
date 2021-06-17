import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateCapacityProviderRequest, UpdateCapacityProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCapacityProviderCommandInput extends UpdateCapacityProviderRequest {
}
export interface UpdateCapacityProviderCommandOutput extends UpdateCapacityProviderResponse, __MetadataBearer {
}
/**
 * <p>Modifies the parameters for a capacity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCapacityProviderCommand extends $Command<UpdateCapacityProviderCommandInput, UpdateCapacityProviderCommandOutput, ECSClientResolvedConfig> {
    readonly input: UpdateCapacityProviderCommandInput;
    constructor(input: UpdateCapacityProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCapacityProviderCommandInput, UpdateCapacityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
