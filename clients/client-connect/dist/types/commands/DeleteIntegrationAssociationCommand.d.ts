import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DeleteIntegrationAssociationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIntegrationAssociationCommandInput extends DeleteIntegrationAssociationRequest {
}
export interface DeleteIntegrationAssociationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an AppIntegration association from an Amazon Connect instance. The association must not have
 *    any use cases associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteIntegrationAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteIntegrationAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DeleteIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIntegrationAssociationCommand extends $Command<DeleteIntegrationAssociationCommandInput, DeleteIntegrationAssociationCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DeleteIntegrationAssociationCommandInput;
    constructor(input: DeleteIntegrationAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIntegrationAssociationCommandInput, DeleteIntegrationAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
