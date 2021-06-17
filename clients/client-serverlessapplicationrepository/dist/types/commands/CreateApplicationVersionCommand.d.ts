import { ServerlessApplicationRepositoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServerlessApplicationRepositoryClient";
import { CreateApplicationVersionRequest, CreateApplicationVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateApplicationVersionCommandInput extends CreateApplicationVersionRequest {
}
export interface CreateApplicationVersionCommandOutput extends CreateApplicationVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates an application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateApplicationVersionCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateApplicationVersionCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new CreateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateApplicationVersionCommand extends $Command<CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput, ServerlessApplicationRepositoryClientResolvedConfig> {
    readonly input: CreateApplicationVersionCommandInput;
    constructor(input: CreateApplicationVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServerlessApplicationRepositoryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApplicationVersionCommandInput, CreateApplicationVersionCommandOutput>;
    private serialize;
    private deserialize;
}
