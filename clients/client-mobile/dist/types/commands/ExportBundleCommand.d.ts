import { MobileClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MobileClient";
import { ExportBundleRequest, ExportBundleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportBundleCommandInput extends ExportBundleRequest {
}
export interface ExportBundleCommandOutput extends ExportBundleResult, __MetadataBearer {
}
/**
 * <p>
 *             Generates customized software development kit (SDK) and or tool packages
 *             used to integrate mobile web or mobile app clients with backend AWS resources.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MobileClient, ExportBundleCommand } from "@aws-sdk/client-mobile"; // ES Modules import
 * // const { MobileClient, ExportBundleCommand } = require("@aws-sdk/client-mobile"); // CommonJS import
 * const client = new MobileClient(config);
 * const command = new ExportBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportBundleCommandInput} for command's `input` shape.
 * @see {@link ExportBundleCommandOutput} for command's `response` shape.
 * @see {@link MobileClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportBundleCommand extends $Command<ExportBundleCommandInput, ExportBundleCommandOutput, MobileClientResolvedConfig> {
    readonly input: ExportBundleCommandInput;
    constructor(input: ExportBundleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MobileClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportBundleCommandInput, ExportBundleCommandOutput>;
    private serialize;
    private deserialize;
}
