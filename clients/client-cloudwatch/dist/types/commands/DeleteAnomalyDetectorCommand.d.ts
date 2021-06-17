import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteAnomalyDetectorInput, DeleteAnomalyDetectorOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAnomalyDetectorCommandInput extends DeleteAnomalyDetectorInput {
}
export interface DeleteAnomalyDetectorCommandOutput extends DeleteAnomalyDetectorOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified anomaly detection model from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAnomalyDetectorCommand extends $Command<DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DeleteAnomalyDetectorCommandInput;
    constructor(input: DeleteAnomalyDetectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
