import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateIntegrationAssociationRequest, CreateIntegrationAssociationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateIntegrationAssociationCommandInput extends CreateIntegrationAssociationRequest {
}
export interface CreateIntegrationAssociationCommandOutput extends CreateIntegrationAssociationResponse, __MetadataBearer {
}
/**
 * <p>Create an AppIntegration association with an Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateIntegrationAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateIntegrationAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateIntegrationAssociationCommand extends $Command<CreateIntegrationAssociationCommandInput, CreateIntegrationAssociationCommandOutput, ConnectClientResolvedConfig> {
    readonly input: CreateIntegrationAssociationCommandInput;
    constructor(input: CreateIntegrationAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIntegrationAssociationCommandInput, CreateIntegrationAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
