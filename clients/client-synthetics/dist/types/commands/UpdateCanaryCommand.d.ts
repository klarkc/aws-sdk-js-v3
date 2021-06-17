import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { UpdateCanaryRequest, UpdateCanaryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCanaryCommandInput extends UpdateCanaryRequest {
}
export interface UpdateCanaryCommandOutput extends UpdateCanaryResponse, __MetadataBearer {
}
/**
 * <p>Use this operation to change the settings of a canary that has
 *          already been created.</p>
 *          <p>You can't use this operation to update the tags of an existing canary. To
 *          change the tags of an existing canary, use
 *          <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, UpdateCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, UpdateCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new UpdateCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCanaryCommandInput} for command's `input` shape.
 * @see {@link UpdateCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCanaryCommand extends $Command<UpdateCanaryCommandInput, UpdateCanaryCommandOutput, SyntheticsClientResolvedConfig> {
    readonly input: UpdateCanaryCommandInput;
    constructor(input: UpdateCanaryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SyntheticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCanaryCommandInput, UpdateCanaryCommandOutput>;
    private serialize;
    private deserialize;
}
