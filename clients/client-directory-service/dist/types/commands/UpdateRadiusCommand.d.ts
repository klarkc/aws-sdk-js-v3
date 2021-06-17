import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateRadiusRequest, UpdateRadiusResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateRadiusCommandInput extends UpdateRadiusRequest {
}
export interface UpdateRadiusCommandOutput extends UpdateRadiusResult, __MetadataBearer {
}
/**
 * <p>Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateRadiusCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateRadiusCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UpdateRadiusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRadiusCommandInput} for command's `input` shape.
 * @see {@link UpdateRadiusCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateRadiusCommand extends $Command<UpdateRadiusCommandInput, UpdateRadiusCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UpdateRadiusCommandInput;
    constructor(input: UpdateRadiusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRadiusCommandInput, UpdateRadiusCommandOutput>;
    private serialize;
    private deserialize;
}
