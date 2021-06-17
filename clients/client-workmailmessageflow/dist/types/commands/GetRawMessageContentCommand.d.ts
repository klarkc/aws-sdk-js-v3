import { ServiceInputTypes, ServiceOutputTypes, WorkMailMessageFlowClientResolvedConfig } from "../WorkMailMessageFlowClient";
import { GetRawMessageContentRequest, GetRawMessageContentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRawMessageContentCommandInput extends GetRawMessageContentRequest {
}
export interface GetRawMessageContentCommandOutput extends GetRawMessageContentResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the raw content of an in-transit email message, in MIME format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailMessageFlowClient, GetRawMessageContentCommand } from "@aws-sdk/client-workmailmessageflow"; // ES Modules import
 * // const { WorkMailMessageFlowClient, GetRawMessageContentCommand } = require("@aws-sdk/client-workmailmessageflow"); // CommonJS import
 * const client = new WorkMailMessageFlowClient(config);
 * const command = new GetRawMessageContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRawMessageContentCommandInput} for command's `input` shape.
 * @see {@link GetRawMessageContentCommandOutput} for command's `response` shape.
 * @see {@link WorkMailMessageFlowClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRawMessageContentCommand extends $Command<GetRawMessageContentCommandInput, GetRawMessageContentCommandOutput, WorkMailMessageFlowClientResolvedConfig> {
    readonly input: GetRawMessageContentCommandInput;
    constructor(input: GetRawMessageContentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailMessageFlowClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRawMessageContentCommandInput, GetRawMessageContentCommandOutput>;
    private serialize;
    private deserialize;
}
