import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { GetDirectoryLimitsRequest, GetDirectoryLimitsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDirectoryLimitsCommandInput extends GetDirectoryLimitsRequest {
}
export interface GetDirectoryLimitsCommandOutput extends GetDirectoryLimitsResult, __MetadataBearer {
}
/**
 * <p>Obtains directory limit information for the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetDirectoryLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetDirectoryLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new GetDirectoryLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDirectoryLimitsCommandInput} for command's `input` shape.
 * @see {@link GetDirectoryLimitsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDirectoryLimitsCommand extends $Command<GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: GetDirectoryLimitsCommandInput;
    constructor(input: GetDirectoryLimitsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
