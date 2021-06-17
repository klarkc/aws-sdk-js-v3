import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateTaskRequest, CreateTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTaskCommandInput extends CreateTaskRequest {
}
export interface CreateTaskCommandOutput extends CreateTaskResponse, __MetadataBearer {
}
/**
 * <p>Creates a task.</p>
 *          <p>A task includes a source location and a destination location, and a configuration
 *       that specifies how data is transferred. A task always transfers data from the source
 *       location to the destination location. The configuration specifies options such as
 *       task scheduling, bandwidth limits, etc. A task is the complete definition of a data
 *       transfer.</p>
 *          <p>When you create a task that transfers data between AWS services in different AWS Regions,
 *       one of the two locations that you specify must reside in the Region where DataSync is being
 *       used. The other location must be specified in a different Region.</p>
 *          <p>You can transfer data between commercial AWS Regions except for China, or between AWS
 *       GovCloud (US-East and US-West) Regions.</p>
 *
 *          <important>
 *             <p>When you use DataSync to copy files or objects between AWS Regions,
 *       you pay for data transfer between Regions. This is billed as data transfer OUT
 *       from your source Region to your destination Region. For more information,
 *       see <a href="http://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer">Data Transfer pricing</a>.
 *     </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTaskCommandInput} for command's `input` shape.
 * @see {@link CreateTaskCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTaskCommand extends $Command<CreateTaskCommandInput, CreateTaskCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateTaskCommandInput;
    constructor(input: CreateTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTaskCommandInput, CreateTaskCommandOutput>;
    private serialize;
    private deserialize;
}
