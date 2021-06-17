import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DeleteUseCaseRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUseCaseCommandInput extends DeleteUseCaseRequest {
}
export interface DeleteUseCaseCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a use case from an AppIntegration association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteUseCaseCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteUseCaseCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DeleteUseCaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUseCaseCommandInput} for command's `input` shape.
 * @see {@link DeleteUseCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUseCaseCommand extends $Command<DeleteUseCaseCommandInput, DeleteUseCaseCommandOutput, ConnectClientResolvedConfig> {
    readonly input: DeleteUseCaseCommandInput;
    constructor(input: DeleteUseCaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUseCaseCommandInput, DeleteUseCaseCommandOutput>;
    private serialize;
    private deserialize;
}
