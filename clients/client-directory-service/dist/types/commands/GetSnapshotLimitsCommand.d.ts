import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { GetSnapshotLimitsRequest, GetSnapshotLimitsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSnapshotLimitsCommandInput extends GetSnapshotLimitsRequest {
}
export interface GetSnapshotLimitsCommandOutput extends GetSnapshotLimitsResult, __MetadataBearer {
}
/**
 * <p>Obtains the manual snapshot limits for a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetSnapshotLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetSnapshotLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new GetSnapshotLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSnapshotLimitsCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotLimitsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSnapshotLimitsCommand extends $Command<GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: GetSnapshotLimitsCommandInput;
    constructor(input: GetSnapshotLimitsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
