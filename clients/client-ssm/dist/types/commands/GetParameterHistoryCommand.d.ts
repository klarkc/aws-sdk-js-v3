import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetParameterHistoryRequest, GetParameterHistoryResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetParameterHistoryCommandInput extends GetParameterHistoryRequest {
}
export interface GetParameterHistoryCommandOutput extends GetParameterHistoryResult, __MetadataBearer {
}
/**
 * <p>Retrieves the history of all changes to a parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterHistoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParameterHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParameterHistoryCommandInput} for command's `input` shape.
 * @see {@link GetParameterHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetParameterHistoryCommand extends $Command<GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetParameterHistoryCommandInput;
    constructor(input: GetParameterHistoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
