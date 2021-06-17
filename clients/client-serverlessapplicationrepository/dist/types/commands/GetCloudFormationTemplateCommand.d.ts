import { ServerlessApplicationRepositoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServerlessApplicationRepositoryClient";
import { GetCloudFormationTemplateRequest, GetCloudFormationTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCloudFormationTemplateCommandInput extends GetCloudFormationTemplateRequest {
}
export interface GetCloudFormationTemplateCommandOutput extends GetCloudFormationTemplateResponse, __MetadataBearer {
}
/**
 * <p>Gets the specified AWS CloudFormation template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, GetCloudFormationTemplateCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, GetCloudFormationTemplateCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new GetCloudFormationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCloudFormationTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCloudFormationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCloudFormationTemplateCommand extends $Command<GetCloudFormationTemplateCommandInput, GetCloudFormationTemplateCommandOutput, ServerlessApplicationRepositoryClientResolvedConfig> {
    readonly input: GetCloudFormationTemplateCommandInput;
    constructor(input: GetCloudFormationTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServerlessApplicationRepositoryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCloudFormationTemplateCommandInput, GetCloudFormationTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
