import { ServerlessApplicationRepositoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServerlessApplicationRepositoryClient";
import { CreateCloudFormationTemplateRequest, CreateCloudFormationTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCloudFormationTemplateCommandInput extends CreateCloudFormationTemplateRequest {
}
export interface CreateCloudFormationTemplateCommandOutput extends CreateCloudFormationTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates an AWS CloudFormation template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateCloudFormationTemplateCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateCloudFormationTemplateCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new CreateCloudFormationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCloudFormationTemplateCommand extends $Command<CreateCloudFormationTemplateCommandInput, CreateCloudFormationTemplateCommandOutput, ServerlessApplicationRepositoryClientResolvedConfig> {
    readonly input: CreateCloudFormationTemplateCommandInput;
    constructor(input: CreateCloudFormationTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServerlessApplicationRepositoryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCloudFormationTemplateCommandInput, CreateCloudFormationTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
