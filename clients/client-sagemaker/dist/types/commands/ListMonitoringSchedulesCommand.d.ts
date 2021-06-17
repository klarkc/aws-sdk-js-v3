import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListMonitoringSchedulesRequest, ListMonitoringSchedulesResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMonitoringSchedulesCommandInput extends ListMonitoringSchedulesRequest {
}
export interface ListMonitoringSchedulesCommandOutput extends ListMonitoringSchedulesResponse, __MetadataBearer {
}
/**
 * <p>Returns list of all monitoring schedules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringSchedulesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringSchedulesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListMonitoringSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMonitoringSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringSchedulesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMonitoringSchedulesCommand extends $Command<ListMonitoringSchedulesCommandInput, ListMonitoringSchedulesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListMonitoringSchedulesCommandInput;
    constructor(input: ListMonitoringSchedulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMonitoringSchedulesCommandInput, ListMonitoringSchedulesCommandOutput>;
    private serialize;
    private deserialize;
}
