import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { GetIncidentRecordInput, GetIncidentRecordOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetIncidentRecordCommandInput extends GetIncidentRecordInput {
}
export interface GetIncidentRecordCommandOutput extends GetIncidentRecordOutput, __MetadataBearer {
}
/**
 * <p>Returns the details of the specified incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetIncidentRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link GetIncidentRecordCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetIncidentRecordCommand extends $Command<GetIncidentRecordCommandInput, GetIncidentRecordCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: GetIncidentRecordCommandInput;
    constructor(input: GetIncidentRecordCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIncidentRecordCommandInput, GetIncidentRecordCommandOutput>;
    private serialize;
    private deserialize;
}
