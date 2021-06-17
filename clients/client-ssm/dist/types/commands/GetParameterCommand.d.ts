import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetParameterRequest, GetParameterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetParameterCommandInput extends GetParameterRequest {
}
export interface GetParameterCommandOutput extends GetParameterResult, __MetadataBearer {
}
/**
 * <p>Get information about a parameter by using the parameter name. Don't confuse this API action
 *    with the <a>GetParameters</a> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetParameterCommandInput} for command's `input` shape.
 * @see {@link GetParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetParameterCommand extends $Command<GetParameterCommandInput, GetParameterCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetParameterCommandInput;
    constructor(input: GetParameterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetParameterCommandInput, GetParameterCommandOutput>;
    private serialize;
    private deserialize;
}
