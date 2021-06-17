import { ServerlessApplicationRepositoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServerlessApplicationRepositoryClient";
import { CreateCloudFormationChangeSetRequest, CreateCloudFormationChangeSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCloudFormationChangeSetCommandInput extends CreateCloudFormationChangeSetRequest {
}
export interface CreateCloudFormationChangeSetCommandOutput extends CreateCloudFormationChangeSetResponse, __MetadataBearer {
}
/**
 * <p>Creates an AWS CloudFormation change set for the given application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new CreateCloudFormationChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationChangeSetCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCloudFormationChangeSetCommand extends $Command<CreateCloudFormationChangeSetCommandInput, CreateCloudFormationChangeSetCommandOutput, ServerlessApplicationRepositoryClientResolvedConfig> {
    readonly input: CreateCloudFormationChangeSetCommandInput;
    constructor(input: CreateCloudFormationChangeSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServerlessApplicationRepositoryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCloudFormationChangeSetCommandInput, CreateCloudFormationChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
