import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListMonitoringExecutionsRequest, ListMonitoringExecutionsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMonitoringExecutionsCommandInput extends ListMonitoringExecutionsRequest {
}
export interface ListMonitoringExecutionsCommandOutput extends ListMonitoringExecutionsResponse, __MetadataBearer {
}
/**
 * <p>Returns list of all monitoring job executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringExecutionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringExecutionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListMonitoringExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMonitoringExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMonitoringExecutionsCommand extends $Command<ListMonitoringExecutionsCommandInput, ListMonitoringExecutionsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListMonitoringExecutionsCommandInput;
    constructor(input: ListMonitoringExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMonitoringExecutionsCommandInput, ListMonitoringExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
