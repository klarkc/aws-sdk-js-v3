import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteUserByPrincipalIdRequest, DeleteUserByPrincipalIdResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteUserByPrincipalIdCommandInput extends DeleteUserByPrincipalIdRequest {
}
export interface DeleteUserByPrincipalIdCommandOutput extends DeleteUserByPrincipalIdResponse, __MetadataBearer {
}
/**
 * <p>Deletes a user identified by its principal ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteUserByPrincipalIdCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteUserByPrincipalIdCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteUserByPrincipalIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserByPrincipalIdCommandInput} for command's `input` shape.
 * @see {@link DeleteUserByPrincipalIdCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteUserByPrincipalIdCommand extends $Command<DeleteUserByPrincipalIdCommandInput, DeleteUserByPrincipalIdCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DeleteUserByPrincipalIdCommandInput;
    constructor(input: DeleteUserByPrincipalIdCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserByPrincipalIdCommandInput, DeleteUserByPrincipalIdCommandOutput>;
    private serialize;
    private deserialize;
}
