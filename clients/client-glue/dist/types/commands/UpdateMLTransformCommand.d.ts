import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateMLTransformRequest, UpdateMLTransformResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMLTransformCommandInput extends UpdateMLTransformRequest {
}
export interface UpdateMLTransformCommandOutput extends UpdateMLTransformResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p>
 *
 *          <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code>
 *       operation to assess how well your new parameters achieved your goals (such as improving the
 *       quality of your machine learning transform, or making it more cost-effective).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMLTransformCommandInput} for command's `input` shape.
 * @see {@link UpdateMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMLTransformCommand extends $Command<UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateMLTransformCommandInput;
    constructor(input: UpdateMLTransformCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput>;
    private serialize;
    private deserialize;
}
