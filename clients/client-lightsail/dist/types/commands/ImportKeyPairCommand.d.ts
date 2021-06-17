import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ImportKeyPairRequest, ImportKeyPairResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportKeyPairCommandInput extends ImportKeyPairRequest {
}
export interface ImportKeyPairCommandOutput extends ImportKeyPairResult, __MetadataBearer {
}
/**
 * <p>Imports a public SSH key from a specific key pair.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ImportKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ImportKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ImportKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportKeyPairCommandInput} for command's `input` shape.
 * @see {@link ImportKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportKeyPairCommand extends $Command<ImportKeyPairCommandInput, ImportKeyPairCommandOutput, LightsailClientResolvedConfig> {
    readonly input: ImportKeyPairCommandInput;
    constructor(input: ImportKeyPairCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportKeyPairCommandInput, ImportKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
