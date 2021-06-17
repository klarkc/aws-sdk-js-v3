import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { PutParameterRequest, PutParameterResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutParameterCommandInput extends PutParameterRequest {
}
export interface PutParameterCommandOutput extends PutParameterResult, __MetadataBearer {
}
/**
 * <p>Add a parameter to the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new PutParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutParameterCommandInput} for command's `input` shape.
 * @see {@link PutParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutParameterCommand extends $Command<PutParameterCommandInput, PutParameterCommandOutput, SSMClientResolvedConfig> {
    readonly input: PutParameterCommandInput;
    constructor(input: PutParameterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutParameterCommandInput, PutParameterCommandOutput>;
    private serialize;
    private deserialize;
}
