import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { StartDocumentClassificationJobRequest, StartDocumentClassificationJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDocumentClassificationJobCommandInput extends StartDocumentClassificationJobRequest {
}
export interface StartDocumentClassificationJobCommandOutput extends StartDocumentClassificationJobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous document classification job. Use the  operation to track the progress of the
 *       job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StartDocumentClassificationJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StartDocumentClassificationJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StartDocumentClassificationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDocumentClassificationJobCommandInput} for command's `input` shape.
 * @see {@link StartDocumentClassificationJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDocumentClassificationJobCommand extends $Command<StartDocumentClassificationJobCommandInput, StartDocumentClassificationJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: StartDocumentClassificationJobCommandInput;
    constructor(input: StartDocumentClassificationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDocumentClassificationJobCommandInput, StartDocumentClassificationJobCommandOutput>;
    private serialize;
    private deserialize;
}
