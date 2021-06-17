import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateCapacityProviderRequest, CreateCapacityProviderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCapacityProviderCommandInput extends CreateCapacityProviderRequest {
}
export interface CreateCapacityProviderCommandOutput extends CreateCapacityProviderResponse, __MetadataBearer {
}
/**
 * <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS
 * 			cluster and are used in capacity provider strategies to facilitate cluster auto
 * 			scaling.</p>
 * 		       <p>Only capacity providers using an Auto Scaling group can be created. Amazon ECS tasks on
 * 			AWS Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers
 * 			which are already created and available to all accounts in Regions supported by
 * 			AWS Fargate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new CreateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCapacityProviderCommand extends $Command<CreateCapacityProviderCommandInput, CreateCapacityProviderCommandOutput, ECSClientResolvedConfig> {
    readonly input: CreateCapacityProviderCommandInput;
    constructor(input: CreateCapacityProviderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCapacityProviderCommandInput, CreateCapacityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
