import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ImportComponentRequest, ImportComponentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportComponentCommandInput extends ImportComponentRequest {
}
export interface ImportComponentCommandOutput extends ImportComponentResponse, __MetadataBearer {
}
/**
 * <p>Imports a component and transforms its data into a component document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ImportComponentCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ImportComponentCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ImportComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportComponentCommandInput} for command's `input` shape.
 * @see {@link ImportComponentCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportComponentCommand extends $Command<ImportComponentCommandInput, ImportComponentCommandOutput, ImagebuilderClientResolvedConfig> {
    readonly input: ImportComponentCommandInput;
    constructor(input: ImportComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ImagebuilderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportComponentCommandInput, ImportComponentCommandOutput>;
    private serialize;
    private deserialize;
}
