import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { ListEntitiesDetectionV2JobsRequest, ListEntitiesDetectionV2JobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEntitiesDetectionV2JobsCommandInput extends ListEntitiesDetectionV2JobsRequest {
}
export interface ListEntitiesDetectionV2JobsCommandOutput extends ListEntitiesDetectionV2JobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of medical entity detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, ListEntitiesDetectionV2JobsCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, ListEntitiesDetectionV2JobsCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new ListEntitiesDetectionV2JobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEntitiesDetectionV2JobsCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesDetectionV2JobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEntitiesDetectionV2JobsCommand extends $Command<ListEntitiesDetectionV2JobsCommandInput, ListEntitiesDetectionV2JobsCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: ListEntitiesDetectionV2JobsCommandInput;
    constructor(input: ListEntitiesDetectionV2JobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEntitiesDetectionV2JobsCommandInput, ListEntitiesDetectionV2JobsCommandOutput>;
    private serialize;
    private deserialize;
}
