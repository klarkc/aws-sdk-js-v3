import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateWorkteamRequest, UpdateWorkteamResponse } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateWorkteamCommandInput extends UpdateWorkteamRequest {
}
export interface UpdateWorkteamCommandOutput extends UpdateWorkteamResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing work team with new member definitions or description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkteamCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateWorkteamCommand extends $Command<UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateWorkteamCommandInput;
    constructor(input: UpdateWorkteamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
