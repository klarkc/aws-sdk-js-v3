import { ServerlessApplicationRepositoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServerlessApplicationRepositoryClient";
import { ListApplicationDependenciesRequest, ListApplicationDependenciesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListApplicationDependenciesCommandInput extends ListApplicationDependenciesRequest {
}
export interface ListApplicationDependenciesCommandOutput extends ListApplicationDependenciesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the list of applications nested in the containing application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, ListApplicationDependenciesCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, ListApplicationDependenciesCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new ListApplicationDependenciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationDependenciesCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListApplicationDependenciesCommand extends $Command<ListApplicationDependenciesCommandInput, ListApplicationDependenciesCommandOutput, ServerlessApplicationRepositoryClientResolvedConfig> {
    readonly input: ListApplicationDependenciesCommandInput;
    constructor(input: ListApplicationDependenciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServerlessApplicationRepositoryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApplicationDependenciesCommandInput, ListApplicationDependenciesCommandOutput>;
    private serialize;
    private deserialize;
}
