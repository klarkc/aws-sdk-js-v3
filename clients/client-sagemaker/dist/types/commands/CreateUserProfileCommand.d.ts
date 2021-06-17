import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateUserProfileRequest, CreateUserProfileResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateUserProfileCommandInput extends CreateUserProfileRequest {
}
export interface CreateUserProfileCommandOutput extends CreateUserProfileResponse, __MetadataBearer {
}
/**
 * <p>Creates a user profile. A user profile represents a single user within a domain, and is
 *      the main way to reference a "person" for the purposes of sharing, reporting, and other
 *      user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an
 *      administrator invites a person by email or imports them from SSO, a user profile is
 *      automatically created. A user profile is the primary holder of settings for an individual
 *      user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
 *    </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateUserProfileCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateUserProfileCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserProfileCommandInput} for command's `input` shape.
 * @see {@link CreateUserProfileCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateUserProfileCommand extends $Command<CreateUserProfileCommandInput, CreateUserProfileCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateUserProfileCommandInput;
    constructor(input: CreateUserProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserProfileCommandInput, CreateUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
