import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { StartEntitiesDetectionV2JobRequest, StartEntitiesDetectionV2JobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartEntitiesDetectionV2JobCommandInput extends StartEntitiesDetectionV2JobRequest {
}
export interface StartEntitiesDetectionV2JobCommandOutput extends StartEntitiesDetectionV2JobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous medical entity detection job for a collection of documents. Use the
 *         <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartEntitiesDetectionV2JobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartEntitiesDetectionV2JobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartEntitiesDetectionV2JobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartEntitiesDetectionV2JobCommandInput} for command's `input` shape.
 * @see {@link StartEntitiesDetectionV2JobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartEntitiesDetectionV2JobCommand extends $Command<StartEntitiesDetectionV2JobCommandInput, StartEntitiesDetectionV2JobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: StartEntitiesDetectionV2JobCommandInput;
    constructor(input: StartEntitiesDetectionV2JobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartEntitiesDetectionV2JobCommandInput, StartEntitiesDetectionV2JobCommandOutput>;
    private serialize;
    private deserialize;
}
