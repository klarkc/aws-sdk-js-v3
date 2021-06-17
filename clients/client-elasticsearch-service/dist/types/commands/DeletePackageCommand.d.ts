import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DeletePackageRequest, DeletePackageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePackageCommandInput extends DeletePackageRequest {
}
export interface DeletePackageCommandOutput extends DeletePackageResponse, __MetadataBearer {
}
/**
 * <p>Delete the package.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeletePackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeletePackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeletePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePackageCommandInput} for command's `input` shape.
 * @see {@link DeletePackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePackageCommand extends $Command<DeletePackageCommandInput, DeletePackageCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DeletePackageCommandInput;
    constructor(input: DeletePackageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePackageCommandInput, DeletePackageCommandOutput>;
    private serialize;
    private deserialize;
}
