import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateProvisioningClaimRequest, CreateProvisioningClaimResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProvisioningClaimCommandInput extends CreateProvisioningClaimRequest {
}
export interface CreateProvisioningClaimCommandOutput extends CreateProvisioningClaimResponse, __MetadataBearer {
}
/**
 * <p>Creates a provisioning claim.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateProvisioningClaimCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateProvisioningClaimCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateProvisioningClaimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningClaimCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningClaimCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProvisioningClaimCommand extends $Command<CreateProvisioningClaimCommandInput, CreateProvisioningClaimCommandOutput, IoTClientResolvedConfig> {
    readonly input: CreateProvisioningClaimCommandInput;
    constructor(input: CreateProvisioningClaimCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProvisioningClaimCommandInput, CreateProvisioningClaimCommandOutput>;
    private serialize;
    private deserialize;
}
