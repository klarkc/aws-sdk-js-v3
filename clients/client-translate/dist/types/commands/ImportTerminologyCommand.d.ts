import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { ImportTerminologyRequest, ImportTerminologyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportTerminologyCommandInput extends ImportTerminologyRequest {
}
export interface ImportTerminologyCommandOutput extends ImportTerminologyResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates a custom terminology, depending on whether or not one already exists
 *       for the given terminology name. Importing a terminology with the same name as an existing one
 *       will merge the terminologies based on the chosen merge strategy. Currently, the only supported
 *       merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing
 *       terminology of the same name.</p>
 *          <p>If you import a terminology that overwrites an existing one, the new terminology take up
 *       to 10 minutes to fully propagate and be available for use in a translation due to cache
 *       policies with the DataPlane service that performs the translations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ImportTerminologyCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ImportTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new ImportTerminologyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportTerminologyCommandInput} for command's `input` shape.
 * @see {@link ImportTerminologyCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportTerminologyCommand extends $Command<ImportTerminologyCommandInput, ImportTerminologyCommandOutput, TranslateClientResolvedConfig> {
    readonly input: ImportTerminologyCommandInput;
    constructor(input: ImportTerminologyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportTerminologyCommandInput, ImportTerminologyCommandOutput>;
    private serialize;
    private deserialize;
}
