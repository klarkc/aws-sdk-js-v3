import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { ExportProjectRequest, ExportProjectResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportProjectCommandInput extends ExportProjectRequest {
}
export interface ExportProjectCommandOutput extends ExportProjectResult, __MetadataBearer {
}
/**
 * <p>
 *             Exports project configuration to a snapshot which can be downloaded and shared.
 *             Note that mobile app push credentials are encrypted in exported projects, so they
 *             can only be shared successfully within the same AWS account.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ExportProjectCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ExportProjectCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ExportProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportProjectCommandInput} for command's `input` shape.
 * @see {@link ExportProjectCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportProjectCommand extends $Command<ExportProjectCommandInput, ExportProjectCommandOutput, MobileClientResolvedConfig> {
    readonly input: ExportProjectCommandInput;
    constructor(input: ExportProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MobileClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportProjectCommandInput, ExportProjectCommandOutput>;
    private serialize;
    private deserialize;
}
