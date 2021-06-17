import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateWorkteamRequest, CreateWorkteamResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateWorkteamCommandInput extends CreateWorkteamRequest {
}
export interface CreateWorkteamCommandOutput extends CreateWorkteamResponse, __MetadataBearer {
}
/**
 * <p>Creates a new work team for labeling your data. A work team is defined by one or more
 *             Amazon Cognito user pools. You must first create the user pools before you can create a work
 *             team.</p>
 *         <p>You cannot create more than 25 work teams in an account and region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkteamCommandInput} for command's `input` shape.
 * @see {@link CreateWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateWorkteamCommand extends $Command<CreateWorkteamCommandInput, CreateWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateWorkteamCommandInput;
    constructor(input: CreateWorkteamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWorkteamCommandInput, CreateWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
