import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteWorkteamRequest, DeleteWorkteamResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWorkteamCommandInput extends DeleteWorkteamRequest {
}
export interface DeleteWorkteamCommandOutput extends DeleteWorkteamResponse, __MetadataBearer {
}
/**
 * <p>Deletes an existing work team. This operation can't be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkteamCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWorkteamCommand extends $Command<DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteWorkteamCommandInput;
    constructor(input: DeleteWorkteamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
